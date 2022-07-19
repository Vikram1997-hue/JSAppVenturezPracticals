//Count the Number of Keys/Properties in an Object

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


console.log("FOR OBJECT 1 : No. of keys = " + Object.keys(obj1).length)
console.log("FOR OBJECT 2 : No. of keys = " + Object.keys(obj2).length)