function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}



let emp = {};
alert( isEmpty(emp) ); 
emp["Vikram"] = "Software Developer";
alert( isEmpty(emp) ); 