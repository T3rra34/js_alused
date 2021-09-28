//document getElementId();
let val;

val = document.getElementById("Task form");
val = document.getElementById("Task form").id;
val = document.getElementById("Task form").className;

const tasktitle = document.getElementById("Task form");


//stiili muutmine
tasktitle.style.background = "#383";
tasktitle.style.color = "#337";
tasktitle.style.padding = "5px";
//tasktitle.style.display = "none";

//text muutmine
tasktitle.textContent = "My favourite tasks";
tasktitle.innerText = "Medbay";
tasktitle.innerHTML = "<span style='color:red'></span>"

//document querrySelector
val = document.querySelector("Task Form");
val = document.querySelector('Task list');

document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";
document.querySelector('li:last-child').style.color = "red";
document.querySelector('li:nth-child(even)').style.color ="green"
document.querySelector('li:nth-child(odd)').style.color ="orange"

console.log(val);