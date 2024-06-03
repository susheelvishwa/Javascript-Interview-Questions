function sayHello(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name:"susheel"
}


// # call
sayHello.call(person, 'Hello')
// hello susheel

// apply
sayHello.apply(person, ["hii"])

// Bind
const greetPersion = sayHello.bind(person);
greetPersion('greeings');

