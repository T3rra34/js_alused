let val;

const today = new Date();

val = today.getMonth(); // 0 on jaanuar
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //seconds

let birthday = new Date('9/27/2001 11:0:0');
birthday = new Date('Semptemeber 27 2001');

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2001);
birthday.setHours(11);
birthday.setMinutes(25);
birthday.setSeconds(50);


console.log(birthday);
console.log(val);