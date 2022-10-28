<template>
  <div class="person__head">
    <div class="person__hair">
      <div class="person__hair--main" :style="hairColor"></div>
      <div class="person__hair--left" :style="hairColor"></div>
      <div v-if="genderChecker" class="person__hair--left__long">
        <div
          class="person__hair--left__long--top-part"
          :style="leftLongHairColor"
        ></div>
      </div>
      <div class="person__hair--right" :style="hairColor"></div>
      <div v-if="genderChecker" class="person__hair--right__long">
        <div
          class="person__hair--right__long--top-part"
          :style="rightLongHairColor"
        ></div>
      </div>
    </div>
    <div class="person__face" :style="personStyle">
      <div class="person__eyes--left"></div>
      <div class="person__eyes--right"></div>
      <div class="person__mouth"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, StyleValue } from "vue";
export default defineComponent({
  props: {
    hairStyle: String,
    personStyle: Object,
    gender: String,
  },
  setup(props) {
    let genderChecker = false;
    const hairColor: StyleValue = {
      backgroundColor: props.hairStyle,
    };
    const leftLongHairColor: StyleValue = {
      borderBottom: `70px solid ${props.hairStyle}`,
      borderRight: `20px solid ${props.hairStyle}`,
    };
    const rightLongHairColor: StyleValue = {
      borderBottom: `70px solid ${props.hairStyle}`,
      borderLeft: `20px solid ${props.hairStyle}`,
    };
    if (props.gender === "여") {
      genderChecker = true;
    }
    return {
      genderChecker,
      hairColor,
      leftLongHairColor,
      rightLongHairColor,
    };
  },
});
</script>
<style lang="scss">
.person__head {
  position: relative;
  width: 180px;
  height: 210px;
  .person__hair {
    position: relative;
    border-radius: 40px 40px 0px 0px;
    height: 10%;
    &--main {
      border-radius: 40px 40px 0px 0px;
      height: 100%;
    }
    &--left {
      position: absolute;
      left: 90px;
      width: 90px;
      height: 66px;
      border-radius: 0 0 0 110px;
      &__long {
        &--top-part {
          left: -39px;
          top: 13px;
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 70px solid;
          border-top: 70px solid transparent;
          border-left: 20px solid transparent;
          border-right: 20px solid;
        }
      }
    }
    &--right {
      position: absolute;
      width: 120px;
      height: 66px;
      border-radius: 0 0 110px 0;
      &__long {
        &--top-part {
          left: 179px;
          top: 13px;
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 70px solid;
          border-top: 70px solid transparent;
          border-left: 20px solid;
          border-right: 20px solid transparent;
        }
      }
    }
  }
  .person__eyes {
    &--left {
      z-index: 2;
      top: 96px;
      left: 30px;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      position: absolute;
      background-color: black;
    }
    &--right {
      z-index: 2;
      top: 96px;
      right: 30px;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      position: absolute;
      background-color: black;
    }
  }
  .person__mouth {
    top: 180px;
    left: 90px;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 20px;
    border-radius: 0 0 100px 100px;
    position: absolute;
    background-color: red;
  }
  .person__face {
    z-index: -20;
    height: 90%;
    border-radius: 0px 0px 60px 60px;
  }
}
</style>
