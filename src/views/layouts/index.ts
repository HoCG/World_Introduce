const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);
import bezierEasing from "bezier-easing";
export const def: any = {
  height: 7100,
  elements: {
    sl1: {
      top: 0,
      bottom: 1400,
      topStyle: { opacity: 0, translateY: -60 },
      bottomStyle: { opacity: 0, translateY: 60 },
    },
    sl2: {
      top: 1400,
      bottom: 2700,
      topStyle: { opacity: 0, translateY: -60 },
      bottomStyle: { opacity: 0, translateY: 60 },
    },
    sl3: {
      top: 2800,
      bottom: 4100,
      topStyle: { opacity: 0 },
      bottomStyle: { opacity: 0 },
    },
    sl4: {
      top: 4200,
      bottom: 5500,
      topStyle: { opacity: 0 },
      bottomStyle: { opacity: 0 },
    },
    sl5: {
      top: 5600,
      bottom: 8500,
      topStyle: { opacity: 0 },
      bottomStyle: { opacity: 0 },
    },
  },
  animations: {
    sl1: [
      {
        top: 0,
        bottom: 1400,
        easing: midSlow,
        styles: { translateY: { topValue: 60, bottomValue: -60 } },
      },
      {
        top: 0,
        bottom: 300,
        easing: ease,
        styles: { opacity: { topValue: 0, bottomValue: 1 } },
      },
      {
        top: 100,
        bottom: 1400,
        easing: easeIn,
        styles: { opacity: { topValue: 1, bottomValue: 0 } },
      },
    ],
    sl2: [
      {
        top: 1400,
        bottom: 2700,
        easing: midSlow,
        styles: { translateY: { topValue: 60, bottomValue: -60 } },
      },
      {
        top: 1400,
        bottom: 2000,
        easing: ease,
        styles: { opacity: { topValue: 0, bottomValue: 1 } },
      },
      {
        top: 2100,
        bottom: 2700,
        easing: easeIn,
        styles: { opacity: { topValue: 1, bottomValue: 0 } },
      },
    ],
    sl3: [
      {
        top: 2800,
        bottom: 4100,
        easing: midSlow,
        styles: { translateY: { topValue: 60, bottomValue: -60 } },
      },
      {
        top: 2800,
        bottom: 3400,
        easing: ease,
        styles: { opacity: { topValue: 0, bottomValue: 1 } },
      },
      {
        top: 2500,
        bottom: 4100,
        easing: easeIn,
        styles: { opacity: { topValue: 1, bottomValue: 0 } },
      },
    ],
    sl4: [
      {
        top: 4200,
        bottom: 5500,
        easing: midSlow,
        styles: { translateY: { topValue: 60, bottomValue: -60 } },
      },
      {
        top: 4200,
        bottom: 4800,
        easing: ease,
        styles: { opacity: { topValue: 0, bottomValue: 1 } },
      },
      {
        top: 4900,
        bottom: 5500,
        easing: easeIn,
        styles: { opacity: { topValue: 1, bottomValue: 0 } },
      },
    ],
    sl5: [
      {
        top: 5600,
        bottom: 6900,
        easing: midSlow,
        styles: { translateY: { topValue: 60, bottomValue: -60 } },
      },
      {
        top: 5600,
        bottom: 6200,
        easing: ease,
        styles: { opacity: { topValue: 0, bottomValue: 1 } },
      },
      {
        top: 6300,
        bottom: 6900,
        easing: easeIn,
        styles: { opacity: { topValue: 1, bottomValue: 0 } },
      },
    ],
  },
};
