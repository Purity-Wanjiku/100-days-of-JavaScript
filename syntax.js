//comments out a single line comment
//It also coments after a line of code
/*   */   //comments out multiple lines comment
//it also comments something out in the middle of a line of code

//data types
// Object: Collections of related data.
// Symbols are unique identifiers
//Undefined represents the absence of a value through it
//Null represents the intentional absence of a value
//Boolean the answers to a “yes” or “no” question.
//String: Any grouping of characters. Uses ' ' or " "

//Operators
//The + operator appends (concantenation) two strings together
let x = "Go";
let y = " home!";
let z = x + y
console.log(z);
//length stores the number of characters in a string
//You can retrieve property information by appending the string with a period and the property name
console.log("Hello".length);  //using the dot operator to retrieve property of the string

//methods - actions
const r = "hello";
console.log(r.toUpperCase());     // returns a string in all capital letters
console.log(r.startsWith("h"));   //It returns a boolean if it is true the string starts with the specified character

//STRING OBJECTS AND STRING PRIMITIVES
const strprim ="food";  //a literal string - primitve
const strobj = new String(strprim);  //String with new returns a string wrapper object.
const strprim2 = String(1);      //coerced into string primitive "1"
console.log(strobj);

const s1 = "2+2";
const s2 = new String(2+2); //modifies s1 to String that performs 2+2
// console.log(s1);
console.log(s2);

const a = 2;
const b = 2;
if (a < b) {
    console.log(`${a} is less than ${b}`);
}else if(a > b){
    console.log(`${a} is greater than ${b}`);
}else {
    console.log(`${a} and ${b} are equal.`);
}