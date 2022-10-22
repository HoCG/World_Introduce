<template>
  <Earth></Earth>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Earth from "../components/space/Earth.vue";

export default defineComponent({
  name: "EarthView",
  components: { Earth },
});
</script>
