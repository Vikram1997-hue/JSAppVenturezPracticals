function multiplyNumeric(obj) {

    for(let key in obj) {

        // if( Boolean(Number(obj[key]))==false )
        //     continue;
        // obj[key] *= 2;
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
    }
}
