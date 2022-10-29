<template>
  <div
    className="color-element"
    @click="$emit('setColor', palletElement)"
    :style="elementStyle"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    palletElement: String,
  },
  emits: ["setColor"],
  setup(props) {
    const elementStyle = {
      backgroundColor: props.palletElement,
    };
    return {
      elementStyle,
    };
  },
});
</script>
