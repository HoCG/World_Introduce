<template>
  <div class="ocean-view">
    <OceanText></OceanText>
    <Ocean></Ocean>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OceanText from "@/components/oceans/OceanText.vue";
import Ocean from "../components/oceans/Ocean.vue";
export default defineComponent({
  components: {
    Ocean,
    OceanText,
  },
});
</script>
<style lang="scss">
.ocean-view {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
