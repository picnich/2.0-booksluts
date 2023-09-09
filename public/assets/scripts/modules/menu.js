import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

import { menuOpen, menuClose } from './animations'

export default class Menu {
    constructor(container) {
        this.menuOpenTrigger = container.querySelector('.toggleMenu');
        this.menuCloseTrigger = container.querySelector('.toggleMenuClose');
        this.dom = {
            nav: container.querySelector('.nav'),
            list: container.querySelectorAll('.bookList li'),
            title: new SplitText(container.querySelector('.navContainer h2')),
            bg: container.querySelector('nav-bg')
        }
        // State
        this.isOpen = false;

        this.addListeners();
    }
    animationOpen() {
        // console.log('CLICKED THE OPEN TOGGLE')
        // console.log('running open animation', this.isOpen, this.dom.nav)
        const tl = gsap.timeline({ defaults: { ease: 'power2.easeIn'}});

        // tl.set(this.dom.nav, {
        //     autoAlpha: 1
        // })
        tl.addLabel('start')
        tl.fromTo(this.dom.nav, {
            autoAlpha: 0,
            // duration: .5
        },{
            autoAlpha: 1,
            // duration: .5
        }, 'start');
        tl.fromTo(this.dom.title.chars, {
            stagger: 0.01,
            yPercent: 100,
            // duration: 0.2
        },{
            stagger: 0.01,
            yPercent: 0,
            // duration: 0.2
        }, 'start');
        tl.fromTo(this.dom.list, {
            stagger: 0.01,
            yPercent: 100,
            // duration: 0.2
        },{
            stagger: 0.01,
            yPercent: 0,
            // duration: 0.2
        }, 'start');
        
        this.isOpen = true;
    }
    animationClose() {
        // console.log('running open animation', this.isOpen)
        const tl = gsap.timeline({ defaults: { ease: 'power2.easeIn'}});
        // tl.set(this.dom.nav, {
        //     autoAlpha: 0
        // })

        tl.addLabel('start')
        tl.fromTo(this.dom.nav, {
            autoAlpha: 1,
        },{
            autoAlpha: 0,
        }, 'start');
        tl.fromTo(this.dom.title.chars, {
            stagger: 0.01,
            yPercent: 0,
            // duration: 0.2
        },{
            stagger: 0.01,
            yPercent: 100,
            // duration: 0.2
        }, 'start');
        tl.fromTo(this.dom.list, {
            stagger: 0.01,
            yPercent: 0,
            // duration: 0.2
        },{
            stagger: 0.01,
            yPercent: 100,
            // duration: 0.2
        }, 'start');
        tl.timeScale(2);
        
        this.isOpen = false;
    }
    addListeners() {
        // console.log('adding listeners', this.menuOpenTrigger, this.menuCloseTrigger)
        this.menuOpenTrigger.addEventListener('click', this.animationOpen.bind(this))
        this.menuCloseTrigger.addEventListener('click', this.animationClose.bind(this))
    }
    // removeListeners() {
    //     this.menuOpenTrigger.removeEventListener('click', this.init)
    //     this.menuCloseTrigger.removeEventListener('click', this.initClose)
    // }
}