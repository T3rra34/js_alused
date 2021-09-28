//for - tsukkel

console.log(`for tsukkel`);
for(let i = 0; i < 10; i++) {
	if(i ==5) {
		break;
	}
	console.log(i)
}

//while tsukkel

console.log(`while tsukkel`);

let i = 0;

while(i < 10) {
	console.log(i);
	i++;
}


//do while

console.log(`do while tsukkel`);

let j = 0;
do {
	console.log(j);
	j++;
} while(j < 10);

//tsuklid ja massiivid

const cars =[`Ford`, `Honda`, `Audi`];
console.log(cars);

//for tsukliga 
for(let i = 0; i < cars.length; i++) {
	console.log(i);
}

// forEach

console.log(`forEach`);

cars.forEach(function(element, index, array) {
	console.log(`cards[${element} = ${index}]`);
	console.log(array);
});

// forEach => function
	
cars.forEach((element, index) => {
	console.log(`cards[${index} = ${element}]`);
});

//tsuklid ja objektid

const person = {
	firstname: `kadi`,
	surname: `tamm`,
	age: 25
}

//for in tsukkel

for(let key in person) {
	console.log(`${key} = ${person[key]}`);
}