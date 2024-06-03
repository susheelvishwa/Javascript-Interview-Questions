
let str1 = "susheel";
let str2 = "vishwakarma";


// add multiple strings
let result = str1 + " " + str2;
// console.log(result);


// using concat() method
let result2 = str1.concat(" ", str2);
// console.log(result2);


// extract a portion of a String
let subString = result.substring(2, 5);
// console.log(subString);


// retrieve the length of a string
// console.log(result.length);


// convert a string into upper and lower case
// console.log(result.toUpperCase());
// console.log(result.toLowerCase());


// split string into an array of substring
// based on a delimiter
let arr = result.split(" ");
// console.log(arr);


// replace occurrence of a string within a string
// console.log(result.replace("susheel", "ravi"));


// remove leading and trailing whitespace
let str4 = "    susheel vishwakarma      "
let updateStr4 = str4.trim();
// console.log(updateStr4);
// console.log(str4);


// template literals
let r3 = `${str1} ${str2}`;
// console.log(r3);


// using join method
let newStr = [str1, str2];
let r4 = newStr.join(' ');
console.log(r4);




