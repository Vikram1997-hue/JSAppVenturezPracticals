let getSecondsToday = () => {

    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return +now - +midnight;
};

console.log(getSecondsToday());