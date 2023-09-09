// import LocomotiveScroll from 'locomotive-scroll';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";


// import Menu from "../menu"
// import { 
// 	menuOpen,
// 	menuClose 
// } from "../animations/index"
class Book {
	namespace = 'book';

	constructor() {
		this.menu = document.querySelector('.toggleMenu'); 
	}
	beforeEnter = data => {
		console.log(data, 'on Book page');
		console.log(this.menu);
		// this.menu = new Menu();
	};
	// beforeLeave = data => {
	// 	this.menu.removeListeners()
	// }
}

export default new Book();