<template>
  <div class="ufo-contain">
    <div class="ufo-lower">
      <div class="lights">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="ufo-upper">
      <div class="cockpit">
        <div class="glass"></div>
        <div class="alien">
          <div class="eye"></div>
        </div>
        <div class="glass-edge"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import (css) "https://codepen.io/DXC/pen/6e5e17a21aa0f1f0df762d0c800aee8b.css";

.ufo-contain {
  width: 150px;
  height: 50px;
  margin-top: -70px;
  margin-left: 60%;
  transform: rotate(15deg);
  position: absolute;
  top: 20%;
  left: 50%;
  .keyframes(stray;{
		0% { top: 49.5%; left: 50.5%; }
		30% { top: 50.5%; left: 49.5%; }
		50% { top: 50.5%; left: 50.5%; }
		70% { top: 49.5%; left: 49.5%; }
		100% { top: 49.5%; left: 50.5%; }
	});
  .keyframes(movement;{
    0% {
      transform: scale(0.01) rotate(15deg);
    }
    100% { 
      animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
      transform: scale( 1 ) rotate(15deg) translateX(-150px) translateY(200px);
    }
  });
  .animation(movement 2s forwards cubic-bezier(0.02, 0.01, 0.21, 1));
  .aa;
  @media all and (max-width: 768px) and (orientation: landscape) {
    margin-top: -50px;
  }
}

.ufo-upper {
  background-color: #999;
  width: 120px;
  height: 35px;
  position: absolute;
  top: 0%;
  left: 50%;
  border-radius: 100%;
  box-shadow: inset 0px 7px 0px 0px rgba(255, 255, 255, 0.2);
  .transform(translate(-50%, 0%));

  .cockpit {
    background-color: #1c1c1c;
    width: 50px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    box-shadow: -8px 3px 0px 0px #7a7a7a;
    .transform(translate(-50%, -50%));

    .alien {
      background-color: #6fdcae;
      width: 30px;
      height: 40px;
      position: absolute;
      bottom: 0%;
      left: 50%;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      box-shadow: inset -6px 3px 0px 0px rgba(255, 255, 255, 0.6);
      .transform(translate(-50%, 0%));

      .eye {
        background-color: #f7fff7;
        width: 15px;
        height: 15px;
        overflow: hidden;
        position: absolute;
        top: 20%;
        left: 50%;
        border-radius: 50%;
        box-shadow: inset 0px 0px 0px 0.5px #6fdcae;
        cursor: pointer;
        .transform(translate(-50%, 0%));

        &:before {
          content: "";
          background-color: #1c1c1c;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 25%;
          left: 50%;
          border-radius: 100%;
          .transform(translate(-50%, 0%) scale(1, 1));
          .transition(0.75s);
          .keyframes(iris;{
						0% { top: 25%; left: 50%; }
						5% { top: 25%; left: 50%; }
						10% { top: 12%; left: 62%; }
						28% { top: 12%; left: 62%; }
						34% { top: 32%; left: 50%; }
						48% { top: 32%; left: 50%; }
						64% { top: 24%; left: 48%; }
						70% { top: 24%; left: 48%; }
						86% { top: 32%; left: 42%; }
						100% { top: 25%; left: 50%; }
					});
          .animation(iris 6s ease infinite alternate);
          .aa;
        }

        &:after {
          content: "";
          background-color: none;
          width: 15px;
          height: 15px;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 100%;
          box-shadow: 0px 0px 0px 40px #6fdcae;
          .transform(translate(-50%, -50%));
          .transition(0.15s);
          .keyframes(blink;{
						0% { height: 15px; }
						90% { height: 15px; }
						95% { height: 0px; }
						100% { height: 15px; }
					});
          .animation(blink 6s ease-out infinite);
          .aa;
        }

        &:hover {
          &:before {
            .transform(translate(-50%, 0%) scale(0.5, 0.5));
            .transition(0.15s);
          }

          &:after {
            margin-top: 16px;
            .playstate(paused);
          }
        }
      }
    }

    .glass {
      background-color: rgba(61, 90, 108, 0.4);
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: 0%;
      left: 50%;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      border-bottom: 1px solid #999;
      .transform(translate(-50%, 0%));
    }

    .glass-edge {
      background-color: transparent;
      width: 50px;
      height: 7.5px;
      overflow: hidden;
      position: absolute;
      bottom: -1px;
      left: 50%;
      border-bottom: 1px solid transparent;
      .transform(translate(-50%, 0%));

      &:before {
        content: "";
        background-color: transparent;
        width: 50px;
        height: 15px;
        position: absolute;
        bottom: 0%;
        left: 50%;
        border-radius: 100%;
        box-shadow: -19px 0px 0px 10px #7a7a7a, 45px 0px 0px 10px #999;
        .transform(translate(-50%, 0%));
      }
    }
  }
}

.ufo-lower {
  position: absolute;
  top: 50%;
  left: 50%;
  .transform(rotateX(70deg));

  .lights {
    background-color: #454545;
    width: 154px;
    height: 154px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    .transform(translate(-50%, -50%));
    .keyframes(spin;{
			0% { .transform(translate(-50%, -50%) rotate(0deg)); }
			100% { .transform(translate(-50%, -50%) rotate(360deg)); }
		});
    .animation(spin 1s linear infinite reverse);
    .aa;

    span {
      background-color: #ffcb47;
      width: 50%;
      height: 50px;
      position: absolute;
      top: 50%;
      left: 0%;
      display: block;
      .transform-origin(100%, 50%);

      &:nth-child(1) {
        .transform(translate(0%, -50%) rotate(0deg));
      }

      &:nth-child(2) {
        .transform(translate(0%, -50%) rotate(120deg));
      }

      &:nth-child(3) {
        .transform(translate(0%, -50%) rotate(240deg));
      }
    }
  }

  &:after {
    content: "";
    background-color: #454545;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    box-shadow: inset -12px 12px 0px 0px rgba(255, 255, 255, 0.6);
    .transform(translate(-50%, -50%));
  }
}

// mixins
.aa {
  // -webkit-backface-visibility: hidden;
  // backface-visibility: hidden;
  // -webkit-background-clip: content-box;
  // background-clip: content-box;
}

.gradient (@angle: 45deg, @startColor: red, @endColor: blue) {
  background-color: @startColor;
  background-image: -webkit-linear-gradient(@angle, @startColor, @endColor);
  background-image: -moz-linear-gradient(@angle, @startColor, @endColor);
  background-image: -ms-linear-gradient(@angle, @startColor, @endColor);
  background-image: -o-linear-gradient(@angle, @startColor, @endColor);
  background-image: linear-gradient(@angle, @startColor, @endColor);
}

.transition (@transition) {
  -webkit-transition: @transition;
  -moz-transition: @transition;
  -ms-transition: @transition;
  -o-transition: @transition;
  transition: @transition;
}

.transform(@string) {
  -webkit-transform: @string;
  -moz-transform: @string;
  -ms-transform: @string;
  -o-transform: @string;
  transform: @string;
}

.transform-origin (@x:center, @y:center) {
  -webkit-transform-origin: @x @y;
  -moz-transform-origin: @x @y;
  -ms-transform-origin: @x @y;
  -o-transform-origin: @x @y;
  transform-origin: @x @y;
}

.perspective (@value: 1000) {
  -webkit-perspective: @value;
  -moz-perspective: @value;
  -ms-perspective: @value;
  perspective: @value;
}

.keyframes(@name; @arguments) {
  @-moz-keyframes @name {
    @arguments();
  }
  @-webkit-keyframes @name {
    @arguments();
  }
  @keyframes @name {
    @arguments();
  }
}

.animation(@arguments) {
  -webkit-animation: @arguments;
  -moz-animation: @arguments;
  animation: @arguments;
}

.playstate(@playstate) {
  webkit-animation-play-state: @playstate;
  -moz-animation-play-state: @playstate;
  -o-animation-play-state: @playstate;
  animation-play-state: @playstate;
}
</style>
