<template>
  <div class="giraffe-container">
    <div class="giraffe-leg left">
      <div class="giraffe-leg-patch one"></div>
      <div class="giraffe-leg-patch two"></div>
      <div class="giraffe-leg-patch three"></div>
    </div>
    <div class="giraffe-leg right">
      <div class="giraffe-leg-patch one"></div>
      <div class="giraffe-leg-patch two"></div>
      <div class="giraffe-leg-patch three"></div>
    </div>
    <div class="giraffe-body">
      <div class="giraffe-body-patch one"></div>
      <div class="giraffe-body-patch two"></div>
      <div class="giraffe-body-patch three"></div>
      <div class="giraffe-body-patch four"></div>
    </div>
    <div class="neck">
      <div class="giraffe-patch one"></div>
      <div class="giraffe-patch two"></div>
      <div class="giraffe-patch three"></div>
      <div class="giraffe-patch four"></div>
    </div>
    <div class="giraffe-head">
      <div class="giraffe-eye left"></div>
      <div class="giraffe-eye right"></div>
      <div class="giraffe-horn left"></div>
      <div class="giraffe-horn right"></div>
      <div class="giraffe-snout">
        <div class="giraffe-nose"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
:root {
  --patch-color: #b86d38;
  --giraffe-body-color: #e0bb89;
  --giraffe-snout-color: #f5ebcf;
  --hair-color: #785f5c;
}

.giraffe-container {
  position: relative;
  margin: auto;
  display: block;
  margin-top: 8%;
  margin-bottom: 8%;
  width: 200px;
  height: 600px;
}

.neck {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
  background: var(--giraffe-body-color);
  width: 30px;
  height: 120px;
  overflow: hidden;
}

.patch {
  position: absolute;
  width: 20px;
  height: 30px;
  border-radius: 50%;
  background: var(--patch-color);
}

.giraffe-patch.one {
  left: -5px;
}

.giraffe-patch.two {
  transform: rotate(45deg);
  left: -5px;
  top: 60px;
}

.giraffe-patch.three {
  right: -5px;
  transform: rotate(75deg);
  top: 25px;
}

.giraffe-patch.four {
  width: 40px;
  height: 30px;
  bottom: 0;
  right: -20px;
}

.giraffe-head {
  position: absolute;
  left: calc(50% - 5px);
  top: 45px;
  transform: translateX(-50%) rotate(20deg);
  width: 50px;
  height: 65px;
  background: var(--giraffe-body-color);
  border-radius: 20% 20% 50% 50%;
}

/* Top hair */
.giraffe-head::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 15px;
  transform: rotate(45deg);
  background: var(--hair-color);
  width: 15px;
  height: 15px;
}

/* Second hair piece */
.giraffe-head::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: var(--hair-color);
  right: 15px;
  top: -7px;
}

.giraffe-eye {
  position: absolute;
  top: 10px;
  width: 15px;
  height: 15px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;
  &.left {
    left: 3px;
  }
  &.right {
    right: 3px;
  }
}

/* Shine in giraffe-eye */
.giraffe-eye::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  right: 2px;
  bottom: 2px;
}

.giraffe-horn {
  position: absolute;
  width: 5px;
  height: 18px;
  top: -15px;
  background: var(--giraffe-body-color);
  &.left {
    left: 5px;
    transform: rotate(-10deg);
  }
  &.right {
    right: 5px;
    transform: rotate(10deg);
  }
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 8px;
    left: -4px;
    background: var(--giraffe-body-color);
    border-radius: 50%;
  }
}

.giraffe-snout {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  width: 40px;
  height: 25px;
  background: var(--giraffe-snout-color);
  border-radius: 50%;
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 20px;
    border-radius: 50%;
    border-bottom: 2px solid var(--hair-color);
  }
}

.giraffe-nose {
  position: absolute;
  width: 40px;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 5px;
    width: 5px;
    height: 7px;
    background: var(--hair-color);
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    right: 10px;
    top: 5px;
    width: 5px;
    height: 7px;
    background: var(--hair-color);
    border-radius: 50%;
  }
}

.giraffe-body {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--giraffe-body-color);
  border-radius: 45%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  &-patch {
    position: absolute;
    width: 30px;
    height: 40px;
    background: var(--patch-color);
    border-radius: 50%;
    &.one {
      transform: rotate(-20deg);
      left: -5px;
    }
    &.two {
      top: 40px;
      left: 20px;
    }
    &.three {
      right: -10px;
      top: 10px;
    }
    &.four {
      right: 15px;
      bottom: 0;
      transform: rotate(90deg);
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 60px;
    background: var(--giraffe-snout-color);
    border-radius: 50% 50% 0 0;
    bottom: -5px;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
}

.giraffe-leg {
  position: absolute;
  overflow: hidden;
  width: 15px;
  height: 100px;
  background: linear-gradient(
    to top,
    var(--hair-color),
    var(--hair-color) 10px,
    var(--giraffe-body-color) 10px,
    var(--giraffe-body-color)
  );
  top: 250px;
}

.giraffe-leg.left {
  transform: rotate(5deg);
  left: 60px;
}

.giraffe-leg.right {
  transform: rotate(-5deg);
  right: 60px;
}

.giraffe-leg-patch {
  position: absolute;
  top: 20px;
  width: 10px;
  height: 10px;
  background: var(--patch-color);
  border-radius: 30%;
}

.giraffe-leg-patch.one {
  left: -3px;
}

.giraffe-leg-patch.two {
  transform: rotate(45deg);
  left: 10px;
  top: 25px;
}

.giraffe-leg-patch.three {
  top: 35px;
  left: 5px;
  width: 5px;
  height: 5px;
}
</style>
