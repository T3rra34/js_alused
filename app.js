// elemendi looming
const form = document.querySelector(`form`);
const taskInput = document.querySelector(`#task`);
const heading = document.querySelector(`h4`);

taskInput.value = '';

//submit
//form.addEventListener('Submit', runEvent);

//keyboard
//form.addEventListener('keyboard', runEvent);
//form.addEventListener('keyup', runEvent);

//input valja fokuseermine ja lahti fokuseermine
//taskInput.addEventListener('keypress', runEvent);
//taskInput.addEventListener('blue', runEvent);

taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

function runEvent(e) {
	console.log(`Event type: ${e.type}`)
	heading.innerText = e.target.value;
	//e.preventDefault();
}
