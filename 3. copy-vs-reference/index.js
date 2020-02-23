// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x; // 10
var b = y; // "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x; //10
var b = y; // "abc"
a = 5; //5
b = "def"; //"def"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
// Both are same with 1,2
// Value of obj

var obj = { name: "ryan" };
obj = { surname: "florance" };

//in last It use obj 

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

//True

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);
// false becouse Address in different

//What's the output
console.log([10] === [10]);
// false becouse Address in different

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};

var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
// show the value of personObj1
console.log(personObj2); // -> ?
// show the value of personObj1

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
//false

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); //10
console.log(b); // 5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); //1
console.log(b); //{}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);
//false

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {};

// clone = person

// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};
// Output of the below code and why?
user.house === user2.house; // output: false
user.house == user2.house; // output: false
user.brothers === user2.brothers; // output: false
user.brothers == user2.brothers; // output: false
user.name == user2.name; // output: false
user.name === user2.name; // output: false
user.brothers == user3.brothers; // output: false
user.brothers === user3.brothers; // output: false
user.house === user2.house; // output false
user.house === user3.house; // output false
user.brothers[0] === user2.brothers[0]; // output false
user.brothers[0] === user3.brothers[0]; // output false
