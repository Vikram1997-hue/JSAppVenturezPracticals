function makeCounter() {
    let count = 0;
  
    let x = function() {
        return count++;
    }; 

    x.set = value => count = value;

    x.decrease = () => --count;

    return x;
}
  
let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter.set(12) ); // 1
console.log( counter.decrease() ); // 2
