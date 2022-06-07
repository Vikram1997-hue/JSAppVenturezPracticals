let camelize = (str) => {
    
    if(str.length == 0)
        return str;
    let arr = str.split("-");
    
    let zeroELementCheck = false;
    for(let i in arr) {
        
        if(zeroELementCheck==false && str[0]!="-") {
            zeroELementCheck = true;
            continue;    
        }

        zeroELementCheck = true;
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    let ans = arr.join('');   
    return ans;
}



console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');