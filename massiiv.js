const numbers1 = [43, 323, 23, 1, 6, 78];
const numbers2 = new Array(12, 54, 75, 16, 52);
const fruits = ["banaan", "apelsiin", "virsik"];
const mixed = ["banaan", 3, 23, "apelsiin", {a:1, b:2}, new Date()];

let mass

mass = numbers1.length; // masiivi pikkus
mass = Array.isArray(numbers1); //kas on massiiv
mass = numbers1[3]; //kindel element
mass = numbers1[4];

numbers1[2] = 100


//mass = numbers1.indexof(36); //elemendi jalgimine

//numbers1.push(250); // elementi loppu lisamine
//numbers1.unshift(120); // elementi maha votmine
//numbers1.pop(); // viimase elemendi maha votmine
//numbers1.shift(); // elemendi kustutamine algusest

mass = numbers1.concat(numbers2);

console.log(mass);
console.log(numbers1);