const card = document.querySelectorAll('.card'); // получаем все карточки

card.forEach(item => { // перебираем полученне карточки

	let rotatorCase = item.querySelectorAll('.rotator__case'); // создаём переменную, в которую записываем всех потомков у карточки полученной по "item" из массива

	rotatorCase.forEach((item, index) => { // перебираем потомков

		if (item.classList.contains('rotator__case_active') === true) { // находим активного потомка, для первого запуска (не забываем, что мы получили этот массив из "card")

			let firstSpeed = item.dataset.speed; // читаем какая скорость у него стоит, для первого запуска
			let timeIndex = index; // получаем его индекс в массиве "rotatorCase"
			item.style.color = item.dataset.color; // перекрашиваем элемент

			setTimeout(function run() { // запускаем для него тайм-аут, с функцией которую будем повторять
				rotatorCase.forEach(item => item.classList.remove('rotator__case_active')); // т.к. мы уже получили индекс активного элемента, можно сделать все элементы скрытыми 
				
				if (timeIndex >= rotatorCase.length - 1) { // проверим что наш индекс в массиве "rotatorCase" не выходит за границы массива
					timeIndex = 0; // если выходит обнулим его
				} else {
					++timeIndex; // иначе прибавим +1 к индексу, тем самым получим следующий элемент в массиве
				};
				
				rotatorCase[timeIndex].classList.add('rotator__case_active'); // получив индекс после проверки, активируем элемент, делаем его видимым
				rotatorCase[timeIndex].style.color = rotatorCase[timeIndex].dataset.color; // красим его
				speed = rotatorCase[timeIndex].dataset.speed; // читаем скорость с которой у нас запустится следующая функция run()
				
				setTimeout(run, speed); // запускаем новый тайм-аут, с только что выплненой функцией, и новым тайм-аутом, тем самым, зациклив наш тайм-аут (хрен его теперь остановишь, кнопки нету =) )

			}, firstSpeed); // скорость первого запуска
		};
	});
});

//А и ещё вот этот вот щедевр =_) из ДЗ "Подумайте, как из setInterval сделать бесконечный цикл", б..ь setInterval это и есть бесконечный цикл!!! и пока его не остановишь через "clearInterval" он так и будет работать!!!
//Ну ладно... может я и не прав... "Но отличие этого метода от setTimeout в том, что функция запускается не один раз, а периодически через указанный интервал времени." Ну тоесть получается бесконечно =)
