<template>
  <div class="static-tree">
    <div class="static-tree__leaf"></div>
    <div class="static-tree__leaf"></div>
    <div class="static-tree__leaf"></div>
  </div>
</template>
<style lang="scss">
.static-tree {
  background: #795548;
  width: 15px;
  height: 40px;
  font-size: 0;
  scale: 0.8;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__leaf {
    display: flex;
    margin-bottom: 30px;
    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 100px 50px;
      border-color: transparent transparent #388e3c transparent;
      margin-top: -125px;
      margin-left: -43px;
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 100px 0;
      border-color: transparent transparent #1b5e20 transparent;
      margin-top: -125px;
    }
  }
}
</style>
