<template>
  <div class="earth-view">
    <div class="earth-text-area">
      <svg
        class="earth-text-style"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.1,-21.7C27.9,-14.3,34.5,-7.1,36.1,1.7C37.8,10.4,34.5,20.9,27.7,27.6C20.9,34.3,10.4,37.4,1.6,35.7C-7.2,34.1,-14.4,27.9,-19.6,21.1C-24.8,14.4,-27.9,7.2,-28.4,-0.5C-28.8,-8.1,-26.6,-16.2,-21.4,-23.6C-16.2,-31.1,-8.1,-37.8,-0.5,-37.3C7.1,-36.8,14.3,-29.1,21.1,-21.7Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <svg
        class="earth-text-style"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30,-28.9C37.3,-22.7,40.6,-11.4,38.4,-2.1C36.3,7.2,28.9,14.3,21.6,21.2C14.3,28.1,7.2,34.7,-0.2,34.9C-7.5,35,-15,28.7,-20.2,21.9C-25.4,15,-28.3,7.5,-30.1,-1.8C-31.9,-11.2,-32.7,-22.3,-27.5,-28.4C-22.3,-34.6,-11.2,-35.6,0.1,-35.8C11.4,-35.9,22.7,-35,30,-28.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
        ></path>
      </svg>
      <svg
        class="earth-text-style"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24,-23C29.9,-18,32.8,-9,32.1,-0.7C31.4,7.6,27,15.2,21.1,20.5C15.2,25.9,7.6,29.1,-0.4,29.5C-8.4,29.9,-16.7,27.5,-23,22.1C-29.3,16.7,-33.5,8.4,-33.2,0.3C-33,-7.9,-28.3,-15.7,-22,-20.6C-15.7,-25.6,-7.9,-27.5,0.6,-28.1C9,-28.7,18,-27.9,24,-23Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
        ></path>
      </svg>
      <svg
        class="earth-text-style"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6,-19.3C26.9,-14.4,32.3,-7.2,32.9,0.6C33.5,8.4,29.3,16.8,23,24.1C16.8,31.5,8.4,37.9,0.4,37.5C-7.7,37.1,-15.3,30,-22.4,22.7C-29.4,15.3,-35.9,7.7,-36.4,-0.5C-37,-8.7,-31.5,-17.4,-24.5,-22.4C-17.4,-27.3,-8.7,-28.5,-0.8,-27.7C7.2,-27,14.4,-24.3,20.6,-19.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <div class="earth-text-box">
        <h1 class="earth-text">어때? 지구에</h1>
        <h1 class="earth-text">와보지 않을래?</h1>
      </div>
    </div>
    <Earth></Earth>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Earth from "../components/space/Earth.vue";

export default defineComponent({
  name: "EarthView",
  components: { Earth },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
.earth-view {
  display: flex;
  justify-content: center;
  position: relative;
}
.earth-text-area {
  display: flex;
  justify-content: center;
  position: absolute;
}
.earth-text-style {
  width: 30%;
  animation: rotate infinite linear;
  mix-blend-mode: multiply;
  margin: 0 -8%;
}
.earth-text-style:nth-child(1) {
  fill: tomato;
  animation-duration: 4s;
}
.earth-text-style:nth-child(2) {
  fill: gold;
  animation-duration: 2s;
  animation-direction: reverse;
}
.earth-text-style:nth-child(3) {
  fill: lime;
  animation-duration: 6s;
}
.earth-text-style:nth-child(4) {
  fill: turquoise;
  animation-duration: 3s;
  animation-direction: reverse;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.earth-text-box {
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  .earth-text {
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
    letter-spacing: 0.5em;
    font-size: 4vw;
    animation: text 1s infinite;
    mix-blend-mode: screen;
  }
}
@keyframes text {
  0% {
    text-shadow: 2px 0px 0px tomato;
  }
  10% {
    text-shadow: -2px -2px 0px gold;
  }
  20% {
    text-shadow: 2px 0px 0px lime;
  }
  30% {
    text-shadow: 2px 0px 0px turquoise;
  }
  40% {
    text-shadow: 2px 2px 0px tomato;
  }
  50% {
    text-shadow: 0px -2px 0px gold;
  }
  60% {
    text-shadow: 0px 2px 0px lime;
  }
  70% {
    text-shadow: 2px 0px 0px turquoise;
  }
  80% {
    text-shadow: 2px -4px 0px tomato;
  }
  90% {
    text-shadow: 2px 2px 0px gold;
  }
  100% {
    text-shadow: 2px 0px 0px lime;
  }
}
</style>
