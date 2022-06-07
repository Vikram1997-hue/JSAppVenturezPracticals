function unique(arr) {
    /* your code */

    let obj = {};
    for(let i in strings) 
        obj[`${strings[i]}`] = i;

    //console.log(obj);

    return Object.keys(obj) //returns an array whose contents are the keys of the parameter obj 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O