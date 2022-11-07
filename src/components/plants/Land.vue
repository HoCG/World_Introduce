<template>
  <div class="land-container">
    <Lion :style="lionPositionStyle"></Lion>
    <LionFemale :style="lionFemalePositionStyle"></LionFemale>
    <Frog :style="frogPositionStyle"></Frog>
    <Monkey :style="monkeyPositionStyle"></Monkey>
    <CherryTree :style="cherryTreePositionStyle1"></CherryTree>
    <CherryTree :style="cherryTreePositionStyle2"></CherryTree>
    <CherryTree :style="cherryTreePositionStyle3"></CherryTree>
    <AppleTree :style="appleTreePositionStyle1"></AppleTree>
    <AppleTree :style="appleTreePositionStyle2"></AppleTree>
    <AppleTree :style="appleTreePositionStyle3"></AppleTree>
    <AppleTree :style="appleTreePositionStyle4"></AppleTree>
  </div>
</template>

<script lang="ts">
import AppleTree from "./AppleTree.vue";
import Frog from "../animals/Frog.vue";
import Lion from "../animals/Lion.vue";
import CherryTree from "./CherryTree.vue";
import { defineComponent, StyleValue } from "vue";
import Monkey from "../animals/Monkey.vue";
import LionFemale from "../animals/LionFemale.vue";
export default defineComponent({
  components: {
    AppleTree,
    Lion,
    Frog,
    CherryTree,
    Monkey,
    LionFemale,
  },
  setup() {
    const lionPositionStyle: StyleValue = {
      top: "550px",
      left: "800px",
      position: "absolute",
    };
    const lionFemalePositionStyle: StyleValue = {
      top: "550px",
      left: "650px",
      position: "absolute",
    };
    const monkeyPositionStyle: StyleValue = {
      top: "300px",
      left: "-100px",
      position: "absolute",
    };
    const frogPositionStyle: StyleValue = {
      top: "400px",
      left: "1000px",
      position: "absolute",
    };
    const appleTreePositionStyle1: StyleValue = {
      top: "220px",
      left: "150px",
      position: "absolute",
    };
    const appleTreePositionStyle2: StyleValue = {
      top: "200px",
      left: "350px",
      position: "absolute",
    };
    const appleTreePositionStyle3: StyleValue = {
      top: "180px",
      left: "550px",
      position: "absolute",
    };
    const appleTreePositionStyle4: StyleValue = {
      top: "200px",
      left: "700px",
      position: "absolute",
    };
    const cherryTreePositionStyle1: StyleValue = {
      top: "300px",
      left: "100px",
      position: "absolute",
    };
    const cherryTreePositionStyle2: StyleValue = {
      top: "350px",
      left: "250px",
      position: "absolute",
    };
    const cherryTreePositionStyle3: StyleValue = {
      top: "330px",
      left: "350px",
      position: "absolute",
    };
    return {
      monkeyPositionStyle,
      appleTreePositionStyle1,
      appleTreePositionStyle2,
      appleTreePositionStyle3,
      appleTreePositionStyle4,
      lionPositionStyle,
      lionFemalePositionStyle,
      frogPositionStyle,
      cherryTreePositionStyle1,
      cherryTreePositionStyle2,
      cherryTreePositionStyle3,
    };
  },
});
</script>

<style>
.land-container {
  position: relative;
  width: 1200px;
  height: 673px;
  background-image: url("../../assets/land.jpg");
  background-size: 1200px 673px;
}
</style>
