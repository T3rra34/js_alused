const name = "Henri";
const surname = "Kazbekov";
const age = "17";
const text = "Yo, ma olen Tartu kutsehariduskeskuse opilane";
const tags = "arendus, arendaja, opilane, programmeerimine"

let suva;

// concatemation
suva = name + " " + surname;

// append
suva = "Henri";
suva = "surname";

suva = text + "Minu tagid on " + tags;

// escaping

suva = "See on \ jutumarkides\ ";

// suuruse vahedus

suva = name.toUppercase();
suva = name.toLowercase();

suva = surname[0];
suva = surname indexof("e");
suva = surname LastIndexof("a");

//suva = surname.charAt

suva = surname.slice(-3);

suva = tags.split(" ,");

console.log(suva);