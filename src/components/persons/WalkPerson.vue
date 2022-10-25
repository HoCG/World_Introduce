<template>
  <div class="man-body" :style="bodyStyle">
    <div class="man-body__container">
      <div class="man-head" :style="hairStyle">
        <div class="man-hear" :style="hairStyle"></div>
        <div class="man-face" :style="skinStyle">
          <div class="man-eye"></div>
          <div class="man-mouth"></div>
        </div>
      </div>
      <div class="left-hand" :style="skinStyle">
        <div class="left-cloth" :style="topClothColor"></div>
      </div>
      <div class="middle-part" :style="bodyClothStyle"></div>
      <div class="right-hand" :style="skinStyle">
        <div class="right-cloth" :style="topClothColor"></div>
      </div>
    </div>
    <div class="left-leg" :style="bottomClothColor">
      <div class="left-shoe" :style="shoesColor"></div>
    </div>
    <div class="right-leg" :style="bottomClothColor">
      <div class="left-shoe" :style="shoesColor"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import person from "@/stores/person";

export default defineComponent({
  name: "HomeView",
  props: {
    person: person,
  },
  setup(props) {
    const bodyStyle = { animation: "", trasform: "" };
    if (props.person?.getScaleNumber() == 1) {
      bodyStyle.animation = `ManBodyScale1 ${props.person?.getSpeed()}s infinite linear`;
    } else {
      bodyStyle.animation = `ManBodyScale2 ${props.person?.getSpeed()}s infinite linear`;
    }
    const hairStyle = { backgroundColor: props.person?.getHairColor() };
    const skinStyle = { backgroundColor: props.person?.getPersonalColor() };
    const topClothColor = { backgroundColor: props.person?.getTopClothColor() };
    const bodyClothStyle = {
      background: `linear-gradient(${props.person?.getTopClothColor()} 80%, ${props.person?.getBottomClothColor()} 20%)`,
    };
    const bottomClothColor = {
      backgroundColor: props.person?.getBottomClothColor(),
    };
    const shoesColor = { backgroundColor: props.person?.getShoesColor() };
    return {
      bodyStyle,
      hairStyle,
      skinStyle,
      topClothColor,
      bodyClothStyle,
      bottomClothColor,
      shoesColor,
    };
  },
});
</script>
