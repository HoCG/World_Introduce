<template>
  <div class="dialog-background">
    <div class="color-dialog">
      <div @click="closeDialog" class="color-dialog__close-button"></div>
      <div class="color-dialog__title">Choose Your Color</div>
      <div class="color-dialog__color-element-cover">
        <template v-for="pallet in pallets">
          <ColorElement
            v-for="palletElement in pallet"
            :key="palletElement"
            :palletElement="palletElement"
          ></ColorElement>
        </template>
      </div>
      <div class="color-dialog__demo-color"></div>
      <div class="color-dialog__choose-button" @click="chooseColor">choose</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ColorElement from "./ColorElement.vue";
import { pallets } from "./index";
export default defineComponent({
  components: {
    ColorElement,
  },
  setup(_, { emit }) {
    const chooseColor = () => {
      emit("closeDialog");
    };
    const closeDialog = () => {
      emit("closeDialog");
    };
    return {
      pallets,
      chooseColor,
      closeDialog,
    };
  },
});
</script>
