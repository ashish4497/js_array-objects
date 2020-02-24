var garment = {
  hat: "baseball cap",
  shirt: " Hawaiian shirt",
  pants: "cargo shorts",
  shoes: " flip-flops"
}
penguins.ourFit = garment;

var penguinHatType = garment.hat;
console.log(penguinHatType);

penguins.ourFit["accessory"] = "pocket watch";

penguins.ourFit.hat = "top hat";

delete penguins.ourFit.pants;

for (let value in penguins.ourFit) {
  console.log(`${value}: ${penguins.ourFit[value]}`);
}
