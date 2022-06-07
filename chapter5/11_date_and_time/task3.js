let getLocalDay = (date) => {
    
    let ans = date.getDay();
    //console.log(ans)
    if(ans == 0) {
        return 7;
    }
    return ans;
};

let date = new Date(2022, 5, 7);  
console.log( getLocalDay(date) ); 