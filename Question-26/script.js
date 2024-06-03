// {
//   function greet() {
//     console.log("good morning");
//   }
//   greet();
// }
// greet();

// so in this function i am able to access this function nagware on the scope
// if i want to make a block scope of the function so which this i need to change

// so i need to add strict mode

"use strict"
{
  function greet() {
    console.log("good morning");
  }
//   greet();
}
greet();
