//---------- размер шрифта ----------\\
const bookControlFontSize = document.querySelector('.book__control_font-size');
const bookContent = document.querySelector('.book__content');


bookControlFontSize.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;
	// const targetDataSet = event.target.dataset; //можно получить и дата-сет, но вот только нафига??? использовать его вместо ID, типа более понятный в html??? или он тут для проверки на пустой DOMStringMap {}???
	// console.log(targetDataSet);
	event.preventDefault();

	bookContent.classList.remove('book_fs-big');
	bookContent.classList.remove('book_fs-small');
	
	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('font-size_active');
	};
	
	if (targetClassList.contains('font-size_small') == true) {
		targetClassList.add('font-size_active');
		bookContent.classList.add('book_fs-small');
		return;
	};
	
	if (targetClassList.contains('font-size_big') == true) {
		targetClassList.add('font-size_active');
		bookContent.classList.add('book_fs-big');
		return;
	};
	
	targetClassList.add('font-size_active');
	//Ваш кружочек косячит сворачивая элемент в круг, тем самым при использовании addEventListener можно промахнутся и попасть по родителю
});

//---------- цвет шрифта ----------\\
const bookControlColor = document.querySelector('.book__control_color');

bookControlColor.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;

	event.preventDefault();

	bookContent.classList.remove('book_color-black');
	bookContent.classList.remove('book_color-gray');
	bookContent.classList.remove('book_color-whitesmoke');

	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('color_active');
	};

	if (targetClassList.contains('text_color_black') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-black');
		return;
	};

	if (targetClassList.contains('text_color_gray') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-gray');
		return;
	};

	if (targetClassList.contains('text_color_whitesmoke') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-whitesmoke');
		return;
	};

});

//---------- цвет фона ----------\\

const bookControlBackground = document.querySelector('.book__control_background');

bookControlBackground.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;

	event.preventDefault();

	bookContent.classList.remove('book_bg-black');
	bookContent.classList.remove('book_bg-gray');
	bookContent.classList.remove('book_bg-white');

	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('color_active');
	};

	if (targetClassList.contains('bg_color_black') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-black');
		return;
	};

	if (targetClassList.contains('bg_color_gray') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-gray');
		return;
	};

	if (targetClassList.contains('bg_color_white') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-white');
		return;
	};

});


//-------------Ответ препода!!!-------------\\
// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// controlElements.addEventListener("click", function (event) {
//   event.preventDefault();

//   const { size, textColor, bgColor } = event.target.dataset;

//   const elementClassArray = event.target.classList;
//   const activeControl = event.target
//     .closest(".book__control")
//     .querySelectorAll("a");

//   activeControl.forEach((element) => {
//     element.classList.remove(elementClassArray[0] + "_active");
//   });

//   event.target.classList.add(elementClassArray[0] + "_active");

//   function removePreviousClassName(className) {
//     for (value of bookElement.classList) {
//       if (value.includes(className)) {
//         bookElement.classList.remove(value);
//       }
//     }
//   }

//   if (size || event.target.className === "font-size font-size_active") {
//     removePreviousClassName("book_fs-");
//     bookElement.classList.add("book_fs-" + size);
//   }

//   if (textColor) {
//     removePreviousClassName("book_color-");
//     bookElement.classList.add("book_color-" + textColor);
//   }

//   if (bgColor) {
//     removePreviousClassName("book_bg-");
//     bookElement.classList.add("book_bg-" + bgColor);
//   }
// });
