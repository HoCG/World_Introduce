<template>
  <div class="female_lion">
    <div class="center-female_lion female_lion-body"></div>
    <div class="center-female_lion female_lion-face">
      <div class="center-female_lion female_lion-ear">
        <div class="center-female_lion female_lion-ear__inner"></div>
      </div>
      <div class="center-female_lion female_lion-ear">
        <div class="center-female_lion female_lion-ear__inner"></div>
      </div>
      <div class="center-female_lion female_lion-face-nose"></div>
      <div class="center-female_lion female_lion-nose-thingy-under"></div>
      <div class="center-female_lion female_lion-mouth"></div>
      <div class="female_lion-cheek female_lion-cheek-left"></div>
      <div class="female_lion-cheek female_lion-cheek-right"></div>
    </div>
    <div class="center-female_lion female_lion-paw female_lion-paw-left">
      <div class="female_lion-nail female_lion-nail-1"></div>
      <div class="female_lion-nail female_lion-nail-2"></div>
      <div class="female_lion-nail female_lion-nail-3"></div>
    </div>
    <div class="center-female_lion female_lion-paw female_lion-paw-right">
      <div class="female_lion-nail female_lion-nail-4"></div>
      <div class="female_lion-nail female_lion-nail-2"></div>
      <div class="female_lion-nail female_lion-nail-5"></div>
    </div>
  </div>
</template>
<style lang="scss">
.center-female_lion {
  position: absolute;
  top: 50%;
  right: 0;
  margin: auto;
  left: 0;
  transform: translateY(-50%);
}
.female_lion {
  scale: 0.6;
  z-index: 3;
}

.female_lion:hover {
  .female_lion-mouth {
    animation: roar 4s infinite ease-out;
    //animation-delay: 1s;
  }
}

.female_lion-face {
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

.female_lion-nail {
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

.female_lion-nose-thingy-under {
  width: 3px;
  top: 50px;
  height: 23px;
  background-color: black;
}

.female_lion-mouth {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 70px;
  background-color: black;
}

.female_lion-body {
  background-color: #a87a33;
  width: 153px;
  height: 112px;
  left: -8px;
  top: 60px;
  border: 3px solid #765117;
}

.female_lion-ear {
  width: 0;
  height: 0;
  position: absolute;
  left: -60px;
  top: -30px;
  border-bottom: 35px solid #be924d;
  border-top: 35px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  &__inner {
    position: absolute;
    left: -8px;
    top: 10px;
    border-bottom: 20px solid black;
    border-top: 20px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  + .female_lion-ear {
    width: 0;
    height: 0;
    position: absolute;
    left: 60px;
    top: -30px;
    &__inner {
      position: absolute;
      left: -8px;
      top: 10px;
      border-bottom: 20px solid black;
      border-top: 20px solid transparent;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
  }
}

.female_lion-paw {
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

.female_lion-cheek {
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
