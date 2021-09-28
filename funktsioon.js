// funktsioonid defineerimine deklareerimine
function greeting(firstname = `Henri`, lastname = `Kazbekov`){
	/*if(typeof firstname === `undefined`) {
		firstname + `Henri`;
	}
	if(if typeof lastname === `undefined`){
		lastname + `Kazbekov`;
	} */
	return `Tere, ` + firstname + ` ` + lastname;
}
// funktsion kutsumine toole
let greet =(greeting());
console.log(greet);

console.log();
// funktsiooni avaldise kujul
const square = function(number = 1) {
	return number + number;
}
console.log();

// IIFE - immediately invokable function expression
(function() {
	console.log(`function is running`);
})();	

(function(name) {
	console.log(`Tere, ` + name);
})(`Henri`);	

console.log();
// objekti see defieerimine funktsioonid
const todo = {
	add: function() {
		console.log(`add todo ...`);
	},
	edit: function(id) {
		console.log(`edit todo ${id}`);
	},
	delete: function() {
		console.log(`delete todo ...`);
	},
}

todo.add();
todo.edit(5);
todo.delete();