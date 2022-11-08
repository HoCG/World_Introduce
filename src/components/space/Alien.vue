<template>
  <div class="jelly-wrapper">
    <div class="jelly-body">
      <div class="jelly-inner">
        <div class="jelly-eyes"></div>
        <div class="jelly-hands"></div>
      </div>
    </div>
    <div class="jelly-tentacle-1"></div>
    <div class="jelly-tentacle-2"></div>
    <div class="jelly-tentacle-3"></div>
    <div class="jelly-tentacle-4"></div>
    <div class="jelly-tentacle-5"></div>
  </div>
</template>
<style lang="scss">
.jelly-wrapper {
  width: 265px;
  position: absolute;
  transform: translate3D(-50%, -75%, 0);
  animation: jelly-movement 10s infinite linear;
}

.jelly-body {
  background: #6fdcae; /* W3C */
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  animation: head-movement 10s infinite linear;
}

.jelly-inner {
  position: absolute;
  left: 50%;
  top: 35%;
  animation: facing-movement 10s infinite linear;
}

.jelly-eyes {
  background-color: #f7fff7;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20%;
  left: 50%;
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px 0.5px #6fdcae;
  transform: translate(-50%, 0%);

  &:before {
    content: "";
    background-color: #1c1c1c;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 25%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, 0%) scale(1, 1);
    transition: 0.75s;
    animation: iris 6s ease infinite alternate;
  }

  &:after {
    content: "";
    background-color: none;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 40px #6fdcae;
    transform: translate(-50%, -50%);
    transition: 0.15s;
    animation: blink-animation 6s ease-out infinite;
  }
}

@keyframes blink-animation {
  0% {
    height: 50px;
  }
  90% {
    height: 50px;
  }
  95% {
    height: 0px;
  }
  100% {
    height: 50px;
  }
}

@keyframes iris {
  0% {
    top: 25%;
    left: 50%;
  }
  5% {
    top: 25%;
    left: 50%;
  }
  10% {
    top: 12%;
    left: 62%;
  }
  28% {
    top: 12%;
    left: 62%;
  }
  34% {
    top: 32%;
    left: 50%;
  }
  48% {
    top: 32%;
    left: 50%;
  }
  64% {
    top: 24%;
    left: 48%;
  }
  70% {
    top: 24%;
    left: 48%;
  }
  86% {
    top: 32%;
    left: 42%;
  }
  100% {
    top: 25%;
    left: 50%;
  }
}

%jelly-hand {
  content: "";
  position: absolute;
  height: 50px;
  width: 45px;
  border-top: 0;
  border-radius: 0 0 50% 50%;
  box-shadow: 0px 5px 6px #3b949b;
}

.jelly-hands {
  position: absolute;
  top: 65px;

  &:before {
    @extend %jelly-hand;
    left: 110px;
  }

  &:after {
    @extend %jelly-hand;
    left: -155px;
  }
}

div[class^="jelly-tentacle-"] {
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: #6fdcae;
  border-radius: 0 0 25px 25px;
  box-shadow: 0px 2.5px 0px #008d9b;
}

.jelly-tentacle-1 {
  left: 0%;
  animation: tentacle-animation 1s infinite cubic-bezier(0.46, 0.2, 0.53, 0.92) -0.2s;
}

.jelly-tentacle-2 {
  left: 25%;
  transform: translate3D(-25%, 0, 0);
  animation: tentacle-animation 1s infinite cubic-bezier(0.46, 0.2, 0.53, 0.92) -0.4s;
}

.jelly-tentacle-3 {
  left: 50%;
  transform: translate3D(-50%, 0, 0);
  animation: tentacle-animation 1s infinite cubic-bezier(0.46, 0.2, 0.53, 0.92) -0.1s;
}

.jelly-tentacle-4 {
  right: 25%;
  transform: translate3D(25%, 0, 0);
  animation: tentacle-animation 1s infinite cubic-bezier(0.46, 0.2, 0.53, 0.92) -0.7s;
}

.jelly-tentacle-5 {
  right: 0%;
  animation: tentacle-animation 1s infinite cubic-bezier(0.46, 0.2, 0.53, 0.92) -0.3s;
}

@keyframes jelly-movement {
  0% {
    top: 55%;
    left: 50%;
  }
  5% {
    top: 50%;
  }
  10% {
    top: 55%;
  }
  15% {
    top: 50%;
  }
  20% {
    top: 55%;
  }
  25% {
    top: 50%;
    left: calc(100% - 135px);
  }
  30% {
    top: 55%;
  }
  35% {
    top: 50%;
  }
  40% {
    top: 55%;
  }
  45% {
    top: 50%;
  }
  50% {
    top: 55%;
    left: 50%;
  }
  55% {
    top: 50%;
  }
  60% {
    top: 55%;
  }
  65% {
    top: 50%;
  }
  70% {
    top: 55%;
  }
  75% {
    top: 50%;
    left: 135px;
  }
  80% {
    top: 55%;
  }
  85% {
    top: 50%;
  }
  90% {
    top: 55%;
  }
  95% {
    top: 50%;
  }
  100% {
    top: 55%;
    left: 50%;
  }
}

@keyframes tentacle-animation {
  0% {
    bottom: -8%;
  }
  50% {
    bottom: -20%;
  }
  100% {
    bottom: -8%;
  }
}

@keyframes facing-movement {
  20% {
    left: 40%;
  }
  25% {
    left: 50%;
  }
  30% {
    left: 60%;
  }
  49.9% {
    left: 60%;
  }
  51.1% {
    left: 60%;
  }
  70% {
    left: 60%;
  }
  75% {
    left: 45%;
  }
  80% {
    left: 35%;
  }
}

@keyframes mouth-movement {
  0% {
    left: 52%;
  }
  20% {
    left: 52%;
  }
  25% {
    left: 50%;
  }
  30% {
    left: 46%;
  }
  70% {
    left: 46%;
  }
  75% {
    left: 50%;
  }
  80% {
    left: 52%;
  }
  100% {
    left: 52%;
  }
}

@keyframes eyes-movement {
  0% {
    left: 5px;
  }
  20% {
    left: 5px;
  }
  25% {
    left: 0px;
  }
  30% {
    left: -5px;
  }
  70% {
    left: -5px;
  }
  75% {
    left: 0px;
  }
  80% {
    left: 5px;
  }
  100% {
    left: 5px;
  }
}

@keyframes head-movement {
  0% {
    border-top-right-radius: 70px;
    border-top-left-radius: 90px;
  }
  20% {
    border-top-right-radius: 70px;
    border-top-left-radius: 90px;
  }
  25% {
    border-top-right-radius: 80px;
    border-top-left-radius: 80px;
  }
  30% {
    border-top-right-radius: 90px;
    border-top-left-radius: 70px;
  }
  70% {
    border-top-right-radius: 90px;
    border-top-left-radius: 70px;
  }
  75% {
    border-top-right-radius: 80px;
    border-top-left-radius: 80px;
  }
  80% {
    border-top-right-radius: 70px;
    border-top-left-radius: 90px;
  }
  100% {
    border-top-right-radius: 70px;
    border-top-left-radius: 90px;
  }
}
</style>
