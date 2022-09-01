console.log("Hello world");

var name = "Jane";
let isOnline = true;
let age;
age = 20;

age = "20";

const black = "black";

if (isOnline) {
  let n = 10;
}
// console.log(n);

for (var i = 0; i < 20; i++) {}

console.log(i);

if (isOnline) {
  var n1 = 10;
  var n1 = 11;
}

function sayHello() {
  console.log("Hello world");
}

sayHello();

const sayHello1 = function () {
  console.log("Hello world");
};

sayHello1();

const sayHello2 = () => {
  console.log("Hello world");
};

const getNumber = () => 10;

sayHello2();
console.log(getNumber());

let student1 = "Andrei";
let student2 = student1;

student1 = "Maria";

console.log(student1, student2);

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr1.push(4);
console.log(arr1, arr2);

const person = {
  name: "Jane",
  age: 20,
  "person-address": "Bucharest",
};

let property;

if (true) {
  property = "name";
}

console.log(
  person["person-address"],
  person.age,
  person[property],
  person["age"]
);

person.name = "Joe";

const person1 = person;
console.log(person, person1);

const numbers = [1, 2, 3, 4, 5];
const numbersCopy = [0, ...numbers, 6]; // => [numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]]

const object = {
  key1: "value1",
  key2: "value2",
};

const copyObject = { ...object, key3: "value3" }; //=> {key1: value1, key2: value2}

console.log("abc" / 2);
