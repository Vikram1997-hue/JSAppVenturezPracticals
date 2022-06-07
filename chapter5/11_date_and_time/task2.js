let getWeekDay = (date) => {
    let arr = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return arr[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getWeekDay(date) );   //should output "TU"
