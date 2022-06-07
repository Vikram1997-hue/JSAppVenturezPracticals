let aclean = (arr) => {

    if(arr.length == 0)
        return;

    let my_set = new Set();
    let arr2 = [];

    for(let i in arr) {

        let temp = arr[i].split('').sort().join('').toLowerCase();
        let temp2 = arr[i];

        //console.log(temp2)
        
        if(my_set.has(temp))
            continue
            //console.log(arr[i]);
            //arr.splice(i,1);
            //continue;
        
        my_set.add(temp);
        arr2.push(arr[i])
    }
    
    return arr2;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
