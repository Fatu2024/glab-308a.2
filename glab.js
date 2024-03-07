// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”
const adventurer = {
    name: "Robin",
    health: 100,
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
console.log('------');

//Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
console.log(robin.companion.type);
// console.log(Character);
robin.companion.companion.roll();

//Part 3: Class Features
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}
