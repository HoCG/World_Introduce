<template>
  <div class="person__head">
    <div class="person__hair">
      <div class="person__hair--main" :style="hairStyle"></div>
      <div class="person__hair--left" :style="hairStyle"></div>
      <div
        v-if="genderChecker"
        class="person__hair--left__long"
        :style="hairStyle"
      >
        <div class="person__hair--left__long--top-part"></div>
        <div class="person__hair--left__long--bottom-part"></div>
      </div>
      <div class="person__hair--right" :style="hairStyle"></div>
      <div
        v-if="genderChecker"
        class="person__hair--right__long"
        :style="hairStyle"
      >
        <div class="person__hair--right__long--top-part"></div>
        <div class="person__hair--right__long--bottom-part"></div>
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
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  props: {
    hairStyle: Object,
    personStyle: Object,
    gender: String,
  },
  setup(props) {
    let genderChecker = false;
    onMounted(() => {
      if (props.gender === "여") {
        genderChecker = true;
      }
    });
    return {
      genderChecker,
    };
  },
});
</script>
<style lang="scss">
.person__head {
  position: relative;
  width: 300px;
  height: 350px;
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
      left: 150px;
      width: 150px;
      height: 110px;
      border-radius: 0 0 0 110px;
    }
    &--right {
      position: absolute;
      width: 200px;
      height: 110px;
      border-radius: 0 0 110px 0;
    }
  }
  .person__eyes {
    &--left {
      z-index: 999;
      top: 160px;
      left: 50px;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: absolute;
      background-color: black;
    }
    &--right {
      z-index: 999;
      top: 160px;
      right: 50px;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: absolute;
      background-color: black;
    }
  }
  .person__mouth {
    top: 300px;
    left: 150px;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 60px;
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
