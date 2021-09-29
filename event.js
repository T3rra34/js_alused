//document getElementId();
let val;

val = document.getElementById("Task form");
val = document.getElementById("Task form").id;
val = document.getElementById("Task form").className;

const tasktitle = document.getElementById("Task form");

//stiili muutmine
tasktitle.style.background = "white";
tasktitle.style.color = "black";
tasktitle.style.padding = "none";
//tasktitle.style.display = "none";

//text muutmine
tasktitle.textContent = "My favourite tasks";
tasktitle.innerText = "Medbay";
tasktitle.innerHTML = "<span style='color:red'></span>"

//document querrySelector
val = document.querySelector("Task Form");
val = document.querySelector('Task list');

document.querySelector('li').style.color = "white";
document.querySelector('ul li').style.color = "blue";
document.querySelector('li:last-child').style.color = "white";
document.querySelector('li:nth-child(even)').style.color ="white"
document.querySelector('li:nth-child(odd)').style.color ="black"
document.querySelector(`li:nth-child(even)`).style.background = "black"
document.querySelector(`li:last-child`).style.background = "black"


console.log(val);