<template>
  <div class="meet-container">
    <Alien></Alien>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Alien from "@/components/space/Alien.vue";

export default defineComponent({
  components: {
    Alien,
  },
});
</script>

<style>
.meet-container {
  width: 100%;
  position: relative;
}
</style>
