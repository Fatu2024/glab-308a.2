// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],

    // Next, give Robin’s feline friend a friend of his own:
    companion: {
        name: "Leo",                                                    //console.log(adventurer);
        type: "cat",                                                    //console.log(adventurer.companion.companion.inventory);
        companion: {
            name: "Frank",
            type: "flea",
            inventory: "small hat and sunglasses",
        }
    },
//give Robin the following method
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};
adventurer.roll();