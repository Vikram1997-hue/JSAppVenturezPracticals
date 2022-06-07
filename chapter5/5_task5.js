let copySorted = (arr) => arr.slice().sort();
/*we cannot do something like -
    let arr2 = arr;
Both will point to same memory location. Any changes made to arr2 will also be reflected on arr*/

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)