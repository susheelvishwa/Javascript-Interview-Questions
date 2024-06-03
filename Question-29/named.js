// named arguments

var person = {
    name: "happy",
    role: "developer"
};

function greet(person) {
    console.log(person.name + " 😎 " + person.role);
}

greet(person);