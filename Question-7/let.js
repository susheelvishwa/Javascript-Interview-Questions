// let creates a block-scoped variable
// using let

function example() {
    if (true) {
        let count = 10;
        console.log(count);
        // output should be 10
    }
    console.log(count);
    // output should be : count  is not define
}
example()
