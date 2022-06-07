let formatDate = (date) => {

    let now = new Date();
    if(+now - +date <= 1000)
        return "right now";
    
    else if(+now - +date <= 1*60*1000)
        return `${( Math.floor((+now - +date)/1000) )}sec. ago`;


    else if(+now - +date <= 60*60*1000)
        return `${Math.floor((+now - +date)/60000) } min. ago`;

    return `${date.getDate()<10 ? "0"+date.getDate() : date.getDate()}.${+(date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1)}.${date.getFullYear()%100<10 ? "0"+(date.getFullYear()%100) : date.getFullYear()%100} ${date.getHours()<10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()}`
};


console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );