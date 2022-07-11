/*You need to tell me the occurrence of array element ['a', 'b', 'c', 'a', 'b', 'b']*/



let arr = ['a', 'b', 'c', 'a', 'b', 'b'];
let ans = {};
let set = new Set()

for(let i of arr) { //O(n)
    
    if(set.has(`${i}`)) {
        ans[`${i}`]++;
        continue;
    }

    else
        ans[`${i}`] = 1;
    set.add(i);
}

console.log(ans)