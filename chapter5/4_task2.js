styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[(styles.length-1)/2] = "Classics";

alert(styles.shift())

styles.unshift("Rap", "Reggae");