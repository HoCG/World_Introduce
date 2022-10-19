<template>
  <div class="home-view">
    <svg width="1000" height="200" viewBox="0 0 1000 200">
      <text x="40" y="40%">안녕</text>
      <text x="300" y="40%">외계인</text>
      <text x="40" y="90%">지구에 온걸 환영해</text>
    </svg>
    <UFO></UFO>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UFO from "../components/space/UFO.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    UFO,
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.home-view {
  position: relative;
}

svg text {
  font-family: "Anton", sans-serif;
  font-size: 6rem;
  stroke-width: 3px;
  stroke: #fff;
  fill: transparent;
  stroke-dashoffset: 750;
  stroke-dasharray: 750;
  animation: stroke 1.5s linear;
  animation-fill-mode: forwards;
}

$total: 7;
@for $i from 1 through $total {
  text:nth-child(#{$i}) {
    animation-delay: $i - 1 + s;
  }
}

@keyframes stroke {
  0% {
    stroke-dashoffset: 750;
  }
  70% {
    fill: #fff;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #fff;
  }
}
</style>
