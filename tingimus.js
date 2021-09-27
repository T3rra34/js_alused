/*
if(tingimus) { if puhul
	// tegevused if puhul
} else {
	//tegeuvsed else puhul
}
*/
const id = 100;

// == vordub
// != ei vordu
// === vordub ja tuubikontroll

let testId;

/*
console.log(testId);

if(typeof testId !== undefined) {
	console.log(`id on ${testId}`);
} else {
	console.log("");
}

if (id > 100) {
	console.log(`id on ${id} - suurem kui 100`);
} else {
	console.log(`id on ${id} - vaiksem voi vordne 100`);
}
*/
/*
const colour = "green";

if(colour=="red") {
	console.log("Stop!");
} else if (colour == "yellow") {
	console.log("Attention");
} else if (colour == "green"){
	console.log("Go!");
} else {
	console.log("colour is not accepted!");
}
*/
// and - &&
/*
const name = "kadi";
const age = 8;
if(age >0 && <= 12) {
	console.log(`${name} on laps`);
} else if (age > 12 && age < 18) {
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on taiskasvanud`);
}

// or = ||
if(age < 18 || age > 65) {
	console.log(`${name} ei saa registreerida`);
} else {
	console.log (`${name} on registreeritud`);
}
*/
// ? - ternary operaator
console.log(id === 100 ? `True` : `False`);

//ilma ()
if(id === 100)
	console.log(`korras`);
else
	console.log(`ei ole korras`);

const colour = "red";

switch(colour) {
	case "red":
		console.log("Stop!");
		break
	case "yellow":
		console.log("Attention");
		break
	case "green":
		console.log("Go!");
		break
	default:
		console.log(`This colour is not accepted`);
}

let kuupaev = new Date("10/03/2021");
let nadalapaev = kuupaev.getDay();
console.log(nadalapaev)

switch(nadalapaev) {
	case "1":
		console.log(`tana on esmaspaev`);
		break
	case "2":
		console.log(`tana on teisipaev`);
		break
	case "3":
		console.log(`tana on kolmapaev`);
		break
	case "4":
		console.log(`tana on neljapaev`);
		break
	case "5":
		console.log(`tana on reede`);
		break
	case "6":
		console.log(`tana on lauppaev`);
		break
	case "0":
		console.log(`tana on puhapaev`);
		break
	default:
		console.log(`Pole tavaline paev`);
		break
}