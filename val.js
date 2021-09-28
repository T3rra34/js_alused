let val

// -> string

val = String(555);
val = String(4.4);
val = String(5.0);




//massiiv -> String

val = String(new Date);

//objekt -> String

val = String[1, 2, 3, 4, 5];

//toString()
val = (5) toString();
val = ("aed") toString();

//String -> number

val = tonumber("5");

//boolian -> number
val = tonumber(True);
val = tonumber(False);

//null -> number

val = tonumber(0);

//tekst -> number

val = "Tere";

val = parseINT("100.3");
val = paresFLT("100.3");


console.log(typeof val);
console.log(val);