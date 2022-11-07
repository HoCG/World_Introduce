<template>
  <div class="cherry-tree">
    <div class="cherry-leaves">
      <div id="cherry-one" class="cherry-leaf"></div>
      <div id="cherry-two" class="cherry-leaf"></div>
      <div id="cherry-three" class="cherry-leaf"></div>
    </div>
    <div class="cherry-wood"></div>
  </div>
</template>
<style lang="scss">
/* cherry-tree wrapper */
.cherry-tree {
  scale: 0.5;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cherry-leaves,
.cherry-wood {
  height: 50%;
}

/* cherry-leaves wrapper */
.cherry-leaves {
  width: 100%;
  position: relative;
  transform: translateY(40px);
  z-index: 1;
}

.cherry-wood {
  width: 40px;
  background-color: #e58749;
  position: relative;
}

.cherry-wood::before,
.cherry-wood::after {
  position: absolute;
  content: "";
  background-color: #e58749;
  width: 40px;
  height: 60px;
}

.cherry-wood::before {
  top: -50px;
  left: -2px;
  transform-origin: right bottom;
  transform: rotateZ(-30deg);
}

.cherry-wood::after {
  top: -60px;
  left: -2px;
  transform-origin: left bottom;
  transform: rotateZ(30deg);
}

.cherry-leaf {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transform: scale(0);
  transition: transform 0.5s;
}

#cherry-one {
  background-color: #27b229;
  top: -15px;
  left: 25%;
}

#cherry-two {
  background-color: #0ea511;
  bottom: 0;
  left: 5%;
}

#cherry-three {
  background-color: #2d9b2e;
  bottom: 0;
  right: 5%;
}

.cherry-leaf::before {
  width: 20px;
  height: 20px;
  position: absolute;
  content: "";
  background-color: #e2062c;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%) scale(0);
  transition: transform 0.3s;
}

/* Hover Effects */
.cherry-tree:hover .cherry-leaf {
  transform: scale(1);
}

.cherry-tree:hover #cherry-one {
  transition-delay: 0.4s;
}

.cherry-tree:hover #cherry-two {
  transition-delay: 0.2s;
}

.cherry-tree:hover #cherry-three {
  transition-delay: 0s;
}

.cherry-tree:hover .cherry-leaf::before {
  transform: translate(-50%, 30%) scale(1);
  transition-delay: 0.6s;
}
</style>
