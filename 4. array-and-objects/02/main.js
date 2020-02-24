var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred];

console.log(penguins[0]);





var secondPenguin = ramon;

console.log(secondPenguin.name);

// last penguin name 
console.log(penguins[length - 1].name);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

function sayHello() {
  console.log(penguins[0])
}

for (i = 0; i <= penguins.length; i++) {
  console.log(`${penguins[i].name}`)
}

function sayHello() {
  for (i = 0; i <= penguins.length; i++) {
    console.log(`${penguins[i].name}`);
  }
}

for (i = 0; i <= penguins.length; i++) {
  var newProp = penguins[i].numberOfFeet = 2;
  console.log(newProp)
}


for (i = 0; i <= penguins.length; i++) {
  if (penguins[i].canFly == true) {
    console.log(`${penguins[i].name} can Fly`)
  }
}