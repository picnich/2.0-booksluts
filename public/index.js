// // import barba from '@barba/core';
// // import LocomotiveScroll from 'locomotive-scroll';
// // import regeneratorRuntime from "regenerator-runtime";
// // import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/dist/Flip";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);
// gsap.registerPlugin(Flip);

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function hi() { 
  console.log('asdfasdf')
}
ready(hi)
