// -> Take one or more functions as arguments(callback function) OR

// function hof(func) {
//     func();
// }

// hof(sayHello);

// function sayHello() {
//     console.log("hello");
// }



// -> Return a function as a result

function createAdder(number) {
    return function (value) {
        return number + value;
        // 'return' statement and to add 'number' and 'value'
    }
}

const addFive = createAdder(5);
console.log(addFive(3)); // Example usage, should print 8
