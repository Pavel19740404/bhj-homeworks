const taskInput = document.querySelector('#task__input');
const tasksAdd = document.querySelector('#tasks__add');
const tasksList = document.querySelector('#tasks__list');

taskInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		addTask(event);
	};
});

tasksAdd.addEventListener('click', function (event) {
	addTask(event);
});

tasksList.addEventListener('click', function (event) {
	
	if (event.target.classList.contains('task__remove')) {
		event.target.parentElement.remove();
	};

});

function addTask(event) {
	
	event.preventDefault();
	
	if (taskInput.value.length === 0) {
		return;
	};
	
	tasksList.innerHTML += `
	<div class="task">
	<div class="task__title">${taskInput.value}</div>
	<a href="#" class="task__remove">&times;</a>
	</div >`;

	// sessionStorage.setItem(tasksList.querySelectorAll('.task').length, taskInput.value);
	// sessionStorage.setItem("autosave", {});
	
	taskInput.value = '';
};
