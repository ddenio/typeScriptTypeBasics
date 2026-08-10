// //TypeScript infurs here that 'myName' is a string/automatically figured out the data type / set the data type.
// //let myName = "Bob";
// //Can't reassign myName to a number Type, as typeScript infured that 'myname' is a string type
// //myName = 4;

// //Let's manually give 'myName' a string type:
// let myName: string = "Bob";

// //Primitive Data Types: string, number, boolean
// // Challenge: Explicitly type the variables below:

// let numberOfWheels: number = 4;
// let isStudent: boolean = false;

// //Defining Custom Types
// type Food = string;

// let favoriteFood: Food = "pizza";

// //Custom Types with Objects
// //Challenge: try to figure out how to move the nested address object type
// //into a seperate type definition. When done correclty, there should be no more
// //red errors in the editor

// type Address = {
//   street: string;
//   city: string;
//   country: string;
// };

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   //adding in nested Object types
//   address?: Address;
// };

// let person1: Persons = {
//   name: "Joe",
//   age: 42,
//   isStudent: true,
// };

// let person2: Persons = {
//   name: "Jill",
//   age: 66,
//   isStudent: false,
//   // address: {
//   //   street: "123 Main",
//   //   city: "anytown",
//   //   country: "USA",
//   // },
// };

// // function displayInfo(person: Person) {
// //   console.log(`${person.name} lives at ${person.address?.street}`);
// // }

// //displayInfo(person1);

// //typing Arrays

// let ages: number[] = [100, 101];

// type Persons = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// /**
//  *  Challenge: Create an array of people objects and
//  * manually type it as an array of Person types
//  *
//  */

// let people: Persons[] = [person1, person2];

// //addition syntax:
// // let people: Array<Persons> = [person1, person2]

//Literal Types
//here typescript infers myName to be a string
//let myName = "Bob";

//Here typescript infers myName2 as the literal string type "Bob"
//const myName2 = "Bob";
//can't reassign literal types,  which makes sense since its a const as well.

//can also write out like :    const myName2: "Bob" = "Bob"

//Unions!
//think of a boolean can ONLY be true OR false
//this says UserRole can ONLY be "guest", OR "member" OR "admin"

type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

//Function return types, we can specify which type of data should be returned from our function, here we specify that this function should always return a User object
function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  console.log(user);
  return user;
}

//fetchUserDetails("Jimmy");
fetchUserDetails("john_doe");
