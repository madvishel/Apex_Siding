export default function Sliders() {
	
	document.querySelectorAll(".gallery-slider").forEach(sliderElement => {
		new Swiper(sliderElement, {
		
			loop: true,
			
			slidesPerView: 1,
			spaceBetween: 16,
			centeredSlides: true,

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			autoplay: {
				disableOnInteraction: true
			},
	
			breakpoints: {
				576: {
					slidesPerView: 2,
					speed: 700,
				},

				992: {
					spaceBetween: 32,
					slidesPerView: 3,
				},
	
				
			}
	
		});
	})

}
