<template>
  <div class="man-body" :style="bodyStyle">
    <div class="man-body__container">
      <div class="man-head">
        <div class="man-hear"></div>
        <div class="man-face">
          <div class="man-eye"></div>
          <div class="man-mouth"></div>
        </div>
      </div>
      <div class="left-hand">
        <div class="left-cloth"></div>
      </div>
      <div class="middle-part">
        <div class="middle-part__top"></div>
        <div class="middle-part__bottom"></div>
      </div>
      <div class="right-hand">
        <div class="right-cloth"></div>
      </div>
    </div>
    <div class="left-leg">
      <div class="left-shoe"></div>
    </div>
    <div class="right-leg">
      <div class="left-shoe"></div>
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
    return {
      bodyStyle,
    };
  },
});
</script>
