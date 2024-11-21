const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', taskAdd);
list.addEventListener('click', taskRemove);

function taskAdd(event) {
	event.preventDefault();
	const element = document.createElement('div');
	element.className = 'task';
	element.innerHTML = `<div class="task__title">${input.value}</div>
<a href="#" class="task__remove">&times;</a>`;
	list.appendChild(element);
	input.value = '';
	// saveTask();
}

function taskRemove(event) {
	event.preventDefault();
	const removeX = event.target;
	if (removeX.classList.contains('task__remove')) {
		let remove = removeX.closest('.task');
		// input.value.trim() !== '';
		remove.remove();
		// saveTask();
	}
}



form.addEventListener('submit', function(event) {
	event.preventDefault();
	// const taskTitle = input.value.trim();
	if(input.value.trim() !== '') {
		taskAdd();
	}
});

// localStorage:

// function saveTask() {
// 	localStorage.setItem('tasks', list.innerHTML);
// }

// if (localStorage.getItem('tasks')) {
// 	list.innerHTML = localStorage.getItem('tasks');
// };
