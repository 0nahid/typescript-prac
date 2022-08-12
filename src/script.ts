// function log(any: any): void {
//   return console.log(any);
// }
// // function multiply(a: number, b: number) {
// //   return a * b;
// // }
// // log(multiply(2, 3));

// // // Array
// // let fruits = ["apple", "mango", "orange"];
// // fruits.push(1)
// // let mixed = [1, "Nahid", true ,{}];
// // mixed.push(1);
// // mixed.push({
// //   name:'Nahid'
// // })

// // // Object
// // let person = {
// //   name:'Nahid',
// //   class:12,
// //   isCoder:true,
// // }
// // person.name = 'Nahid Hassan';

// // // Explicit & Union Types
// // let a: string;
// // let b: number;
// // array
// // let a: (string | number)[] = [];
// // a.push('Nahid', 4 , true);
// // let b: string | number;
// // b = "Nahid";
// // b = 1;
// // object
// let c: {
//   name: string;
//   age: number;
//   adult: boolean;
// };
// c = {
//   name: "Nahid",
//   age: 4,
//   adult: true,
// };

// // type aliases
// type stringOrNumber = string | number;
// type userType = { name: string; password?: stringOrNumber; age: number };
// const userDetails = (id: stringOrNumber, user: userType) => {
//   log(`User id id ${id} , name is ${user.name} & age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//   log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };

interface IPerson {
  name: string;
  age: number;
  adult: boolean;
  hobbies?: string[];
}
const person1: IPerson = {
  name: "Tamim",
  age: 22,
  adult: true,
  hobbies: ["Sleeping", "Reading"],
};
const person2: IPerson = {
  name: "Nahid",
  age: 4,
  adult: true,
  hobbies: ["Coding", "Cooking"],
};
// console.log(person1);
const personArray: IPerson[] = [person1, person2];
// console.log(personArray);

// type
type Person = {
  name: string;
  age: number;
  adult: boolean;
  hobbies: string[];
};
const person3: Person = {
  name: "Nahid",
  age: 4,
  adult: true,
  hobbies: ["Coding", "Cooking"],
};
const person4: Person = {
  name: "Nahid",
  age: 4,
  adult: true,
  hobbies: ["Coding", "Cooking"],
};
const personArray2: Person[] = [person3, person4];
// console.log(personArray2);

// Enums
enum Color {
  Red="#ff0000",
  Green="#00ff00",
  Blue="#0000ff",
};
const colorName: string = Color.Red;
// console.log(colorName);

// function
const toLowerCase = (str: string): string => {
  return str.toLowerCase();
};
// console.log(toLowerCase("NAHID"));
// console.log(toLowerCase("NAHID HASSAN"));


