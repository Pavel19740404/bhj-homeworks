const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {

	reveal.forEach(item => {

		let {top, bottom} = item.getBoundingClientRect();

		if (top < window.innerHeight && bottom > 0) {
			item.classList.add('reveal_active');
			// console.log({top, bottom});
			// console.log(window.innerHeight);
		} else {
			item.classList.remove('reveal_active');
		};

	});

});
