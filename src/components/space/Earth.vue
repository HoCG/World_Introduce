<template>
  <div id="earth"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three-orbitcontrols-ts";

export default defineComponent({
  name: "Earth",
  setup() {
    interface uniform {
      type: string;
      value: any;
    }
    // Scene, Camera, Renderer
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0);
    let scene = new THREE.Scene();
    let aspect = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
    let cameraRotation = 0;
    let cameraRotationSpeed = 0.001;
    let cameraAutoRotation = true;
    let orbitControls = new OrbitControls(camera);

    // Lights
    let spotLight = new THREE.SpotLight(0xffffff, 1, 0, 100, 2);

    // Planet Proto
    let planetProto = {
      sphere: (size: number) => {
        let sphere = new THREE.SphereGeometry(size, 32, 32);

        return sphere;
      },
      material: (options: any) => {
        let material = new THREE.MeshPhongMaterial() as any;
        if (options) {
          for (var property in options) {
            material[property] = options[property];
          }
        }

        return material;
      },
      glowMaterial: (intensity: number, fade: number, color: string) => {
        // Custom glow shader from https://github.com/stemkoski/stemkoski.github.com/tree/master/Three.js
        let glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            c: {
              type: "f",
              value: intensity,
            } as uniform,
            p: {
              type: "f",
              value: fade,
            } as uniform,
            glowColor: {
              type: "c",
              value: new THREE.Color(color),
            } as uniform,
            viewVector: {
              type: "v3",
              value: camera.position,
            } as uniform,
          },
          vertexShader: `uniform vec3 viewVector; uniform float c; uniform float p; varying float intensity;
          void main() {
            vec3 vNormal = normalize( normalMatrix * normal );
            vec3 vNormel = normalize( normalMatrix * viewVector );
            intensity = pow( c - dot(vNormal, vNormel), p );
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`,
          fragmentShader: `uniform vec3 glowColor; varying float intensity;
          void main() 
          {
            vec3 glow = glowColor * intensity;
            gl_FragColor = vec4( glow, 1.0 );
          }`,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true,
        });

        return glowMaterial;
      },
      texture: (
        material: { [x: string]: string; needsUpdate: any },
        property: string | number,
        uri: any
      ) => {
        let textureLoader = new THREE.TextureLoader() as any;
        textureLoader.crossOrigin = true;
        textureLoader.load(uri, function (texture: string) {
          material[property] = texture;
          material.needsUpdate = true;
        });
      },
    };
    type optionsType = {
      surface: {
        size: number;
        material: {
          bumpScale: number;
          specular: THREE.Color;
          shininess: number;
        };
        textures: any;
      };
      atmosphere: {
        size: number;
        material: {
          opacity: number;
        };
        textures: any;
        glow: {
          size: number;
          intensity: number;
          fade: number;
          color: string | any;
        };
      };
    };
    const createPlanet = (options: optionsType) => {
      // Create the planet's Surface
      const surfaceGeometry = planetProto.sphere(options.surface.size);
      const surfaceMaterial = planetProto.material(options.surface.material);
      const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);

      // Create the planet's Atmosphere
      const atmosphereGeometry = planetProto.sphere(
        options.surface.size + options.atmosphere.size
      );
      const atmosphereMaterialDefaults = {
        side: THREE.DoubleSide,
        transparent: true,
      };
      const atmosphereMaterialOptions = Object.assign(
        atmosphereMaterialDefaults,
        options.atmosphere.material
      );
      const atmosphereMaterial = planetProto.material(
        atmosphereMaterialOptions
      );
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);

      // Create the planet's Atmospheric glow
      const atmosphericGlowGeometry = planetProto.sphere(
        options.surface.size +
          options.atmosphere.size +
          options.atmosphere.glow.size
      );
      const atmosphericGlowMaterial = planetProto.glowMaterial(
        options.atmosphere.glow.intensity,
        options.atmosphere.glow.fade,
        options.atmosphere.glow.color
      );
      const atmosphericGlow = new THREE.Mesh(
        atmosphericGlowGeometry,
        atmosphericGlowMaterial
      );

      // Nest the planet's Surface and Atmosphere into a planet object
      let planet = new THREE.Object3D();
      surface.name = "surface";
      atmosphere.name = "atmosphere";
      atmosphericGlow.name = "atmosphericGlow";
      planet.add(surface);
      planet.add(atmosphere);
      planet.add(atmosphericGlow);

      // Load the Surface's textures
      for (let textureProperty in options.surface.textures) {
        planetProto.texture(
          surfaceMaterial,
          textureProperty,
          options.surface.textures[textureProperty]
        );
      }

      // Load the Atmosphere's texture
      for (let textureProperty in options.atmosphere.textures) {
        planetProto.texture(
          atmosphereMaterial,
          textureProperty,
          options.atmosphere.textures[textureProperty]
        );
      }

      return planet;
    };

    const earth: any | undefined = createPlanet({
      surface: {
        size: 0.3,
        material: {
          bumpScale: 0.05,
          specular: new THREE.Color("grey"),
          shininess: 10,
        },
        textures: {
          map: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg",
          bumpMap:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg",
          specularMap:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg",
        },
      },
      //test
      atmosphere: {
        size: 0.003,
        material: {
          opacity: 0.8,
        },
        textures: {
          map: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmap.jpg",
          alphaMap:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg",
        },
        glow: {
          size: 0.02,
          intensity: 0.7,
          fade: 7,
          color: 0x93cfef,
        },
      },
    } as optionsType);

    // Scene, Camera, Renderer Configuration
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(1, 1, 1);
    orbitControls.enabled = !cameraAutoRotation;

    scene.add(camera);
    scene.add(spotLight);
    scene.add(earth);

    // Light Configurations
    spotLight.position.set(2, 0, 1);

    // Mesh Configurations
    earth.receiveShadow = true;
    earth.castShadow = true;
    earth.getObjectByName("surface").geometry.center();

    // On window resize, adjust camera aspect ratio and renderer size
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Main render function
    const render = () => {
      earth.getObjectByName("surface").rotation.y += (1 / 32) * 0.01;
      earth.getObjectByName("atmosphere").rotation.y += (1 / 16) * 0.01;
      if (cameraAutoRotation) {
        cameraRotation += cameraRotationSpeed;
        spotLight.position.y = 0;
        spotLight.position.x = 2 * Math.sin(cameraRotation);
        spotLight.position.z = 2 * Math.cos(cameraRotation);
        camera.position.y = 0;
        camera.position.x = 2 * Math.sin(cameraRotation);
        camera.position.z = 2 * Math.cos(cameraRotation);
        camera.lookAt(earth.position);
      }
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    onMounted(() => {
      render();
      (document.getElementById("earth") as HTMLElement).appendChild(
        renderer.domElement
      );
    });
  },
});
</script>
<style>
.earth {
  position: absolute;
  top: -100px;
}
</style>
