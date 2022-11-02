<template>
  <div class="woman-body" :style="bodyStyle">
    <div class="woman-body__container">
      <div class="woman-head" :style="hairStyle">
        <div class="woman-hear" :style="hairStyle"></div>
        <div class="woman-long-hear" :style="hairStyle"></div>
        <div class="woman-face" :style="skinStyle">
          <div class="woman-eye"></div>
          <div class="woman-mouth"></div>
        </div>
      </div>
      <div class="left-hand" :style="skinStyle">
        <div class="left-cloth" :style="topClothColor"></div>
      </div>
      <div class="middle-part" :style="topClothColor">
        <div class="middle-part__skirt" :style="bottomClothColor">
          <div
            class="middle-part__skirt-line__left"
            :style="bottomClothLeftLineColor"
          ></div>
          <div
            class="middle-part__skirt-line__right"
            :style="bottomClothRightLineColor"
          ></div>
        </div>
      </div>
      <div class="right-hand" :style="skinStyle">
        <div class="right-cloth" :style="topClothColor"></div>
      </div>
    </div>
    <div class="left-leg" :style="skinStyle">
      <div class="left-shoe" :style="shoesColor"></div>
    </div>
    <div class="right-leg" :style="skinStyle">
      <div class="left-shoe" :style="shoesColor"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, StyleValue } from "vue";
import person from "@/stores/person";

export default defineComponent({
  name: "WalkWoman",
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
    const hairStyle: StyleValue = {
      backgroundColor: props.person?.getHairColor(),
    };
    const skinStyle: StyleValue = {
      backgroundColor: props.person?.getPersonalColor(),
    };
    const topClothColor: StyleValue = {
      backgroundColor: props.person?.getTopClothColor(),
    };
    const bottomClothColor: StyleValue = {
      backgroundColor: props.person?.getBottomClothColor(),
    };
    const bottomClothLeftLineColor: StyleValue = {
      borderBottom: `35px solid ${props.person?.getBottomClothColor()}`,
      borderRight: `10px solid ${props.person?.getBottomClothColor()}`,
    };
    const bottomClothRightLineColor: StyleValue = {
      borderBottom: `35px solid ${props.person?.getBottomClothColor()}`,
      borderLeft: `10px solid ${props.person?.getBottomClothColor()}`,
    };
    const shoesColor: StyleValue = {
      backgroundColor: props.person?.getShoesColor(),
    };
    return {
      bodyStyle,
      hairStyle,
      skinStyle,
      topClothColor,
      bottomClothColor,
      bottomClothLeftLineColor,
      bottomClothRightLineColor,
      shoesColor,
    };
  },
});
</script>
