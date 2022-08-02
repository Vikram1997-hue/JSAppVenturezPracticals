//Arrow function in an object

let obj = {
    name: "Chandler Bing",
    age: 100,
    joke: () => {
        let random = Math.floor(Math.random() * 5);
        switch(random) {
            case 0: console.log("I'm not good with the advice, but can I interest you in a sarcastic comment?");
                    break;
            case 1: console.log("...I'm really not");
                    break;
            case 2: console.log("Yeah, and then at the end of the show, he just starts banging his hands together!");
                    break;
            case 3: console.log("BLA!");
                    break;
            case 4: console.log("Richard, if you're in there, can you give me my credit card back please?");
        }
    }
}

obj.joke();