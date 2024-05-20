// non primitive data type

// Array
let oddNumber = [1, 3, 5];


//object

let person = {
    name: "valuebound",
    Founded: 2008,
    age: "16",
    focusOn: ["CSM development", "cloud solutions", "enhancing digital costumer experience"],
    greet: function () {
        console.log(this.name);
    }
};
person.greet();
