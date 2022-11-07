<template>
  <div class="land-view">
    <div class="land-text-box">
      <h1 class="land-text">지구의 생명체들을 봐봐!</h1>
      <h1 class="land-text">다양한 생명체들이 이땅에 살고있어</h1>
    </div>
    <Land></Land>
  </div>
</template>

<script lang="ts">
import Land from "../components/plants/Land.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Land,
  },
});
</script>

<style lang="scss">
.land-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@import url(https://fonts.googleapis.com/css?family=Rammetto+One);

section {
  align-self: center;
  direction: rtl;
}

.land-text-box {
  margin-bottom: 50px;
}

.land-text {
  margin: 3rem auto -2rem;
  font-size: 3.5rem;
  letter-spacing: -2px;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
}
</style>
