const arr = [1, 2, 3, 4];
// console.log(...arr);

// copying an arr
const originalArr = [1, 2, 3, 4];
const copiedArr = [...originalArr];
// console.log(copiedArr);

// merging arr
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const margeArr = [...arr1, ...arr2]
// console.log(margeArr);


// passing multiple function argument to a function
const number = [1, 2, 3, 4, 5,6];
sum(...number);
function sum(a, b, c, d, e, f) {
    console.log(a+b+c+d+e+f);
}







