export default function Header() {

	const header = document.querySelector('.header'),
	hToDown = 300, hToUp = 50;

	let hPosToDown, hPosToUp, hCheck = [true, true], hPosCheck = false,
        hTopCheck = false, scrolled = [window.scrollY, window.scrollY], checkScrolled = '';

	let top = [window.scrollY, false];

	header.classList.add('is-init');

	function scroll() {
		top[0] = window.scrollY;

		if (top[0] >= 300 && top[1] == false) {

			top[1] = true;
			header.style.setProperty('--opacity', '0');

			setTimeout(function () {
				header.classList.add('is-active');
				header.style.setProperty('--opacity', '1');
			}, 200);

		} else if (top[0] <= 300 && top[1] == true) {

			top[1] = false;
			header.style.setProperty('--opacity', '0');

			setTimeout(function () {
				header.style.setProperty('--opacity', '1');
				header.classList.remove('is-active');
			}, 200);

		}

		scrolled[0] = scrolled[1];
		scrolled[1] = window.scrollY;

		if (!hPosCheck) {

			hPosCheck = true;

			hPosToDown = window.scrollY + hToDown;
			hPosToUp = window.scrollY - hToUp;
		}

		if (scrolled[0] > scrolled[1]) 
			checkScrolled = 'up';
		else if (scrolled[0] < scrolled[1]) 
			checkScrolled = 'down';

		if (!hTopCheck && window.scrollY > 0) {

			hTopCheck = true;
			header.classList.remove('on-top');

		} else if (window.scrollY == 0) {
			hTopCheck = false;
			header.classList.add('on-top');
		}
		
		if (checkScrolled == 'down') hPosToUp = window.scrollY - hToUp;
		if (checkScrolled == 'up') hPosToDown = window.scrollY + hToDown;
		
		
		if (hPosToUp >= window.scrollY && hCheck[0]) {
			hCheck[0] = false; hCheck[1] = true;
			header.classList.remove('is-hidden'); // SHOW HEADER
		}
		
		if (hPosToDown <= window.scrollY && hCheck[1]) {
			hCheck[1] = false; hCheck[0] = true;
			header.classList.add('is-hidden'); // HIDE HEADER
		}

	}

	//scroll();
	//window.addEventListener("scroll", scroll);
}
