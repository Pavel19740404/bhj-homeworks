let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');

function addProducts(event) {
	const element = event.target.closest('.product');
	const elementId = element.dataset.id;
	const img = element.querySelector('.product__image').src;

	inCart = cart.querySelector(`.cart__product[data-id="${elementId}"]`);

	 if(inCart) {
	 	const count = inCart.querySelector('.cart__product-count');
	 	const currentCount = parseInt(count.textContent);

	 	const input = element.querySelector('.product__quantity-value');
	 	const select = parseInt(input.textContent);

	 	count.textContent = currentCount + select;
	 } else {
	 	const productCart = document.createElement('div');
	 	productCart.classList.add('cart__product');
	 	productCart.dataset.id = elementId;

	 	const productImg = document.createElement('img');
	 	productImg.classList.add('cart__product-image');
	 	productImg.src = img;
	 	productCart.appendChild(productImg);

	 	const countProduct = document.createElement('div');
	 countProduct.classList.add('cart__product-count');

	 const input = element.querySelector('.product__quantity-value');
	 const select = parseInt(input.textContent);
	 countProduct.textContent = select;

	 productCart.appendChild(countProduct);
	 cart.appendChild(productCart);
	}

}

product.forEach((element) => {
	const minus = element.querySelector('.product__quantity-control_dec');
	const plus = element.querySelector('.product__quantity-control_inc');

	minus.addEventListener('click', () => {
		const input = element.querySelector('.product__quantity-value');
		let quantity = parseInt(input.textContent);
		if (quantity > 1) {
			quantity --;
			input.textContent= quantity;
		}
	});

	plus.addEventListener('click', () => {
		const input = element.querySelector('.product__quantity-value');
		let quantity = parseInt(input.textContent);
		quantity ++;
		input.textContent= quantity;
	});

	const button = element.querySelector('.product__add');
	button.addEventListener('click', addProducts);


});
