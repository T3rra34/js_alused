// objekt, alati on nimi:vaartus, nimi:vaartus

const person = {
	firstname: "Kati",
	lastname: "Tamm",
	age: 36,
	email: "Kati.tamm@gmail.com",
	hobbies: ["muusika", "sport"],
	address: {
		city: "Tallinn",
		country: "Harjumaa"
	},
	getBirthYear: function (argument) {
		return 2021 - this.age;
	}
};

let val;

val = person;

val = person.firstname;
val = person["lastname"];
val = person.age;
val = person.hobbies;
val = person.address["city"];
val = person.getBirthYear();

const people = [
	{name: "Kati", age: 36},
	{name: "Mati", age: 38},
	{name: "Mike", age: 27},
];

val = people;

for(let i = 0; i < people.lenght; i ++ ){
	console.log(people[1].name);
};

console.log(val);