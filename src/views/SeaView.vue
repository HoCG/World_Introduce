<template>
  <div class="ocean-view">
    <Ocean></Ocean>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Ocean from "../components/oceans/Ocean.vue";
export default defineComponent({
  components: {
    Ocean,
  },
});
</script>
<style lang="scss">
.ocean-view {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
