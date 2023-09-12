import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/dist/SplitText";
import { Flip } from "gsap/dist/Flip";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


gsap.registerPlugin(ScrollTrigger, Flip);
// gsap.registerPlugin(SplitText);

/**
 * Default/Standard Animationz
 */
function fadeOut(el) {
    return gsap.from(el, {
      opacity: 0
    });
  }

function fadeSlideIn(elem) {
    gsap.fromTo(elem, {y: 100, autoAlpha: 0}, {
        duration: .5, 
        ease: 'power2.easeIn',
        stagger: 0.02,
        y: 0, 
        autoAlpha: 1, 
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {autoAlpha: 0, y: 100});
}

// function coverTransition(data) {
//     // const coverImage = data.current.container.querySelector('.cover__img')
//     // const homeContainer = data.current.container.querySelector('.cover__item');
//     // const bookContainer = data.next.container.querySelector('.bookCover');
    
//     const bookHome = data.current.container.querySelector('.cover__img')
//     const bookCover = data.next.container.querySelector('.bookCover-img')
  
//     console.log(bookHome, bookCover)
    
    
//     const state = Flip.getState(bookHome, {
//       props: "position"
//     });
//     // Flip.to(state)
//     console.log(state)
//     // Flip.makeAbsolute(bookCover, bookHome)
  
//     return Flip.from(state, {
//       targets: bookCover,
//       // spin: 2,
//       // zIndex: 10,
//       // absolute: true,
//       // duration: 1,
//       scale: true,
//       ease: "power1.inOut",
//       // onEnter: el => gsap.fromTo(el,),
//       // onLeave: el => 
  
//     })
//     console.log(bookHome, bookCover)
// }
  
  
function handleBookHeadlines() {
    const bookTitle = document.querySelectorAll('h1.bookDetail-title');
    const splitTitle = Splitting({ target: bookTitle, by: 'chars' });
    // const splitTitle = new SplitText(bookTitle);
    
    const bookAuthor = document.querySelectorAll('.bookDetail-author');
    const splitAuthor = Splitting({target: bookAuthor, by: 'chars'});
    // const splitAuthor = new SplitText(bookAuthor);
    
    const headlines = document.querySelectorAll('.bookTemplate-section h2');
    headlines.forEach(el => {
        // const splitText = new SplitText(el);
        const splitText = Splitting({target: el, by: 'chars'});
        // console.log(splitText)
        hide(splitText[0].chars);
        ScrollTrigger.create({
            trigger: el,
            horizontal: true,
            scroller: '[data-scroll-container]',
            start: "25% 50%",
            onEnter: function() { fadeSlideIn(splitText[0].chars) }, 
            // onEnterBack: function() { fadeSlideIn(splitText[0].chars) },
            // onLeave: function() { hide(splitText[0])}
        })
    });
}

/**
 * Homepage Animations
 */
function revealHomeBooks(books, numbers) {
    gsap.from(books, {
        opacity: 0,
        yPercent: 100,
        duration: .9,
        stagger: 0.1,
        ease: 'power2.easeIn',
    })
    gsap.from(numbers, {
        opacity: 0,
        delay: .7,
        yPercent: 100,
        duration: .5,
        stagger: 0.1,
        ease: 'power4.easeInOut',
    })
}
function homepageTitleEnter(title, subtitle, header) {
    console.log('homepage title enter')
    const splitTitle = Splitting({target: title, by: 'chars'});
    const splitSubTitle = Splitting({ target: subtitle, by: 'chars'});
    // const splitTitle = new SplitText(title);
    // const splitSubTitle = new SplitText(subtitle);
    const tl = gsap.timeline({ 
        defaults: { 
            ease: 'power2.easeIn'
        }, 
        // onComplete: () => done() 
    });
    tl.addLabel('start')
    tl.from(splitTitle[0].chars, {
        y: 100, 
        // autoAlpha: 0,
        stagger: 0.01
    }, 'start');
    tl.from(splitSubTitle[0].chars, {
        y: 100, 
        // autoAlpha: 0,
        stagger: 0.01
    }, 'start+=.2');
    tl.from(header, {
        yPercent: -100,
        // duration: .2,
        // stagger: 0.1,
    },"start");
    return tl;
}
function homepageTitleLeave() {
    const title = document.querySelectorAll('.pageDesc h1');
    const subtitle = document.querySelectorAll('.pageDesc p');

    const splitTitle = Splitting({target: title, by: 'chars'});
    const splitSubTitle = Splitting({target: subtitle, by: 'chars'});

    console.log(title, splitTitle)
    // const splitTitle = new SplitText(title);
    // const splitSubTitle = new SplitText(subtitle);

    const tl = gsap.timeline({ 
        defaults: { 
            ease: 'power2.easeIn'
        }, 
        // onComplete: () => done() 
    });
    tl.addLabel('start')
    tl.to(splitTitle[0].chars, {
        y: 100, 
        // autoAlpha: 0,
        stagger: 0.01
    }, 'start');
    tl.to(splitSubTitle[0].chars, {
        y: 100, 
        // autoAlpha: 0,
        stagger: 0.01
    }, 'start');
    return tl;
}


function homepageLeave(container, done) {
    
    homepageTitleLeave();

    const books = container.querySelectorAll('.cover__item-imgInner');
    const numbers = container.querySelectorAll('.cover__item-number');
    const header = container.querySelectorAll('header');

    const amt = books.length;
    
    const tl = gsap.timeline({
        defaults: { 
            ease: 'power2.easeIn'
        }, 
        onComplete: () => done() 
    })
    tl.addLabel('start');
    tl.to(numbers, {
        opacity: 0,
        yPercent: 100,
        duration: .4,
        // stagger: 0.2,
    },"start")
    tl.to(books, {
        opacity: 0,
        yPercent: 100,
        duration: .4,
        // stagger: 0.1,
    },"start")
    tl.to(header, {
        yPercent: -100,
        duration: .2,
        // stagger: 0.1,
    },"start")
    // tl.timeScale(amt)
    return tl;
}

/**
 * Book Animations
 */

// function BookEnter(book, title, author, labels, values, bg, shadow, header) {
function BookEnter(nextContainer) {
    const bookTitle = nextContainer.querySelector('.bookDetail-title');
    const author = nextContainer.querySelector('.bookDetail-author');
    const book = nextContainer.querySelector('.bookCover-img');
    const bookLabels = nextContainer.querySelectorAll('.bookDetail-label')
    const bookValues = nextContainer.querySelectorAll('.bookDetail-value')
    const bg = nextContainer.querySelectorAll('.coverPage-bg')
    const shadow = nextContainer.querySelectorAll('.shadow')
    const header = nextContainer.querySelectorAll('header.book')
    const recommendedBy = nextContainer.querySelector('.bookDetail-recommendation')


    // bookTitle.innerHTML = bookTitle.innerHTML.replace("-", "<span>-</span>");

    const splitTitle = Splitting({ target: bookTitle, by: 'chars' });
    const splitAuthor = Splitting({ target: author, by: 'chars '});
    // const splitTitle = new SplitText(bookTitle);
    // const splitAuthor = new SplitText(author);
    
    const nextBookTitle = [...document.querySelectorAll('.next > span')];
    const splitNextTitle = Splitting({target: nextBookTitle, by: 'chars'});
    // const splitNextTitle = new SplitText(nextBookTitle);
    const nextBookImg = document.querySelector('.nextBook--img');
    
    const tl = gsap.timeline({ defaults: { ease: 'power2.easeIn'}});
    tl.addLabel("start")
    tl.from([book, shadow], {
        opacity: 0,
        yPercent: 100,
        duration: 0.8, 
    })
    if ( window.innerWidth > 768) {
        tl.from(bg, {
            scaleX: 0,
            // transformOrigin: "left",
            duration: 0.25, 
        },"start+=0.25")
    } else { 
        tl.from(bg, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.25, 
        },"start+=0.25")
    }
    tl.from(splitTitle[0].chars, {
        yPercent: 120,
        duration: .3,
        stagger: 0.04,
    },"start")
    tl.from(splitAuthor[0].chars, {
        yPercent: 200,
        duration: 0.2,
        // delay: 1,
        stagger: 0.02,
    }, "start+=0.5")
    tl.from(bookLabels, {
        yPercent: 200,
        duration: 0.2,
        // delay: 1,
        stagger: 0.1,
    }, "start+=0.5")
    tl.from(bookValues, {
        yPercent: 200,
        duration: 0.2,
        // delay: 1,
        stagger: 0.1,
    }, "start+=.6")
    tl.from(recommendedBy, {
        opacity: 0,
        duration: 0.2,
    }, "start+=1")
    if ( window.innerWidth > 768) {
        tl.from(header, {
            xPercent: -100,
            duration: 0.2,
        }, "start+=.6")
    } else {
        tl.from(header, {
            opacity: 0,
            duration: 0.2,
        }, "start+=.6")
    }
    tl.from(splitNextTitle[0].chars, {
        yPercent: 150,
        duration: 3,
        stagger: 0.02,
    }, "start");
    tl.from(nextBookImg, {
        yPercent: 150,
        // duration: 0.2,
    }, "start");

}

// function bookLeave(book, title, author, bg, shadow, header, detailLabels, detailValues, done) {
function bookLeave(currentContainer, done) {
    // Beginning of Page
    const bookTitle = currentContainer.querySelector('.bookDetail-title');
    const author = currentContainer.querySelector('.bookDetail-author');
    const book = currentContainer.querySelector('.bookCover-img');
    const bg = currentContainer.querySelectorAll('.coverPage-bg')
    const shadow = currentContainer.querySelectorAll('.shadow')
    const header = currentContainer.querySelectorAll('header.book')
    const bookLabels = currentContainer.querySelectorAll('.bookDetail-label')
    const bookValues = currentContainer.querySelectorAll('.bookDetail-value')
    const recommendedBy = currentContainer.querySelectorAll('.bookDetail-recommendation')
    
    
    // Next Book/End of page
    const nextBookTitle = currentContainer.querySelectorAll('.next span');
    const splitNextTitle = Splitting({target: nextBookTitle, by: 'chars'});
    // const splitNextTitle = new SplitText(nextBookTitle);
    const nextBookImg = currentContainer.querySelector('.nextBook--img');
    const nextBookBG = currentContainer.querySelector('.nextBook-bg');
    const nextBookSectionTitle = currentContainer.querySelector('.nextBook h2 ');
    const splitNextSectionTitle = Splitting({target: nextBookSectionTitle, by: 'chars'});
    const splitTitle = Splitting({ target: bookTitle, by: 'chars'});
    const splitAuthor = Splitting({target: author, by: 'chars'});
    // const splitNextSectionTitle = new SplitText(nextBookSectionTitle);
    // const splitTitle = new SplitText(bookTitle);
    // const splitAuthor = new SplitText(author);
    
    const tl = gsap.timeline({ 
        defaults: { 
            ease: 'power2.easeIn'
        }, 
        onComplete: () => done() 
    });
    if ( window.innerWidth > 768) {
        tl.to(bg, {
            scaleX: 0,
            // transformOrigin: "left",
        },"start")
    } else { 
        tl.to(bg, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.25
        },"start")
    }
    tl.to([book, shadow], {
        opacity: 0,
        yPercent: 100,
        duration: .3, 
    },"start")
    tl.to(splitTitle[0].chars, {
        yPercent: 120,
        duration: .2,
        stagger: 0.02,
    },"start")
    tl.to(splitAuthor[0].chars, {
        yPercent: 200,
        duration: 0.2,
        // delay: 1,
        stagger: 0.02,
    }, "start");
    
    if ( window.innerWidth > 768) {
        tl.to(header, {
            xPercent: -100,
            duration: 0.2,
        }, "start")
    } else {
        tl.to(header, {
            opacity: 0,
            duration: 0.2,
        }, "start")
    }
    tl.to(bookLabels, {
        yPercent: 200,
        // duration: 0.2,
        // delay: 1,
        stagger: 0.1,
    }, "start")
    tl.to(bookValues, {
        yPercent: 200,
        // duration: 0.2,
        // delay: 1,
        stagger: 0.1,
    }, "start")
    tl.to(recommendedBy, {
        opacity: 0,
    }, "start")

    tl.to(splitNextTitle[0].chars, {
        yPercent: 150,
        // duration: 0.2,
        stagger: 0.02,
    }, "start");
    tl.to(nextBookImg, {
        yPercent: 150,
        // duration: 0.2,
    }, "start");
    tl.to(splitNextSectionTitle[0].chars, {
        yPercent: 100,
        stagger: 0.02,
        duration: .25,
        // duration: 0.2,
    }, "start");
    tl.to(nextBookBG, {
        scaleX: 0,
        // transformOrigin: "left",
        // duration: 3, 
    },"start+=0.05")
    

    // tl.reverse(true);
    // tl.timeScale( 1.5 ); 
    return tl;
}


/**
 * Menu Animations
*/

// function menuOpen() {
//     const nav = document.querySelector('.nav');
//     const menuList = document.querySelector('.bookList');
//     const menuCloseTrigger = document.querySelector('.toggleMenuClose')
//     const menuOpenTrigger = document.querySelector('.toggleMenu')

//     const tl = gsap.timeline();

//     tl.set(nav, {
//         autoAlpha: 1
//     })
// }
// function menuClose() {
//     const nav = document.querySelector('.nav');
//     const menuList = document.querySelector('.bookList');
//     const menuCloseTrigger = document.querySelector('.toggleMenuClose')
//     const menuOpenTrigger = document.querySelector('.toggleMenu')

//     const tl = gsap.timeline();

//     tl.set(nav, {
//         autoAlpha: 0
//     })
// }


export { 
    fadeOut,
    handleBookHeadlines,
    // coverTransition,
    fadeSlideIn, 
    hide, 
    revealHomeBooks, 
    homepageTitleEnter,
    // homepageTitleLeave,
    homepageLeave,
    BookEnter, 
    bookLeave,
    // menuOpen,
    // menuClose
}