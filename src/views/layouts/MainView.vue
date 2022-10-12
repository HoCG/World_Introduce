<template>
  <div class="noite">
    <main class="sticky-container" ref="sticky-container">
      <div class="sticky">
        <div class="slide-container">
          <div class="constelacao"></div>
          <div class="chuvaMeteoro"></div>
          <div class="slide" ref="sl1">
            <HomeView></HomeView>
          </div>
          <div class="slide" ref="sl2">
            <PersonView></PersonView>
          </div>
          <div class="slide" ref="sl3"></div>
          <div class="slide" ref="sl4"></div>
          <div class="slide" ref="sl5"></div>
        </div>
      </div>
    </main>
  </div>
  <div class="constelacao"></div>
</template>
<script>
import { def } from "./index";
import HomeView from "../HomeView.vue";
import PersonView from "../PersonView.vue";
let enabled = new Map();
let disabled = new Map();

const isAmong = (num, top, bottom) => num >= top && num <= bottom;

const applyStyle = (element, styleName, value, unit = "px") => {
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

export default {
  components: {
    HomeView,
    PersonView,
  },

  mounted() {
    this.skyInit();
    this.init();
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    skyInit() {
      //estrelas
      const style = ["style1", "style2", "style3", "style4"];
      const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
      const opacity = [
        "opacity1",
        "opacity1",
        "opacity1",
        "opacity2",
        "opacity2",
        "opacity3",
      ];

      const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };

      let estrela = "";
      const qtdeEstrelas = 250;
      const noite = document.querySelector(".constelacao");
      const widthWindow = window.innerWidth;
      const heightWindow = window.innerHeight;

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
      var numeroAleatorio = 5000;
      setTimeout(() => {
        carregarMeteoro();
      }, numeroAleatorio);

      const carregarMeteoro = () => {
        setTimeout(carregarMeteoro, numeroAleatorio);
        numeroAleatorio = getRandomArbitrary(5000, 10000);
        const meteoro =
          "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
        document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = meteoro;
        setTimeout(() => {
          document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = "";
        }, 1000);
      };
    },
    init() {
      this.initAnimation();
    },
    // 애니메이션 초기화
    initAnimation() {
      // Sticky Conainer 의 높이를 설정함.
      this.$refs["sticky-container"].style.height = `${def.height}px`;

      // disabled, enabled 를 비움.
      disabled.clear();
      enabled.clear();

      // 모든 요소를 disabled 에 넣음.
      for (const refname of Object.keys(def.elements)) {
        disabled.set(refname, def.elements[refname]);
      }

      // 각 애니메이션을 enabled == false 로 만듬.
      for (const refname of Object.keys(def.animations)) {
        for (const animation of def.animations[refname]) {
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
      this.onScroll();
    },
    applyStyles(currentPos, refname, styles, r, unit = "px") {
      for (const style of Object.keys(styles)) {
        const { topValue, bottomValue } = styles[style];
        const calc = (bottomValue - topValue) * r + topValue;
        applyStyle(this.$refs[refname], style, calc, unit);
      }
    },
    applyAllAnimation(currentPos, refname) {
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
            this.applyStyles(currentPos, refname, styles, 0);
          } else if (currentPos >= a_bottom) {
            this.applyStyles(currentPos, refname, styles, 1);
          }
          // eslint-disable-next-line no-param-reassign
          animation.enabled = false;
        }

        // 애니메이션이 enabled 라면, 애니메이션 적용.
        if (animation.enabled) {
          const r = easing((currentPos - a_top) / (a_bottom - a_top));
          // eslint-disable-next-line no-param-reassign
          this.applyStyles(currentPos, refname, styles, r);
        }
      }
    },
    onScroll() {
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
          this.applyAllAnimation(currentPos, refname);
        }
      });
    },
  },
};
</script>
