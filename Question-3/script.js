// Global Scope

let globalVariable = "global";
greet();

function greet() {
    let functionVariable = "function";
    if (true) {
        let blockVariable = "block"
        console.log(blockVariable);
        console.log(functionVariable);
        console.log(globalVariable);
    }
    console.log(functionVariable);
    console.log(globalVariable);
}
console.log(globalVariable);