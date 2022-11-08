<template>
  <div class="meet-container">
    <Alien></Alien>
    <WalkManForHandShake></WalkManForHandShake>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Alien from "@/components/space/Alien.vue";
import WalkManForHandShake from "@/components/persons/WalkManForHandShake.vue";

export default defineComponent({
  components: {
    Alien,
    WalkManForHandShake,
  },
});
</script>

<style>
.meet-container {
  display: flex;
  width: 1200px;
  height: 600px;
  position: relative;
}
</style>
