import { sineInOut } from "svelte/easing";

let duration = 600;
let delay = duration;

let delayZero = 0;

export const fadeIn = (_) => ({
  duration,
  delay,
  easing: sineInOut,
  css: (t) =>
    `transform-origin: top center; opacity: ${t}; position: absolute; filter: blur(${
      (1 - t) * 10
    }px);`,
});

export const fadeOut = (_) => ({
  duration: 1000,
  delayZero,
  easing: sineInOut,
  css: (t) =>
    `opacity: ${t}; 
		transform-origin: top center;
		position: absolute; 
		filter: blur(${(1 - t) * 10}px); 
		transform: translate3d(0, ${(1 - t) * 100}px, 0) scaleY(${1 - t + 1});`,
});
