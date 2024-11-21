const tooltips = document.querySelectorAll('.has-tooltip');
const newDiv = document.createElement('div');
newDiv.className = 'tooltip';
document.body.append(newDiv);

function clickTip(event) {
	event.preventDefault();

	newDiv.textContent = event.target.getAttribute('title');

	newDiv.style.top = `${event.target.getBoundingClientRect().bottom}px`;
	newDiv.style.left = `${event.target.getBoundingClientRect().left}px`;

	if (newDiv.classList.contains('tooltip_active')) {
		newDiv.classList.remove('tooltip_active');
	} else {
		newDiv.classList.add('tooltip_active');
	}

	// newDiv.classList.add('tooltip_active');

	window.addEventListener('scroll', hideNewDiv);
}

function hideNewDiv() {
	newDiv.classList.remove('tooltip_active');
}

tooltips.forEach((element) => {
	element.addEventListener('click', clickTip);
});
