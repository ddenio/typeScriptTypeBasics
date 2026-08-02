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
//Challenge: try to figure out how to move the nested address object type
//into a seperate type definition. When done correclty, there should be no more
//red errors in the editor

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  //adding in nested Object types
  address?: Address;
};

let person1: Persons = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2: Persons = {
  name: "Jill",
  age: 66,
  isStudent: false,
  // address: {
  //   street: "123 Main",
  //   city: "anytown",
  //   country: "USA",
  // },
};

// function displayInfo(person: Person) {
//   console.log(`${person.name} lives at ${person.address?.street}`);
// }

//displayInfo(person1);

//typing Arrays

let ages: number[] = [100, 101];

type Persons = {
  name: string;
  age: number;
  isStudent: boolean;
};

/**
 *  Challenge: Create an array of people objects and
 * manually type it as an array of Person types
 *
 */

let people: Persons[] = [person1, person2];

//addition syntax:
// let people: Array<Persons> = [person1, person2]
