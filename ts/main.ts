//TypeScript infurs here that 'myName' is a string/automatically figured out the data type / set the data type.
//let myName = "Bob";
//Can't reassign myName to a number Type, as typeScript infured that 'myname' is a string type
//myName = 4;

//Let's manually give 'myName' a string type:
let myName: string = "Bob";

//Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let numberOfWheels: number = 4;
let isStudent: boolean = false;

//Defining Custom Types
type Food = string;

let favoriteFood: Food = "pizza";

//Custom Types with Objects

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
};
