import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { fadeSlideIn, hide } from "../animations"

gsap.registerPlugin(ScrollTrigger, SplitText);

// import '../index.scss';
// import "../../index.scss"


function initBookPage() {
    const lscroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'horizontal'
    });
    // Sync LogoScroll with ScrollTrigger
    lscroll.on('scroll', ScrollTrigger.update)
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        scrollLeft(value) {
          return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.x;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });
    
    
    /* ************* 
       Animations
    ************* */
    const bookTitle = document.querySelectorAll('h1.bookDetail-title');
    const splitTitle = new SplitText(bookTitle);
    const bookAuthor = document.querySelectorAll('h1.bookDetail-author');
    const splitAuthor = new SplitText(bookAuthor);
    
    const headlines = document.querySelectorAll('h2');
    headlines.forEach(el => {
        const splitText = new SplitText(el);
        // console.log(splitText)
        hide(splitText.chars);
        ScrollTrigger.create({
            trigger: el,
            horizontal: true,
            scroller: '[data-scroll-container]',
            start: "25% 50%",
            onEnter: function() { fadeSlideIn(splitText.chars) }, 
            // onEnterBack: function() { fadeSlideIn(splitText.chars) },
            // onLeave: function() { hide(splitText)}
        })
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => lscroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

class Book {
	namespace = 'book';

	beforeEnter = data => {
		console.log(data, 'on book page');
        initBookPage();
	};
}

export default new Book();