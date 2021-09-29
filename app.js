// elemendi looming
const list = document.querySelector(`ul`);
// classi maaramine
const li = document.createElement(`li`);
li.classname = "collection-item";

//texti lisamine
li.appendChild(document.createTextNode(`Study element cration`));

const link = document.createElement(`a`);
link.classname = `secondary-content`;
link.setAttribute('href', '#');
list.appendChild(link);

//elemendi lisamine teiste elemendi sisse
list.appendChild(li);

console.log(li);