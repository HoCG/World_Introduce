<template>
  <div class="grass">
    <div class="grass__blade grass__blade--1"></div>
    <div class="grass__blade grass__blade--2"></div>
    <div class="grass__blade grass__blade--3"></div>
  </div>
</template>
<style lang="scss">
$clr: darken(#339545, 10%);

.grass {
  width: 100vmin;
  height: 100vmin;
  position: absolute;
  overflow: hidden;
  transform: translate(-50%, 0%) translate3d(0, 0, 0);
  bottom: 0;
}

.grass__blade {
  position: absolute;

  &--1 {
    border-right: 3vmin solid $clr;
    border-top-right-radius: 50%;
    height: 160%;
    width: 100%;
    bottom: -100%;
    left: -50%;
    animation: move-blade-1 10s infinite;
  }

  @keyframes move-blade-1 {
    0%,
    30%,
    50%,
    55%,
    82%,
    97%,
    100% {
      border-top-right-radius: 50%;
    }
    20% {
      border-top-right-radius: 30%;
    }
    40% {
      border-top-right-radius: 20%;
    }
    70% {
      border-top-right-radius: 25%;
    }
    90% {
      border-top-right-radius: 35%;
    }
  }

  &--2 {
    border-right: 3vmin solid $clr;
    border-top-right-radius: 20%;
    height: 300%;
    width: 200%;
    bottom: -230%;
    left: -150%;
    animation: move-blade-2 10s infinite;
  }

  @keyframes move-blade-2 {
    0%,
    30%,
    50%,
    55%,
    82%,
    97%,
    100% {
      border-top-right-radius: 20%;
    }
    20% {
      border-top-right-radius: 15%;
    }
    40% {
      border-top-right-radius: 10%;
    }
    70% {
      border-top-right-radius: 10.5%;
    }
    90% {
      border-top-right-radius: 12.5%;
    }
  }

  &--3 {
    border-top-left-radius: 15%;
    border-left: 3vmin solid $clr;
    height: 360%;
    width: 200%;
    bottom: -300%;
    left: 50%;
    animation: move-blade-3 10s infinite;
  }
  @keyframes move-blade-3 {
    0%,
    30%,
    50%,
    55%,
    82%,
    97%,
    100% {
      border-top-left-radius: 15%;
    }
    20% {
      border-top-left-radius: 22%;
    }
    40% {
      border-top-left-radius: 17.5%;
    }
    70% {
      border-top-left-radius: 18.5%;
    }
    90% {
      border-top-left-radius: 21%;
    }
  }
}
</style>
