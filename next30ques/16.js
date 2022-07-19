//Loop Through Object Using for...in

let obj = {
    company: "AppVenturez Mobitech Pvt. Ltd.",
    hq: "Noida, UP",
    domain: "Technology",
}

// for(let property in obj) {
//     console.log("Key: ", property, ", \tValue:", obj[property])
// }

for(let key in obj) {
    console.log("Key: ", key, ", \tValue:", obj[key])
}