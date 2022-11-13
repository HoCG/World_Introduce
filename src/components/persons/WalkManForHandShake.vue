<template>
  <div class="hand-shake--man">
    <div class="hand-shake--man-body">
      <div class="hand-shake--man-head">
        <div class="hand-shake--man-hear"></div>
        <div class="hand-shake--man-face">
          <div class="hand-shake--man-eye"></div>
          <div class="hand-shake--man-mouth"></div>
        </div>
      </div>
      <div class="hand-shake--left-hand">
        <div class="hand-shake--left-cloth"></div>
      </div>
      <div class="hand-shake--middle-part"></div>
      <div class="hand-shake--right-hand">
        <div class="hand-shake--right-cloth"></div>
      </div>
    </div>
    <div class="hand-shake--left-leg">
      <div class="hand-shake--left-shoe"></div>
    </div>
    <div class="hand-shake--right-leg">
      <div class="hand-shake--right-shoe"></div>
    </div>
  </div>
</template>
<style lang="scss">
.hand-shake {
  &--man {
    position: absolute;
    animation: ManRunning 4s linear;
    top: 20%;
    left: 40%;
    &-body {
      transform-origin: 25px 200px;
      animation: bodyRotate 2s linear 4s forwards;
    }
    &-eye {
      width: 6px;
      height: 6px;
      border-radius: 100px;
      top: 3px;
      left: 12px;
      background: #000;
      position: absolute;
    }
    &-mouth {
      width: 15px;
      height: 10px;
      border-radius: 0 0 100px 0;
      top: 18px;
      left: 12px;
      background: red;
      position: absolute;
    }
    &-head {
      background: #000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      margin-top: 32.5px;
      margin-left: -22.5px;
    }
    &-face {
      margin-left: 17.5px;
      width: 32.5px;
      height: 32.5px;
      position: absolute;
      border-radius: 0 0 50% 0;
      background-color: #fbebcd;
    }
    &-hear {
      background: #000;
      width: 60px;
      height: 17.5px;
      border-radius: 100px 100px 0 0;
    }
  }
  &--middle-part {
    z-index: 1;
    height: 100px;
    width: 25px;
    position: absolute;
    margin-top: 95px;
    margin-left: -12.5px;
    border-radius: 100%;
    background: linear-gradient(#d3cec4 80%, #6e5290 20%);
    transform: scale(2.2, 1.3);
  }
  &--left-hand,
  &--right-hand {
    margin-top: 95px;
    margin-left: -12.5px;
    height: 125px;
    width: 12.5px;
    border-radius: 0 0 100px 100px;
    float: left;
  }
  &--left-hand {
    background-color: #fbebcd;
    position: relative;
    z-index: 9999;
  }
  &--right-hand {
    background-color: #fbebcd;
    position: relative;
    z-index: -9999;
    transform-origin: 0 0;
    animation: handMovement2 4s ease-out,
      hand-shaking-ready 2s linear 6s forwards,
      hand-shaking-man 1s infinite linear 8s;
  }
  &--left-cloth,
  &--right-cloth {
    background-color: #d3cec4;
    height: 100px;
    width: 12.5px;
    position: absolute;
  }
  &--left-shoe,
  &--right-shoe {
    background: #000;
    top: 110px;
    width: 40px;
    height: 20px;
    border-radius: 0 100px 30px 0;
    position: absolute;
  }
  &--left-leg,
  &--right-leg {
    z-index: -1;
    background-color: #6e5290;
    margin-top: 200px;
    margin-left: -7.5px;
    height: 125px;
    width: 12.5px;
    position: absolute;
    float: left;
  }
  &--left-hand,
  &--right-leg {
    transform-origin: 0 0;
    animation: handMovement1 4s ease-out;
  }
  &--left-leg {
    transform-origin: 0 0;
    animation: handMovement2 4s ease-out;
  }
}

@keyframes bodyRotate {
  100% {
    transform: rotate(10deg);
  }
}

@keyframes hand-shaking-ready {
  0% {
  }
  100% {
    transform: rotate(-35deg) scaleY(1.2);
  }
}

@keyframes hand-shaking-man {
  0% {
    transform: rotate(-35deg) scaleY(1.2);
  }
  50% {
    transform: rotate(-55deg) scaleY(1.2);
  }
  100% {
    transform: rotate(-35deg) scaleY(1.2);
  }
}

/* for movement 1 */
@keyframes handMovement1 {
  0% {
    transform: rotate(-30deg);
  }
  10% {
    transform: rotate(20deg);
  }
  20% {
    transform: rotate(-30deg);
  }
  30% {
    transform: rotate(20deg);
  }
  40% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(20deg);
  }
  60% {
    transform: rotate(-30deg);
  }
  70% {
    transform: rotate(20deg);
  }
  80% {
    transform: rotate(-30deg);
  }
  90% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-30deg);
  }
}

/* for movement 2 */
@keyframes handMovement2 {
  0% {
    transform: rotate(20deg);
  }
  10% {
    transform: rotate(-30deg);
  }
  20% {
    transform: rotate(20deg);
  }
  30% {
    transform: rotate(-30deg);
  }
  40% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  60% {
    transform: rotate(20deg);
  }
  70% {
    transform: rotate(-30deg);
  }
  80% {
    transform: rotate(20deg);
  }
  90% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
@keyframes ManRunning {
  0% {
    /* 시작 */
    left: 0;
    transform: rotateY(0deg);
  }
  100% {
    left: 40%;
  }
}
</style>
