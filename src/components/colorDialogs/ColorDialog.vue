<template>
  <div class="dialog-background">
    <div class="color-dialog">
      <div @click="closeColorDialog" class="color-dialog__close-button"></div>
      <div class="color-dialog__title">Choose Your Color</div>
      <div class="color-dialog__color-element-cover">
        <template v-for="pallet in pallets">
          <ColorElement
            v-for="palletElement in pallet"
            :key="palletElement"
            @setColor="setColor"
            :palletElement="palletElement"
          ></ColorElement>
        </template>
      </div>
      <div class="color-dialog__demo-color" :style="colorDemoStyle"></div>
      <div class="color-dialog__choose-button" @click="chooseColor">choose</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ColorElement from "./ColorElement.vue";
import { pallets } from "./index";
export default defineComponent({
  components: {
    ColorElement,
  },
  setup(_, { emit }) {
    let mainColor = ref("#000");
    const setColor = (color: string) => {
      console.log("run");
      mainColor.value = color;
      console.log(mainColor);
    };
    const colorDemoStyle = ref({
      backgroundColor: mainColor,
    });
    const chooseColor = () => {
      emit("setColor", mainColor.value);
      emit("closeColorDialog");
    };
    const closeColorDialog = () => {
      emit("closeColorDialog");
    };
    return {
      pallets,
      chooseColor,
      closeColorDialog,
      setColor,
      colorDemoStyle,
    };
  },
});
</script>
