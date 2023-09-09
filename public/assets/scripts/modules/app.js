import barba from '@barba/core';
import LocomotiveScroll from 'locomotive-scroll';
// import regeneratorRuntime from "regenerator-runtime";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.registerPlugin(Flip);

console.log('App.js is loaded')