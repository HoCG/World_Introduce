<template>
  <div class="noite">
    <main class="sticky-container" ref="sticky_container">
      <div class="sticky">
        <div class="slide-container">
          <div class="constelacao"></div>
          <div class="slide" ref="sl1">
            <HomeView></HomeView>
          </div>
          <div class="slide" ref="sl2">
            <SeaView></SeaView>
          </div>
          <div class="slide" ref="sl3">
            <LandView></LandView>
          </div>
          <div class="slide" ref="sl4">
            <PersonView></PersonView>
          </div>
          <div class="slide" ref="sl5">
            <PersonWalkView></PersonWalkView>
          </div>
          <div class="slide" ref="sl6">
            <MeetAlienAndPersonView></MeetAlienAndPersonView>
          </div>
          <div class="slide" ref="sl7">
            <EarthView></EarthView>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { def } from "./index";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import HomeView from "../HomeView.vue";
import PersonView from "../PersonView.vue";
import SeaView from "../SeaView.vue";
import LandView from "../LandView.vue";
import PersonWalkView from "../PersonWalkView.vue";
import MeetAlienAndPersonView from "../MeetAlienAndPersonView.vue";
import EarthView from "../EarthView.vue";
let enabled = new Map();
let disabled = new Map();

export default defineComponent({
  components: {
    HomeView,
    SeaView,
    LandView,
    PersonView,
    PersonWalkView,
    MeetAlienAndPersonView,
    EarthView,
  },
  setup() {
    const refs: any = {
      sticky_container: ref(null),
      sl1: ref(null),
      sl2: ref(null),
      sl3: ref(null),
      sl4: ref(null),
      sl5: ref(null),
      sl6: ref(null),
      sl7: ref(null),
    };
    onMounted(() => {
      skyInit();
      initAnimation();
      window.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    const skyInit = () => {
      //estrelas
      const style = ["style1", "style2", "style3", "style4"] as string[];
      const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"] as string[];
      const opacity = [
        "opacity1",
        "opacity1",
        "opacity1",
        "opacity2",
        "opacity2",
        "opacity3",
      ] as string[];
      let estrela = "" as string;
      const qtdeEstrelas = 250 as number;
      const noite: HTMLElement | any = document.querySelector(".constelacao");
      const widthWindow: number = window.innerWidth;
      const heightWindow: number = window.innerHeight;
      for (let i = 0; i < qtdeEstrelas; i++) {
        estrela +=
          "<span class='estrela " +
          style[getRandomArbitrary(0, 4)] +
          " " +
          opacity[getRandomArbitrary(0, 6)] +
          " " +
          tam[getRandomArbitrary(0, 5)] +
          "' style='animation-delay: ." +
          getRandomArbitrary(0, 9) +
          "s; left: " +
          getRandomArbitrary(0, widthWindow) +
          "px; top: " +
          getRandomArbitrary(0, heightWindow) +
          "px;'></span>";
      }
      noite.innerHTML = estrela;
    };
    const getRandomArbitrary = (min: number, max: number): number => {
      return (Math.floor(Math.random() * (max - min)) + min) as number;
    };
    // ??????????????? ?????????
    const initAnimation = () => {
      // Sticky Conainer ??? ????????? ?????????.
      refs["sticky_container"].value.style.height = `${def.height}px`;

      // disabled, enabled ??? ??????.
      disabled.clear();
      enabled.clear();

      // ?????? ????????? disabled ??? ??????.
      for (const refname of Object.keys(def.elements)) {
        disabled.set(refname, def.elements[refname]);
      }

      // ??? ?????????????????? enabled == false ??? ??????.
      for (const refname of Object.keys(def.animations)) {
        for (const animation of def.animations[refname]) {
          animation.enabled = false;
        }
      }

      // ?????? ????????? ??????
      disabled.forEach((obj, refname) => {
        Object.keys(obj.topStyle).forEach((styleName) => {
          const pushValue = obj.topStyle[styleName];
          refs[refname].value.style[styleName] = pushValue;
        });
      });
      // ?????? ????????? ?????? ??? ?????????????????? ????????? ?????? ????????? ??????????????? ?????? ????????? ????????? ????????? ???????????? ??? ??? ????????????.
      onScroll();
    };
    //?????? ???????????? ??????????????? ??????
    const isAmong = (num: number, top: number, bottom: number): boolean =>
      num >= top && num <= bottom;
    const applyStyles = (
      refname: string,
      styles: any,
      animateCalc: number,
      unit = "px" as string
    ) => {
      for (const style of Object.keys(styles)) {
        const { topValue, bottomValue } = styles[style];
        const translateValue: number =
          (bottomValue - topValue) * animateCalc + topValue;
        applyStyle(refs[refname].value, style, translateValue, unit);
      }
    };
    const applyStyle = (
      element: HTMLElement | any,
      styleName: string,
      translateValue: number,
      unit = "px" as string
    ) => {
      if (styleName === "translateY") {
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateY(${translateValue}${unit})`;
        return;
      }
      if (styleName === "translateX") {
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateX(${translateValue}${unit})`;
        return;
      }
      // eslint-disable-next-line no-param-reassign
      element.style[styleName] = translateValue;
    };
    //??????????????? ?????? ??????
    const applyAllAnimation = (currentPos: number, refname: string) => {
      const animations = def.animations[refname];
      if (!animations) return;
      for (const animation of animations) {
        const { top: a_top, bottom: a_bottom, easing, styles } = animation;
        const isIn = isAmong(currentPos, a_top, a_bottom);
        // ?????? ?????????????????? ????????? ????????? ??? ?????? ????????? enabled ??????
        if (isIn) {
          if (!animation.enabled) animation.enabled = true;
        } else if (!isIn && animation.enabled) {
          if (currentPos <= a_top) {
            applyStyles(refname, styles, 0);
          } else if (currentPos >= a_bottom) {
            applyStyles(refname, styles, 1);
          }
          // eslint-disable-next-line no-param-reassign
          animation.enabled = false;
        }

        // ?????????????????? enabled ??????, ??????????????? ??????.
        if (animation.enabled) {
          const animateCalc: number = easing(
            (currentPos - a_top) / (a_bottom - a_top)
          );
          // eslint-disable-next-line no-param-reassign
          applyStyles(refname, styles, animateCalc);
        }
      }
    };
    const onScroll = () => {
      // ?????? ????????? ?????? ??????
      const scrollTop: number =
        (window.scrollY as number) || (window.pageYOffset as number);
      const currentPos = scrollTop + window.innerHeight / 2;

      // disabled ???????????? ???????????? ?????? ??????.
      disabled.forEach((obj, refname: string) => {
        // ?????? ?????? ????????? ?????? ?????? ?????????
        if (isAmong(currentPos, obj.top, obj.bottom)) {
          enabled.set(refname, obj);
          refs[refname].value.classList.remove("disabled");
          refs[refname].value.classList.add("enabled");
          disabled.delete(refname);
        }
      });

      // enabled ??????????????? ????????? ????????? ??????
      enabled.forEach((obj, refname: string) => {
        const { top, bottom, topStyle, bottomStyle } = obj;
        // console.log(`${top}, ${bottom}, ${topStyle}, ${bottomStyle}`); ?????? ?????? ?????????
        if (!isAmong(currentPos, top, bottom)) {
          // ?????? ???????????? ???????????? ????????? ??????
          if (currentPos <= top) {
            Object.keys(topStyle).forEach((styleName) => {
              applyStyle(refs[refname].value, styleName, topStyle[styleName]);
              // ????????? ???????????? ????????? ???????????????);
            });
          } else if (currentPos >= bottom) {
            Object.keys(bottomStyle).forEach((styleName) => {
              applyStyle(
                refs[refname].value,
                styleName,
                bottomStyle[styleName]
              );
            });
          }
          // ??????????????? ???????????? disabled??? ??????.
          disabled.set(refname, obj);
          refs[refname].value.classList.remove("enabled");
          refs[refname].value.classList.add("disabled");
          enabled.delete(
            refname // enable ?????????, ?????? ????????? ????????? ????????? ??? ??????????????? ???????????????.
          );
        } else {
          applyAllAnimation(currentPos, refname);
        }
      });
    };
    return {
      ...refs,
    };
  },
});
</script>
