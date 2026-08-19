// //Utility types and Partial

// type User2 = {
//   id: number;
//   username: string;
//   role: "member" | "contributor" | "admin";
// };

// type UpdatedUser2 = Partial<User2>;

// const users2: User2[] = [
//   { id: 1, username: "john_doe", role: "member" },
//   { id: 2, username: "jane_smith", role: "contributor" },
//   { id: 3, username: "alice_jones", role: "admin" },
//   { id: 4, username: "charlie_brown", role: "member" },
// ];

// type Addable = number | string;

// function add<T extends Addable>(a: T, b: T): T {
//   if (typeof a === "string" || typeof b === "string") {
//     return (String(a) + String(b)) as T;
//   }
//   return ((a as number) + (b as number)) as T;
// }

// console.log(add(1, 2));

// console.log(add("taco", "burritto"));

// //T, or taco here means any type
// function echo(value: any) {
//   return value;
// }

// const apple = echo("fuji");
// const favNumber = echo(777);
// console.log(typeof favNumber);
// console.log(apple);

// function updateUser(id: number, updates: UpdatedUser2) {
//   //Find the user in the array by the id
//   const userDetail = users2.find((userObj) => userObj.id === id);
//   if (!userDetail) {
//     console.error("User not found!");
//     return;
//   }
//   //Use Object.assign to update the found user in place.
//   Object.assign(userDetail, updates);
//   //Check MDN if you need hlep with using Object.assign
// }

// //Example updates:
// updateUser(1, { username: "new_john_doe2" });
// updateUser(4, { role: "contributor" });

// console.log(users2);
