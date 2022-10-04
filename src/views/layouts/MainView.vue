<template>
  <div class="main-view">
    <HomeView></HomeView>
    <PersonView></PersonView>
  </div>
  <main class="sticky-container" ref="sticky-container">
    <div class="sticky">
      <div class="slide-container">
        <div class="slide" ref="sl1">
          <FirstView></FirstView>
        </div>
        <div class="scdown" ref="scdown">
          <div class="scdown-text"></div>
        </div>
        <div class="slide" ref="sl2">
          <SecondView></SecondView>
        </div>
        <div class="slide sl3" ref="sl3">
          <ThirdView></ThirdView>
        </div>
        <div class="slide slide-left sl4" ref="sl4">
          <FourthView></FourthView>
        </div>
        <div class="wave" ref="wave">뭔가 독립적으로 움직이는 배경</div>
        <div class="slide slide-left sl5" ref="sl5">
          <FifthView></FifthView>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onBeforeMount, ref } from "vue";
import { def } from "./index";
import HomeView from "./HomeView.vue";
import PersonView from "../PersonView.vue";
import bezierEasing from "bezier-easing";
export default defineComponent({
  components: {
    HomeView,
    PersonView,
  },
  setup() {
    let enabled = new Map();
    let disabled = new Map();
    const isAmong = (num: number, top: number, bottom: number) =>
      num >= top && num <= bottom;
    const applyStyle = (
      element: HTMLElement,
      styleName: any,
      value: any,
      unit = "px" as string
    ) => {
      if (styleName === "translateY") {
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateY(${value}${unit})`;
        return;
      }
      if (styleName === "translateX") {
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateX(${value}${unit})`;
        return;
      }
      // eslint-disable-next-line no-param-reassign
      element.style[styleName] = value;
    };
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
    });
    onBeforeMount(() => {
      initAnimation();
      window.addEventListener("scroll", onScroll);
    });
    // 애니메이션 초기화
    const initAnimation = () => {
      // Sticky Conainer 의 높이를 설정함.
      this.$refs["sticky-container"].style.height = `${def.height}px`;

      // disabled, enabled 를 비움.
      disabled.clear();
      enabled.clear();
      // 모든 요소를 disabled 에 넣음.
      for (const refname of Object.keys(def.elements)) {
        disabled.set(
          refname,
          def.elements[refname as keyof typeof def.elements]
        );
      }

      // 각 애니메이션을 enabled == false 로 만듬.
      for (const refname of Object.keys(def.animations)) {
        for (const animation of def.animations[
          refname as keyof typeof def.elements
        ]) {
          animation.enabled = false;
        }
      }

      // 초기 스타일 적용
      disabled.forEach((obj, refname) => {
        Object.keys(obj.topStyle).forEach((styleName) => {
          const pushValue = obj.topStyle[styleName];
          this.$refs[refname].style[styleName] = pushValue;
        });
      });
      // 이미 요소의 범위 및 애니메이션의 범위에 있는 것들을 렌더링하기 위해 임의로 스크롤 이벤트 핸들러를 한 번 실행시킴.
      onScroll();
    };
    const applyStyles = (
      currentPos: number,
      refname: string,
      styles: any,
      r: number,
      unit = "px"
    ) => {
      for (const style of Object.keys(styles)) {
        const { topValue, bottomValue } = styles[style];
        const calc = (bottomValue - topValue) * r + topValue;
        applyStyle(this.$refs[refname], style, calc, unit);
      }
    };
    const applyAllAnimation = (currentPos: number, refname: string) => {
      const animations = def.animations[refname];
      if (!animations) return;
      for (const animation of animations) {
        const { top: a_top, bottom: a_bottom, easing, styles } = animation;
        const isIn = isAmong(currentPos, a_top, a_bottom);
        // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
        if (isIn) {
          if (!animation.enabled) animation.enabled = true;
        } else if (!isIn && animation.enabled) {
          if (currentPos <= a_top) {
            applyStyles(currentPos, refname, styles, 0);
          } else if (currentPos >= a_bottom) {
            applyStyles(currentPos, refname, styles, 1);
          }
          // eslint-disable-next-line no-param-reassign
          animation.enabled = false;
        }

        // 애니메이션이 enabled 라면, 애니메이션 적용.
        if (animation.enabled) {
          const r = easing((currentPos - a_top) / (a_bottom - a_top));
          // eslint-disable-next-line no-param-reassign
          applyStyles(currentPos, refname, styles, r);
        }
      }
    };
    const onScroll = () => {
      // 현재 스크롤 위치 파악
      const scrollTop = window.scrollY || window.pageYOffset;
      const currentPos = scrollTop + window.innerHeight / 2;

      // disabled 순회하며 활성화할 요소 찾기.
      disabled.forEach((obj, refname) => {
        // 만약 칸에 있다면 해당 요소 활성화
        if (isAmong(currentPos, obj.top, obj.bottom)) {
          enabled.set(refname, obj);
          this.$refs[refname].classList.remove("disabled");
          this.$refs[refname].classList.add("enabled");
          disabled.delete(refname);
        }
      });

      // enabled 순회하면서 헤제할 요소를 체크
      enabled.forEach((obj, refname) => {
        const { top, bottom, topStyle, bottomStyle } = obj;
        // console.log(`${top}, ${bottom}, ${topStyle}, ${bottomStyle}`); 범위 밖에 있다면
        if (!isAmong(currentPos, top, bottom)) {
          // 위로 나갔다면 시작하는 스타일 적용
          if (currentPos <= top) {
            Object.keys(topStyle).forEach((styleName) => {
              applyStyle(this.$refs[refname], styleName, topStyle[styleName]);
              // 아래로 나갔다면 끝나는 스타일적용);
            });
          } else if (currentPos >= bottom) {
            Object.keys(bottomStyle).forEach((styleName) => {
              applyStyle(
                this.$refs[refname],
                styleName,
                bottomStyle[styleName]
              );
              // this.$refs[refname].style[styleName] = bottomStyle[styleName];
            });
          }
          // 리스트에서 삭제하고 disabled로 옮김.
          disabled.set(refname, obj);
          this.$refs[refname].classList.remove("enabled");
          this.$refs[refname].classList.add("disabled");
          enabled.delete(
            refname // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
          );
        } else {
          applyAllAnimation(currentPos, refname);
        }
      });
    };
  },
});
</script>
<style lang="scss">
.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  .slide-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .slide {
      position: absolute;
      display: none;
      z-index: 0;
      &-big-text p {
        margin: 0;
        font-size: 45px;
        font-weight: bold;
        line-height: 1.35;
        letter-spacing: -1.5px;
        word-spacing: 1.5px;
        text-align: center;
      }

      &-small-text {
        margin-top: 20px;
        margin-left: 5px;
      }

      &-small-text p {
        font-size: 18px;
        margin: 0;
      }
      &.enabled {
        display: block;
      }
    }
  }
}
.scdown {
  position: absolute;
  padding: 30px 0;
  width: 100%;
  height: 50px;
  text-align: center;
  bottom: 0;
}
</style>
