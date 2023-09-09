// import LocomotiveScroll from 'locomotive-scroll';

// import '../../index.scss'

// import {preloadImages, preloadFonts, clamp, map} from '../../utils';

// import Menu from "../menu"
// import { 
// 	menuOpen,
// 	menuClose 
// } from "../animations/index"

class Home {
	namespace = 'home';
	constructor() {
		this.menuToggle = document.querySelector('.toggleMenu'); 
		this.menuToggleClose = document.querySelector('.toggleMenuClose'); 

		this.addListeners();
	}
	beforeEnter = data => {
		console.log(data, 'on home page');
		// console.log(this.menu);
		
		this.menuToggle.addEventListener('click', e => menuOpen)
		this.menuToggle.addEventListener('click', e => menuClose)

		// this.menu = new Menu();
		// this.menu.addListeners();
	};

	addListeners() {
		this.menuToggle.addEventListener('click', () => menuOpen)
		this.menuToggle.addEventListener('click', menuClose)
	}
	// beforeLeave = data => {
	// 	this.menu.removeListeners()
	// }
}

export default new Home();