let getSecondsToTomorrow = () => {

    let now = new Date();
    let midnightTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);//autocorrect will handle it

    return +midnightTomorrow - +now;
};

console.log(getSecondsToTomorrow());