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
    let container;
    let camera, scene, renderer;
    let water, sun, mesh;

    function init() {
      container = document.getElementById("three-container");
      //
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(1200, 600);
      container.appendChild(renderer.domElement);
      //
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      camera.position.set(20, 45, 400);

      //

      sun = new THREE.Vector3();

      // Water

      let waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

      water = new Water(waterGeometry, {
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

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox

      let sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      let uniforms = sky.material.uniforms;

      uniforms["turbidity"].value = 10;
      uniforms["rayleigh"].value = 2;
      uniforms["mieCoefficient"].value = 0.005;
      uniforms["mieDirectionalG"].value = 0.8;

      let parameters = {
        inclination: 0.49,
        azimuth: 0.205,
      };

      let pmremGenerator = new THREE.PMREMGenerator(renderer);

      function updateSun() {
        let theta = Math.PI * (parameters.inclination - 0.5);
        let phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        sun.x = Math.cos(phi);
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        scene.environment = pmremGenerator.fromScene(sky).texture;
      }

      updateSun();

      //

      let geometry = new THREE.BoxBufferGeometry(30, 30, 30);

      let material = new THREE.MeshStandardMaterial({ roughness: 0 });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      //

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      let time = performance.now() * 0.001;
      mesh.position.y = Math.sin(time) * 20 + 5;
      mesh.rotation.x = time * 0.5;
      mesh.rotation.z = time * 0.51;
      water.material.uniforms["time"].value += 1.0 / 60.0;
      renderer.render(scene, camera);
    }
    onMounted(() => {
      init();
      animate();
    });
  },
});
</script>
<style lang="scss">
#three-container {
}
</style>
