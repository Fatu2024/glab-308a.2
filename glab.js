// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”
// const adventurer = {
//     name: "Robin",
//     health: 100,
//     inventory: ["sword", "potion", "artifact"],

//     // Next, give Robin’s feline friend a friend of his own:
//     companion: {
//         name: "Leo",                                                    //console.log(adventurer);
//         type: "cat",                                                    //console.log(adventurer.companion.companion.inventory);
//         companion: {
//             name: "Frank",
//             type: "flea",
//             inventory: "small hat and sunglasses",
//         }
//     },
//     //give Robin the following method
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//     }
// };
// adventurer.roll();
// console.log('------');



// Part 2: Class Fantasy
class Character {
    //add a static  MAX_HEALTH property to the Character class equal to 100. 
    //can only be accessed by the class itself by doing console.log(Character.MAX_HEALTH);
    static MAX_HEALTH = 100;
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
    // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
    static ROLES = ['Fighter', 'Healer', 'Wizard'];
    constructor(name, role,) {
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
    discover(){
        console.log(`${this.name} is discovering...`);
        super.roll();
    }
    fish(){
        console.log(`${this.name} is fishing...`);
        super.roll();
    }
    addItems(items){
    console.log(this.inventory.push(items));
    }
}
console.log(Adventurer.ROLES);

const Fatu = new Adventurer ('Fatu', 'girl scout');
console.log(Fatu);
//answer: 
// Adventurer {
//     name: 'Fatu',
//     health: 100,
//     inventory: [ 'bedroll', '50 gold coins' ],
//     role: 'girl scout'
//   }

Fatu.fish();
//answer:
// Fatu is fishing...
// Fatu rolled a 11.

//Next, create a Companion class with properties and methods specific to the companions.
class Companion extends Character {
    constructor(name, type){
        super(name);
        this.name = name;
        this.type = type;
    }
    //methods
    assist(){
        console.log (`${this.name} is a ${this.type} assisting the adventurer.`)
    }
}
const Tinkerbell = new Companion ("Tinkerbell", "fairy");
Tinkerbell.assist();
//answer: Tinkerbell is a fairy assisting the adventurer.

// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
let Robin = new Adventurer('Robin','adventurer');
let Leo = new Companion('Leo', 'cat');
let Frank = new Companion ('Frank', 'flea');



//Part 4: Class Uniforms
//added to the Character and Adventurer class
