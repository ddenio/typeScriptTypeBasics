let nextUserId = 1;

type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
  { id: nextUserId++, username: "alice_jones", role: "admin" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: any): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  //Create a new variable called 'user', add an 'id' property to it
  // and spread in all the properties of the 'newUser' object. Thnk
  //about how you should set the type for this 'user object.
  //Push the new object to the 'users' array, and rreturn the object
  //from the fucntion at the end
  return user;
}

//example usage:
addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
