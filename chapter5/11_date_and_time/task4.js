let getDateAgo = (date, days) => {

    //let dateCopy = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    let dateCopy = new Date(date);

    if(dateCopy.getDate() > days)
        return dateCopy.getDate()-days;

    else if(dateCopy.getDate() == days) {
        dateCopy.setDate(0);
        return dateCopy.getDate()
    }
        
    //greater than current number of days
    dateCopy.setDate(-1*( days - dateCopy.getDate() )); //date.getDate() 
    return dateCopy.getDate();
    
};

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)