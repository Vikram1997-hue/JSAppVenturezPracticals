function truncate(str, maxlength) {

    str = str.length < maxlength ?          
        str : str.slice(0,maxlength) + "...";
    return str;
}

alert(truncate("Hi everyone",20));

alert(truncate("Hi everyone today is going to be an amazing day with epic proportions of awesome",20));
