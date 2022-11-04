<template>
  <div class="lion">
    <div class="center-lion lion-body"></div>
    <div class="center-lion lion-head"></div>
    <div class="center-lion lion-head-color"></div>
    <div class="center-lion lion-face">
      <div class="center-lion lion-face-nose"></div>
      <div class="center-lion lion-nose-thingy-under"></div>
      <div class="center-lion lion-mouth"></div>
      <div class="lion-cheek lion-cheek-left"></div>
      <div class="lion-cheek lion-cheek-right"></div>
    </div>
    <div class="center-lion lion-paw lion-paw-left">
      <div class="lion-nail lion-nail-1"></div>
      <div class="lion-nail lion-nail-2"></div>
      <div class="lion-nail lion-nail-3"></div>
    </div>
    <div class="center-lion lion-paw lion-paw-right">
      <div class="lion-nail lion-nail-4"></div>
      <div class="lion-nail lion-nail-2"></div>
      <div class="lion-nail lion-nail-5"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.center-lion {
  position: absolute;
  top: 50%;
  right: 0;
  margin: auto;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.lion {
  top: 90px;
  position: absolute;
  left: 40px;
}

.lion-face {
  width: 110px;
  height: 90px;
  left: 13px;
  border-radius: 5%;
  background-color: #be924d;
  &-nose {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid black;
    border-radius: 50%;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: black;
    border-radius: 50%;
    top: 37px;
    width: 12px;
    height: 25px;
    -webkit-transform: rotatex(180deg);
    transform: rotatex(180deg);
    transform-origin: top;
    animation: blink 3s infinite ease-out;
  }
  &::before {
    left: 15px;
  }
  &::after {
    right: 15px;
  }
}

.lion-nail {
  width: 3px;
  height: 20px;
  bottom: 0;
  position: absolute;
  background-color: #765117;
  &-1 {
    left: 10px;
  }
  &-2 {
    left: 20px;
  }
  &-3 {
    left: 30px;
    height: 16px;
  }
  &-4 {
    left: 10px;
    height: 16px;
  }
  &-5 {
    left: 30px;
  }
}

.lion-nose-thingy-under {
  width: 3px;
  top: 50px;
  height: 23px;
  background-color: black;
}

.lion-mouth {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 70px;
  background-color: black;
  animation: roar 4s infinite ease-out;
  animation-delay: 1s;
}

.lion-head {
  width: 150px;
  height: 150px;
  background-color: #765117;
  animation: shake-head 3s infinite;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  top: -76px;
  left: -5px;
  animation: shake-head 4s infinite ease-out;
  &-color {
    background-color: #a87a33;
    width: 140px;
    height: 140px;
    border-radius: 5%;
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 140px;
      height: 140px;
      right: 0;
      left: 0;
      border-radius: 5%;
      background-color: #a87a33;
    }
    &::after {
      transform: rotate(30deg);
    }
    &::before {
      transform: rotate(60deg);
    }
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    height: 100%;
    background-color: #765117;
  }
  &::after {
    transform: rotate(30deg);
  }
  &::before {
    transform: rotate(60deg);
  }
}

.lion-body {
  background-color: #a87a33;
  width: 153px;
  height: 112px;
  left: -8px;
  top: 60px;
  border: 3px solid #765117;
}

.lion-paw {
  width: 47px;
  height: 33px;
  top: 116px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border: 3px solid #765117;
  background-color: #a87a33;
  position: absolute;
  &-left {
    left: -10px;
  }
  &-right {
    left: 100px;
  }
}

.lion-cheek {
  position: absolute;
  width: 20px;
  height: 10px;
  top: 40px;
  background-color: #f7e4da;
  border-radius: 40%;
  &-left {
    left: -10px;
  }
  &-right {
    right: -10px;
  }
}

@keyframes shake-head {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  20% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  50% {
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
}

@keyframes roar {
  0% {
    width: 10px;
    height: 10px;
  }
  20% {
    width: 40px;
    height: 30px;
  }
  50% {
    width: 10px;
    height: 10px;
  }
}

@keyframes blink {
  0% {
    height: 25px;
  }
  5% {
    height: 5px;
  }
  10% {
    height: 25px;
  }
}
</style>
