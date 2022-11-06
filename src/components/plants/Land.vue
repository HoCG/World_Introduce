<template>
  <div class="land-view">
    <AppleTree></AppleTree>
    <Lion></Lion>
    <Frog></Frog>
  </div>
</template>

<script lang="ts">
import AppleTree from "./AppleTree.vue";
import Frog from "../plants/Frog.vue";
import Lion from "./Lion.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    AppleTree,
    Lion,
    Frog,
  },
});
</script>

<style>
.land-view {
  width: 1200px;
  height: 673px;
  background-image: url("../../assets/land.jpg");
  background-size: 1200px 673px;
}
</style>
