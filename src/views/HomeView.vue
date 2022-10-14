<template>
  <svg width="400" height="200" viewBox="0 0 400 200">
    <text x="40" y="65%">S</text>
    <text x="85" y="60%">V</text>
    <text x="130" y="60%">G</text>
    <text x="190" y="60%">T</text>
    <text x="230" y="65%">E</text>
    <text x="275" y="70%">S</text>
    <text x="320" y="66%">T</text>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
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
