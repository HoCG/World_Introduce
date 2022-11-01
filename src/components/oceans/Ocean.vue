<template>
  <div id="three-container">
    <svg style="display: none" id="circle" viewBox="0 0 100 100">
      <path d="M50 16c26 0 46 8 46 34S77 80 51 80 4 76 4 50s20-34 46-34Z" />
    </svg>
    <svg style="display: none" id="bow" viewBox="0 0 100 100">
      <path
        d="M50 58c26 0 44 28 44-12 0-48-26-6-40-5-15 0-49 61-48 27 2-78 18-10 44-10Z"
      />
    </svg>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import * as THREE from "three";
import { Flow } from "three/addons/modifiers/CurveModifier";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
//module ciel
import { Sky } from "three-stdlib/objects/Sky";
//module eau
import { Water } from "three-stdlib/objects/Water";
import transformSVGPath from "../../utils/transformSVGPath";

export default defineComponent({
  setup() {
    let fish;
    let flow;
    let frequency = 11;
    let amplitude = 0.04;
    let pointCount = 100;
    let svgName = "bow";
    const loader = new GLTFLoader();
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
      transparent: true,
      fog: scene.fog !== undefined,
    });
    water.material.transparent = true;

    const init = () => {
      const container = document.getElementById("three-container");
      //
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(1200, 600);
      container.appendChild(renderer.domElement);
      //
      camera.position.set(70, 90, 350);
      const sun = new THREE.Vector3();
      // Water

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox
      // LIGHT
      let ambLight = new THREE.AmbientLight(0xffffff, 1.25, 100);
      scene.add(ambLight);
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

      loader.load("https://assets.codepen.io/5946/fish_1.glb", function (gltf) {
        fish = gltf.scene;
        fish.scale.set(8, 8, 8);
        const svg = document.getElementById(svgName);
        const origPoints = getCenteredSVGPoints(svg, 0.025);
        const fishPoints = getFishPointsFromPoints(origPoints);
        const fishCurve = new THREE.CatmullRomCurve3(fishPoints, true);
        followPoints(fishCurve);
        window.addEventListener("resize", onWindowResize, false);
        animate();
      });
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      flow.moveAlongCurve(0.001);
      render();
    };

    const getCenteredSVGPoints = (svg, scale) => {
      const viewBox = svg.getAttribute("viewBox").split(" ");
      const width = parseFloat(viewBox[2]);
      const height = parseFloat(viewBox[3]);
      const path = svg.querySelector("path").getAttribute("d");
      const shape = transformSVGPath(path);
      const points = shape.getPoints(pointCount).map((point) => {
        let v = new THREE.Vector3(
          point.x * 15 - width * 4,
          20,
          point.y * 3 - height
        );
        v = v.multiplyScalar(scale);
        return v;
      });
      return points;
    };
    const getFishPointsFromPoints = (points) => {
      const fishPoints = [];
      const curve = new THREE.CatmullRomCurve3(points);
      for (let i = 0; i < pointCount; i++) {
        if (i > 48) break;
        const t = i / pointCount;
        const angle = (i / (pointCount / frequency)) % 1;
        const displacement = Math.sin(Math.PI * 2 * angle) * amplitude;
        let point = curve.getPoint(t);
        const tangeant = curve.getTangent(t);
        const normal = tangeant.clone().cross(new THREE.Vector3(0, 1, 0));
        point = point.add(normal.multiplyScalar(displacement));
        fishPoints.push(point);
      }
      return fishPoints;
    };
    const followPoints = (curve) => {
      flow = new Flow(fish);
      console.log(curve);
      flow.updateCurve(0, curve);
      scene.add(flow.object3D);
    };

    const render = () => {
      water.material.uniforms["time"].value += 1.0 / 60.0;
      renderer.render(scene, camera);
    };
    onMounted(() => {
      init();
    });
  },
});
</script>
