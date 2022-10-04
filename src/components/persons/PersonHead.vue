<template>
  <div class="person__head">
    <div class="person__hair">
      <div class="person__hair--main" :style="hairStyle"></div>
      <div class="person__hair--left" :style="hairStyle"></div>
      <div class="person__hair--right" :style="hairStyle"></div>
    </div>
    <div class="person__face" :style="personStyle">
      <div class="person__eyes--left"></div>
      <div class="person__eyes--right"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    hairStyle: Object,
    personStyle: Object,
  },
});
</script>
<style lang="scss">
.person__head {
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
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
      height: 125px;
      border-radius: 0 0 0 150px;
    }
    &--right {
      position: absolute;
      width: 200px;
      height: 125px;
      border-radius: 0 0 150px 0;
    }
  }
  .person__face {
    z-index: -20;
    height: 90%;
    border-radius: 0px 0px 60px 60px;
  }
}
</style>
