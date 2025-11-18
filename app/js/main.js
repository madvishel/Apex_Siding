import Form from "./form.js";
import Header from "./header.js";
import Sliders from "./sliders.js";

const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	nav = document.querySelectorAll('.header__nav'),
	header = document.querySelector('.header');


// Click events

let mobileTimeline;

body.addEventListener('click', function (event) {

	function $(element) {
		return event.target.closest(element);
	}


	// Navigation menu in the header
	
	if ($('.header__burger')) {
	
		nav.forEach(nav => nav.classList.add('is-active-transition'))
		setTimeout(() => menu.forEach(element => element.classList.toggle('is-mobile-menu-active')), 0)
		mobileTimeline = setTimeout(() => nav.forEach(nav => nav.classList.remove('is-active-transition')), 350)
	
	}


	// Scroll to section
	
	let scrollTo = $('.scroll-to');
	if(scrollTo) {
		
		const url = scrollTo.getAttribute('href');
		if (!url) return;

		try {
			const target = new URL(url, window.location.href);
			const normalize = p => p.replace(/\/+$/, '');
			if (target.origin !== window.location.origin || normalize(target.pathname) !== normalize(window.location.pathname)) {
				return;
			}
		} catch (e) {
			return;
		}
		
		event.preventDefault();
		
		const section = document.querySelector("#" + scrollTo.getAttribute('href').split("#")[1])
	
		let timeout = 0;
		if(scrollTo.closest(".popup")) {
			scrollTo.closest(".popup").querySelector(".close-popup").click();
			timeout = 400;
		}
	
		setTimeout(() => {
			if(section) {
				section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			} else {
				body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			}
		}, timeout)
	
	}

})


// Aspect ratio for images

const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure img');
imageAspectRatio.forEach(imageAspectRatio => {
	const [ width, height ] = [imageAspectRatio.getAttribute('width'), imageAspectRatio.getAttribute('height')];
	if(width && height) imageAspectRatio.style.setProperty('--aspect-ratio', `${width}/${height}`);
})


// Resize

let windowSize = 0;

function resize() {

	header && html.style.setProperty("--height-header", header.offsetHeight + "px");

	html.style.setProperty("--vh", (window.innerHeight * 0.01).toFixed(2) + "px");
	windowSize != window.innerWidth && html.style.setProperty("--svh", (window.innerHeight * 0.01).toFixed(2) + "px");

}

resize();

window.addEventListener('resize', resize)


// Header

new Header();


// Form

new Form();


// Sliders

new Sliders();


Fancybox.bind('[data-fancybox="gallery"]');

/* 
// Animation on scroll

AOS.init({
	disable: "mobile",
	once: true
}); */
