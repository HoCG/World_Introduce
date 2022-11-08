<template>
  <div class="monkey">
    <div class="monkey-ear monkey-style"></div>
    <div class="monkey-ear monkey-style"></div>
    <div class="monkey-top-head monkey-style">
      <div class="monkey-head-hair monkey-style"></div>
      <div class="monkey-eye monkey-style"></div>
      <div class="monkey-eye monkey-style"></div>
    </div>
    <div class="monkey-bottom-head monkey-style">
      <div class="monkey-smile monkey-style">
        <div class="monkey-tongue"></div>
      </div>
    </div>
    <div class="monkey-body"></div>
    <div class="monkey-hand monkey-style">
      <div class="monkey-hand-otherpiece">
        <div class="monkey-hand-mainpiece"></div>
      </div>
    </div>
    <div class="monkey-hand monkey-style"></div>
    <div class="monkey-leg monkey-style">
      <div class="monkey-leg-hair monkey-style"></div>
    </div>
    <div class="monkey-leg monkey-style">
      <div class="monkey-leg-hair monkey-style"></div>
    </div>

    <div class="monkey-leg-foot"></div>
    <div class="monkey-leg-foot"></div>
    <div class="monkey-tail monkey-style"></div>
  </div>
</template>
<style lang="scss">
.monkey {
  --monkey-body-color: #623a0f;
  --face-color: #e8bf77;
  scale: 0.2;
  transform: translate(-50%, -50%);
  width: 80vmin;
  height: 80vmin;
  z-index: 2;
  div {
    position: absolute;
    display: block;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
.monkey:hover {
  .monkey-hand {
    &-otherpiece {
      transform-origin: 100% 0%;
      animation: movement 0.5s alternate infinite ease-out;
    }
  }
}
@keyframes movement {
  from {
    top: 35%;
    left: -140%;
    transform: rotate(0deg);
  }
  to {
    top: 35%;
    left: -140%;
    transform: rotate(90deg);
  }
}

.monkey-style::before,
.monkey-style::after {
  content: "";
  position: absolute;
  display: block;
}

.monkey-top-head {
  background: var(--monkey-body-color);
  left: 0;
  right: 0;
  border-radius: 45% 45% 49% 56%;
  width: 19%;
  height: 12%;
  margin: auto;
  top: 22%;
  &::before {
    width: 59%;
    height: 59%;
    left: 0;
    background: var(--face-color);
    right: 0;
    margin: auto;
    border-radius: 45% 45% 49% 56%;
    top: 22%;
    z-index: 999;
  }
}

.monkey-bottom-head {
  background: var(--monkey-body-color);
  left: 0;
  right: 0;
  border-radius: 45% 45% 49% 56%;
  width: 22%;
  height: 12%;
  margin: auto;
  top: 29%;
  z-index: 99;
  &::before {
    width: 79%;
    height: 79%;
    left: 0;
    background: var(--face-color);
    right: 0;
    margin: auto;
    border-radius: 45% 45% 49% 56%;
    top: 10%;
  }
}

.monkey-head-hair {
  width: 2vmin;
  height: 5vmin;
  background: var(--monkey-body-color);
  left: 1vmin;
  right: 0;
  margin: auto;
  top: -4vmin;
  border-radius: 90% 0% 0% 30%;
  transform: rotate(19deg);
  &::before {
    width: 2vmin;
    height: 5vmin;
    background: var(--monkey-body-color);
    left: -3vmin;
    right: 0;
    margin: auto;
    top: 3vmin;
    border-radius: 99% 0% 0% 0%;
    transform: rotate(-36deg);
  }
}

.monkey-eye {
  width: 18%;
  height: 35%;
  background: #fff;
  border-radius: 100% / 90%;
  top: 33%;
  z-index: 999;
  left: 28%;
  &::before {
    width: 1vmin;
    height: 1.5vmin;
    background: #222;
    border-radius: 50%;
    top: 55%;
    left: 46%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 0.4vmin #3cb6c8;
  }
  &::after {
    width: 0.3vmin;
    height: 0.3vmin;
    background: #fff;
    border-radius: 50%;
    top: 34%;
    left: 44%;
    box-shadow: -0.5vmin 1.2vmin 0 0.05vmin #fff;
  }
  + .monkey-eye {
    left: 53%;
  }
}

.monkey-ear {
  width: 7vmin;
  height: 7vmin;
  background: var(--face-color);
  border-radius: 50%;
  top: 25%;
  left: 35%;
  border: 2vmin solid var(--monkey-body-color);
  + .monkey-ear {
    left: 56%;
  }
}

.monkey-smile {
  width: 6vmin;
  height: 3vmin;
  border-radius: 5px 5px 60px 60px;
  background: #191f45;
  bottom: 32%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}

.monkey-tongue {
  width: 4vmin;
  height: 2vmin;
  background: #ee6055;
  border-radius: 50px 50px 0 0;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
}

.monkey-body {
  width: 11vmin;
  height: 22vmin;
  border-radius: 160% 160% 124% 124%;
  background: var(--face-color);
  top: 36%;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0vmin 1vmin 0vmin 3vmin var(--monkey-body-color);
  z-index: 9;
}

.monkey-hand {
  width: 10vmin;
  height: 3vmin;
  background: var(--monkey-body-color);
  left: -27%;
  right: 0;
  margin: auto;
  top: 42%;
  border-radius: 22% 0 0 29%;
  transform: rotate(-21deg);
  z-index: 0;
  &-otherpiece {
    width: 9vmin;
    height: 3vmin;
    background: var(--monkey-body-color);
    left: -100%;
    right: 0;
    margin: auto;
    top: -90%;
    border-radius: 22% 20% 0 29%;
    transform: rotate(-270deg);
  }
  &-mainpiece {
    width: 5vmin;
    height: 5vmin;
    background: var(--face-color);
    border-radius: 50%;
    top: -30%;
    left: -30%;
  }
  + .monkey-hand {
    left: 27%;
    border-radius: 0 27% 27% 0;
    transform: rotate(19deg);
    &::before {
      left: 27%;
      top: 148%;
      background: var(--monkey-body-color);
      border-radius: 22% 20% 0 29%;
      transform: rotate(113deg);
      width: 9vmin;
      height: 3vmin;
      background: var(--monkey-body-color);
      margin: auto;
    }
    &::after {
      width: 5vmin;
      height: 5vmin;
      background: var(--face-color);
      border-radius: 50%;
      top: 205%;
      left: 34%;
    }
  }
}

.monkey-leg {
  width: 3vmin;
  height: 10vmin;
  background: var(--monkey-body-color);
  left: -23%;
  right: 0;
  margin: auto;
  bottom: 27%;
  transform: rotate(39deg);
  border-radius: 19%;
  z-index: 9;
  &::before {
    width: 3vmin;
    height: 10vmin;
    background: var(--monkey-body-color);
    bottom: -76%;
    left: 90%;
    border-radius: 19%;
    transform: rotate(-39deg);
  }
  + .monkey-leg {
    left: 21%;
    margin: auto;
    bottom: 26%;
    transform: rotate(323deg);
    &::before {
      transform: rotate(36deg);
      bottom: -73%;
      left: -77%;
    }
  }
  + .monkey-leg .monkey-leg-hair {
    bottom: -7vmin;
    left: -5vmin;
    transform: rotate(33deg);
  }
  &-foot {
    width: 7vmin;
    height: 4vmin;
    border-radius: 46% 3% 17% 35%;
    background: var(--face-color);
    bottom: 13%;
    left: 28%;
    + .monkey-leg-foot {
      border-radius: 3% 35% 46% 17%;
      left: 62%;
    }
  }
  &-hair {
    width: 0vmin;
    height: 0vmin;
    bottom: -8.4vmin;
    left: 6.35vmin;
    transform: rotate(323deg);
    border-left: 0vmin solid transparent;
    border-right: 1vmin solid transparent;
    border-top: 2vmin solid var(--monkey-body-color);
    &::before,
    &::after {
      width: 0vmin;
      height: 0vmin;
      bottom: -82%;
      transform: rotate(-23deg);
      border-left: 0vmin solid transparent;
      border-right: 1vmin solid transparent;
      border-top: 2vmin solid var(--monkey-body-color);
    }
    &::before {
      left: 1vmin;
    }
    &::after {
      left: 2vmin;
    }
  }
}

.monkey-tail {
  width: 16vmin;
  height: 13vmin;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border: 2vmin solid var(--monkey-body-color);
  border-top: 0;
  box-sizing: border-box;
  top: 58%;
  left: 50%;
  &::after {
    width: 12vmin;
    height: 7vmin;
    border-top-left-radius: 159px;
    border-top-right-radius: 120px;
    border-bottom-right-radius: 25%;
    border: 2vmin solid var(--monkey-body-color);
    border-bottom: 0;
    box-sizing: border-box;
    top: -56%;
    left: 100%;
  }
}
</style>
