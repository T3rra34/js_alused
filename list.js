const name = "Henri Kazbekov";
const age = 17;
const job = "kutseopilane";
const city = "Tartu";

let html;

html = "<ul>"
			"<li>" + name + "</li>" + 
			"<li>" + age + "</li>" +
			"<li>" + job + "</li>" +
			"<li>" + city + "</li>" +
			"</ul>"

// esti - template settings

html = `
	<ul>
		<li></li>
		<li></l>
		<li></li>
		<li></l>
	</ul>
	`

console.log(html);

document body.innerHTML = html;