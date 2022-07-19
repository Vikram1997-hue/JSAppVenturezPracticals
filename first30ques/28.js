//Shuffle Deck of Cards

let allSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let suitPos = Math.floor(Math.random() * 4)
let suit = allSuits[suitPos];

/*
0 to 4 (including 0, excluding 4) --->
    0 to 0.9 becomes 0
    1 to 1.9 becomes 1
    2 to 2.9 becomes 2
    3 to 3.9 becomes 3
*/

let number = 1 + Math.floor(Math.random() * 13);
/*
1 to 14

1 to 1.9 -> 1
2 to 2.9 -> 2
..
12 to 12.9 -> 12
13 to 13.9 -> 13 (never becomes 14, since 14 is excluded)
*/

number = number==1 ? 'Ace' : number==11 ? 'Jack' : number==12 ? 'Queen' : number==13 ? 'King' : number;

console.log(number + " of " + suit)