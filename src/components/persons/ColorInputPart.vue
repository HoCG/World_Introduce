<template>
  <div class="input-part">
    <div class="input-part__label">{{ pickColorText }}</div>
    <div class="color-element" :style="{ backgroundColor: pickColor }"></div>
    <div class="color-dialog-btn" @click="openColorDialog">go</div>
    <ColorDialog
      v-if="colorDialog"
      :thisColor="pickColor"
      @changeColor="changeColor"
      @closeColorDialog="closeColorDialog"
    ></ColorDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ColorDialog from "../colorDialogs/ColorDialog.vue";

export default defineComponent({
  components: {
    ColorDialog,
  },
  props: {
    pickColorText: String,
    pickColor: String,
  },
  setup(_, { emit }) {
    let colorDialog = ref(false);
    const openColorDialog = () => {
      colorDialog.value = true;
    };
    const changeColor = (color: string) => {
      emit("changeColor", color);
    };
    const closeColorDialog = () => {
      colorDialog.value = false;
    };
    return {
      colorDialog,
      openColorDialog,
      changeColor,
      closeColorDialog,
    };
  },
});
</script>
