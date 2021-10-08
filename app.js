// event elements
const tasklist = document.querySelector('ul');
const removelist = document.getElementById('removebtn');

//click element kustutamiseks
tasklist.addEventListener('click', deleteTask);
removelist.addEventListener('click', deleteList);

function deleteTask(e) {
	if(e.target.textContent = 'X') {
		if(confirm('Kas olete kindel, et soovite kustudada?')) {
			e.target.parentElement.remove();
		}
	}
}
function deleteList(e) {
	if (confirm('Olete kindel, et tahate koike kustudada?')) {
		if (e.target.id == 'removebtn') {
			tasklist.innerHTML = '';
		}
	}
}