function checkSpam(str) {

    let str = str.toLowerCase();;
    let spamContent = ["viagra", "xxx"];
    for(let i=0 ; i<spamContent.length ; i++) {

        let keyWord = spamContent[i];
        for(let j=0 ; j<(str.length-keyWord.length) ; j++) {

            if(~str.indexOf(keyWord,j)) {
                return true;
            }
        }
    }

    //or could have used includes()
    return false;
}

alert( checkSpam("john") );