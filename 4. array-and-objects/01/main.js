var penguin = {
  favoriteFood: ["cookies", "bread", "seaFood"]
}

console.log(`${penguin.favoriteFood[0]}`);

var firstFavFood = penguin.favoriteFood[0];
penguin.favoriteFood.push("pizza");
console.log(penguin.favoriteFood.length);

var lastFavFood = penguin.favoriteFood.length - 1;
console.log(penguin.favoriteFood[lastFavFood]);

for (i = 0; i <= penguin.favoriteFood.length; i++) {
  console.log(`${penguin.favoriteFood[i]}`)
}