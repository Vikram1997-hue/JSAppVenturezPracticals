let getLastDayOfMonth = (year, month) => {

    

    while(month > 12) {
        month -= 12;
        year++;
    }
    
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) 
        return 31;

    else if(month == 3 || month == 5 || month == 8 || month == 10)
        return 30;

    if(year%100 == 0) {
        if(year%400 == 0)
            return 29;
        else 
            return 28;
    }
    else if(year%4 == 0)
        return 29;
    else
        return 28;
};

console.log(getLastDayOfMonth(2022, 6));