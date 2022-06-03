//variant 1
function checkAge(age) {
    
    return age>18 ? true : confirm('Did parents allow you?');
}


//variant 2
function checkAge(age) {
    
    return age>18 || confirm('Did parents allow you?');
}