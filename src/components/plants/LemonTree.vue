<template>
  <div class="tree-area">
    <!--@mouseover="lemonDrop" @mouseleave="lemonReturn">-->
    <div class="tree">
      <div class="tree-trunk"></div>
      <div class="tree-leaf"></div>
      <div class="tree-bottom"></div>
      <div class="tree-middle"></div>
      <div class="tree-top"></div>
    </div>
    <div class="lemons">
      <div class="lemon lemon1"></div>
      <div class="lemon lemon2"></div>
      <div class="lemon lemon3"></div>
      <div class="lemon lemon4"></div>
      <div class="lemon lemon5"></div>
    </div>
  </div>
</template>
<style lang="scss">
.tree-area {
  z-index: 2;
  scale: 0.4;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  &:hover {
    .lemon {
      &1,
      &2,
      &3 {
        top: 370px;
      }
      &4 {
        top: 382px;
      }
      &5 {
        top: 368px;
        left: 48px;
      }
    }
  }
}
.tree {
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.lemons {
  top: 80px;
}
.tree-trunk {
  position: absolute;
  bottom: 20px;
  background-image: linear-gradient(
    to right,
    rgb(92, 47, 47) 0%,
    rgb(92, 47, 47) 65%,
    rgb(71, 37, 37) 85%
  );
  width: 50px;
  height: 200px;
  border-radius: 10% 10% 49% 50% / 0% 0% 5% 5%;
  &::before {
    position: absolute;
    content: "";
    bottom: 26px;
    left: -8px;
    background-image: linear-gradient(
      to bottom,
      rgb(100, 54, 54) 60%,
      rgb(77, 45, 45) 90%
    );
    height: 26px;
    width: 20px;
    border-radius: 35% 35% 35% 35% / 50% 50% 50% 50%;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 26px;
    left: -8px;
    background: rgb(151, 122, 98);
    height: 26px;
    width: 12px;
    border-radius: 50%;
  }
}
.tree-bottom {
  position: absolute;
  bottom: 80px;
  background-color: rgb(60, 136, 113);
  border-radius: 46% 36% 50% 27% / 45% 37% 57% 38%;
  width: 280px;
  height: 130px;
  border-bottom: 4px solid rgb(51, 117, 97);
  &::after {
    position: absolute;
    content: "";
    bottom: -14px;
    left: 69px;
    width: 156px;
    height: 54px;
    background-color: rgb(60, 136, 113);
    border-radius: 36% 38% 34% 23% / 13% 2% 63% 31%;
    border-bottom: 4px solid rgb(51, 117, 97);
  }
}
.tree-middle {
  position: absolute;
  bottom: 140px;
  background-color: rgb(60, 136, 113);
  border-radius: 55% 57% 40% 23% / 64% 65% 70% 68%;
  width: 260px;
  height: 140px;
  border-bottom: 4px solid rgb(51, 117, 97);
  &::after {
    position: absolute;
    content: "";
    bottom: -30px;
    left: 50px;
    width: 160px;
    height: 84px;
    background-color: rgb(60, 136, 113);
    border-radius: 36% 38% 50% 39% / 38% 34% 45% 41%;
    border-bottom: 4px solid rgb(51, 117, 97);
  }
}
.tree-top {
  position: absolute;
  bottom: 240px;
  width: 240px;
  height: 130px;
  background-color: rgb(60, 136, 113);
  border-radius: 48% 31% 17% 27% / 67% 51% 23% 25%;
  border-bottom: 4px solid rgb(51, 117, 97);
  &::after {
    position: absolute;
    content: "";
    bottom: -30px;
    left: 100px;
    width: 110px;
    height: 84px;
    background-color: rgb(60, 136, 113);
    border-radius: 36% 38% 50% 39% / 38% 34% 45% 41%;
    border-bottom: 4px solid rgb(51, 117, 97);
  }
}
.lemon {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ef3;
  border-radius: 5% 70% 20%;
  &1 {
    top: 60px;
    left: 120px;
    transform: rotate(4deg);
  }
  &2 {
    top: 90px;
    left: 232px;
  }
  &3 {
    top: 198px;
    left: 140px;
    transform: rotate(8deg);
  }
  &4 {
    top: 120px;
    left: 100px;
  }
  &5 {
    top: 230px;
    left: 60px;
    transform: rotate(-4deg);
  }
  &1,
  &2,
  &3,
  &4,
  &5 {
    transition: all 0.2s cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 4px;
    background: rgb(84, 97, 94);
    top: -4px;
    left: 20px;
  }
  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 12px;
    top: 4px;
    left: 6px;
    border-radius: 50%;
    transform: rotate(20deg);
  }
}
.tree-leaf {
  position: absolute;
  background: rgb(60, 136, 113);
  border-radius: 100% 0% 50% 50% / 50% 0% 100% 50%;
  width: 20px;
  height: 20px;
  bottom: 200px;
  left: 200px;
  transform: rotate(30deg);
  transition: all 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 30px;
    background: rgb(51, 117, 97);
    transform: rotate(45deg);
    left: 7px;
    top: -4px;
    border-radius: 50% 50% 50% 50% / 85% 85% 15% 15%;
  }
  &-dropped {
    bottom: 0px;
  }
}
#cta {
  font-family: "Rock Salt", cursive;
  text-align: center;
  font-size: 12px;
  color: rgb(51, 117, 97);
  border-radius: 75% 5% 44% 4% / 8% 6% 7% 17%;
  background: rgb(214, 214, 151);
  padding: 8px 20px;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.349);
  transition: all 0.4s ease;
  cursor: pointer;
}
#cta:hover {
  background: white;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.459);
}
#reset {
  font-size: 32px;
  color: rgb(51, 117, 97);
  border-radius: 4% 36% 44% 3% / 32% 2% 8% 44%;
  background: rgb(214, 214, 151);
  padding: 4px 10px;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.349);
  transition: all 0.4s ease;
  cursor: pointer;
  margin-left: 20px;
}
#reset:hover {
  background: white;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.459);
}
</style>
