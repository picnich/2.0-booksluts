import barba from '@barba/core';
import LocomotiveScroll from 'locomotive-scroll';
// import regeneratorRuntime from "regenerator-runtime";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
// import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, Flip);
// gsap.registerPlugin(SplitText);

console.log('App.js is loaded')

import Menu from './menu'


import { 
    fadeSlideIn,
    hide,
    fadeOut, 
    handleBookHeadlines, 
    revealHomeBooks, 
    homepageTitleEnter, 
    // homepageTitleLeave, 
    BookEnter, 
    bookLeave, 
    homepageLeave
} from './animations'

// import book from './pages/book'

let scroll;
let menu;

barba.hooks.once((data) => {
    const toggle = document.querySelector('.toggleMenu');
    menu = new Menu(data.next.container);
})
  

barba.hooks.enter((data) => {
    window.scrollTo(0, 0);
    menu = new Menu(data.next.container);
    // const toggle = document.querySelector('.toggleMenu');
    // menu = new Menu(toggle);
    // console.log('nicholas new page', toggle);
});
  

barba.hooks.beforeLeave(() => {
    if (menu.isOpen) {
      menu.animationClose();
    }
  })
  

  barba.init({
    debug: true,
      sync: true,
      // views: [Home, Book],
      transitions: [
      {
        name: 'bookTemplate',
  
        async once(data) {
          
  
          smooth(data.next.container)
          handleBookHeadlines();
          BookEnter(data.next.container);
  
  
              },
              async leave(data) {
          const books = document.querySelectorAll('.cover__item-imgInner');
          const numbers = document.querySelectorAll('.cover__item-number');
          const header = document.querySelectorAll('header');
  
          const done = this.async();
  
          homepageLeave(data.current.container, done);
          bookLeave(data.current.container, done);
          // homepageLeave(books, numbers, header, done);
                  // data.current.container.remove();
        },
        
              async beforeEnter(data) {
          // console.log('beforeEnteringggg')
          smooth(data.next.container);
                  ScrollTrigger.getAll().forEach(t => t.kill());
              },
        
              async enter( data ) {	
          
  
          handleBookHeadlines();
          BookEnter(data.next.container);
          // coverTransition(data);
          // fadeOut(data.next.container);
              }
      },
      {
        name: 'homepage',
        to: {
          namespace: [
            'home'
          ]
        },
        async once(data) {
          
  
          // console.log('ONNNNCE')
          const title = document.querySelectorAll('.pageDesc h1');
          const subtitle = document.querySelectorAll('.pageDesc p');
          
          homepageTitleEnter(title, subtitle);
  
          smooth(data.next.container)
          revealHomeBooks(data.next.container.querySelectorAll('.cover__item-imgInner'), data.next.container.querySelectorAll('.cover__item-number'))
          handleBookHeadlines()
          // return fadeOut(data.next.container);
              },
              async leave(data) {
          const done = this.async();
          bookLeave(data.current.container, done);
          // fadeOut(data.current.container);
                  // data.current.container.remove();
              },
        
              async beforeEnter(data) {
          smooth(data.next.container);
                  ScrollTrigger.getAll().forEach(t => t.kill());
              },
        
              async enter( data ) {	
  
          const title = document.querySelectorAll('.pageDesc h1');
          const subtitle = document.querySelectorAll('.pageDesc p');
          const header = document.querySelectorAll('header');
  
          handleBookHeadlines();
          homepageTitleEnter(title, subtitle, header);
          revealHomeBooks(data.next.container.querySelectorAll('.cover__item-imgInner'), data.next.container.querySelectorAll('.cover__item-number'))
          // fadeOut(data.next.container);
              }
          },
      ],
  });
  
  function smooth(scrollContainer) {
    // console.log('heyyy nich');
    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
    scroll = new LocomotiveScroll({
      el: currentScrollContainer,
      smooth: true,
      direction: 'horizontal'  
    });
  
    scroll.on('scroll', ScrollTrigger.update)
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      scrollLeft(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.x;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });
  
  
    setTimeout(() => {
      scroll.update();
    }, 5000);
  
  }
  
  