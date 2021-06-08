let num = 1001;
let num2 = 123.45
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(num.toString().length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(num2.toString().replace(".", "").length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let number = 123.45;
if (number.isInteger) {
  console.log(number.toString().length);
} else {
console.log(number.toString().replace(".", "").length);
}
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
//b) Change all of the letters in the dna string to UPPERCASE, then print the result.
//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(dna);
//let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
dna = dna.replace("GCT", "AGG");
console.log(dna);
//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dna.indexOf("CAT")){
  console.log("CAT gene found")
} else {
  console.log("NO CAT gene found");
}
//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.slice(16, 19));
//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`);
//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let language = 'JavaScript';
//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let letterJ = language.split("").shift();
let letterS = language.split("").slice(1,5).slice(3);
console.log(letterJ.concat(letterS));

//b) Without using .slice(), use method chaining to accomplish the same thing.
console.log(language.replace("ava","").replace("cript",""));
//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for JavaScript is ${letterJ}${letterS}`);