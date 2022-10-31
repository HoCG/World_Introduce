<template>
  <div id="three-container"></div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import * as THREE from "three";
//module ciel
import { Sky } from "three-stdlib/objects/Sky";
//module eau
import { Water } from "three-stdlib/objects/Water";

export default defineComponent({
  setup() {
    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshStandardMaterial({ roughness: 0 });
    const mesh = new THREE.Mesh(geometry, material);
    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      20000
    );
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      alpha: 1.0,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    const init = () => {
      const container = document.getElementById("three-container");
      //
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(1200, 600);
      container.appendChild(renderer.domElement);
      //
      camera.position.set(20, 45, 400);
      const sun = new THREE.Vector3();
      // Water

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox

      const sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const uniforms = sky.material.uniforms;

      uniforms["turbidity"].value = 10;
      uniforms["rayleigh"].value = 2;
      uniforms["mieCoefficient"].value = 0.005;
      uniforms["mieDirectionalG"].value = 0.8;

      const parameters = {
        inclination: 0.49,
        azimuth: 0.205,
      };

      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      const updateSun = () => {
        const theta = Math.PI * (parameters.inclination - 0.5);
        const phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        sun.x = Math.cos(phi);
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        scene.environment = pmremGenerator.fromScene(sky).texture;
      };

      updateSun();
      //
      scene.add(mesh);
      //
      window.addEventListener("resize", onWindowResize, false);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      const time = performance.now() * 0.001;
      mesh.position.y = Math.sin(time) * 20 + 5;
      mesh.rotation.x = time * 0.5;
      mesh.rotation.z = time * 0.51;
      water.material.uniforms["time"].value += 1.0 / 60.0;
      renderer.render(scene, camera);
    };
    onMounted(() => {
      init();
      animate();
    });
  },
});
</script>
