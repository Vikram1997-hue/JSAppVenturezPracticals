let unique = (arr) => {
    /* your code */
    let set = new Set();
    for(let i in arr) {
        set.add(arr[i]);
    }
    return set;

};
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(values)
console.log( unique(values) ); // Hare, Krishna, :-O