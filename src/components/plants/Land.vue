<template>
  <div class="land-container">
    <Lion :style="positionIndex.lionPosition"></Lion>
    <LionFemale :style="positionIndex.lionFemalePosition"></LionFemale>
    <Frog :style="positionIndex.frogPosition"></Frog>
    <Monkey :style="positionIndex.monkeyPosition"></Monkey>
    <StaticTree
      v-for="staticTreePosition in positionIndex.staticTreePosition"
      :style="staticTreePosition"
      :key="staticTreePosition.top"
    ></StaticTree>
    <CherryTree
      v-for="cherryTreePosition in positionIndex.cherryTreePosition"
      :style="cherryTreePosition"
      :key="cherryTreePosition.top"
    ></CherryTree>
    <AppleTree
      v-for="appleTreePosition in positionIndex.appleTreePosition"
      :style="appleTreePosition"
      :key="appleTreePosition.top"
    ></AppleTree>
    <LemonTree
      v-for="lemonTreePosition in positionIndex.lemonTreePosition"
      :style="lemonTreePosition"
      :key="lemonTreePosition.top"
    ></LemonTree>
    <Giraffe
      :style="positionIndex.giraffePosition"
      :key="positionIndex.giraffePosition.top"
    ></Giraffe>
  </div>
</template>

<script lang="ts">
import { positionIndex } from "./landIndex";
import Lion from "../animals/Lion.vue";
import LionFemale from "../animals/LionFemale.vue";
import Frog from "../animals/Frog.vue";
import Monkey from "../animals/Monkey.vue";
import StaticTree from "./StaticTree.vue";
import CherryTree from "./CherryTree.vue";
import AppleTree from "./AppleTree.vue";
import LemonTree from "./LemonTree.vue";
import Giraffe from "../animals/Giraffe.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Lion,
    LionFemale,
    Frog,
    Monkey,
    StaticTree,
    CherryTree,
    AppleTree,
    LemonTree,
    Giraffe,
  },
  setup() {
    return {
      positionIndex,
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
