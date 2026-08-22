const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

//Here array has an "any" implicit type, remember TS doesnt like when we have any types.
//we can't say this an array of strings, or numbers, since the three global arrays above are all different types
// function getLastItem(array){
//     return array[array.length-1]
// }

//This is where Generics come in to play, allow us to add a placeholder for whatever a type is going to be.
//convention is using "T" for type, but we add anything here, as long as we are consisting, we will have "PlaceholderType" in this example
function getLastItem<PlaceholderType>(array: PlaceholderType[]) {
  return array[array.length - 1];
}

/**
 * Mini-Challenge: call 'getLastItem' (and console.log the returned values)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
