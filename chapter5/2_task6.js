function randomInteger(min, max) {

    min -= 0.5;
    max += 0.5;
    return Math.round(min + Math.random()*(max-min));
}

for ( ; ; )
    alert(randomInteger(1,3));