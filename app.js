// elemendi looming
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h4');

taskInput.value = '';

//submit
//form.addEventListener('Submit', runEvent);

//keyboard
//form.addEventListener('keyboard', runEvent);
//form.addEventListener('keyup', runEvent);

//input valja fokuseermine ja lahti fokuseermine
//taskInput.addEventListener('keypress', runEvent);
//taskInput.addEventListener('blue', runEvent);

//taskInput.addEventListener('cut', runEvent);
//taskInput.addEventListener('paste', runEvent);
form.addEventListener('submit', AddTask);

function AddTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');

	li.className = "collection-item"
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode("X"))
	link.setAttribute('href', '#')

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = "";

	e.preventDefault();
}
