/* Q2. You need to tell me the index of [3, 4] of [[1,2],[4,5],[3,4]]
 */

let getMeIndex = (arr) => {
    for(let j in arr) {

        // console.log(arr[j])
        if(arr[j].length != 2)
            continue;

        if(arr[j][0] == 3 && arr[j][1] == 4)
            return j
    }
    return -1;
}


let arr = [[1,2],[4,5],[3,4],[3,5]];
let ans = getMeIndex(arr);
ans != -1 ? console.log("Found at "+ans) : console.log("Not found in array");

// for(let i in arr) {
//     console.log(arr[i])
//     if(JSON.stringify(arr[i]) == JSON.stringify([3,4])) {
//         console.log("Found at " + i);
//         break;
//     }
// }


