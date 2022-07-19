//Merge Property of Two Objects

let cloneDeep = require('lodash.clonedeep')

let obj1 = {
    name: "Myles Kennedy",
    age: 52,
    ethnicity: "White",
    gender: "Male"
};

let obj2 = {
    bands: {
        band1: {
            name: "Alter Bridge",
            strength: 4,
            debutAlbumYear: 2004
        },
        band2: {
            name: "SMKC",
            strength: 5,
            debutAlbumYear: 2012 
        },
        band3: {
            name: "Myles Kennedy & Company",
            strength: 3,
            debutAlbumYear: 2018
        }
    }
};


let clone1 = cloneDeep(obj1);
let clone2 = cloneDeep(obj2);


let combinedObj = {};
Object.assign(combinedObj, clone1, clone2)
console.log(combinedObj)


//this method stands the test of deep cloning
obj2.bands.band1.debutAlbumYear = 2022;
console.log(combinedObj)

console.log(obj2)