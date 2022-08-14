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
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}
const colorName: string = Color.Red;
// console.log(colorName);

// function
const toLowerCase = (str: string): string => {
  return str.toLowerCase();
};
// console.log(toLowerCase("NAHID"));
// console.log(toLowerCase("NAHID HASSAN"));

type Cat = { meows: true };
type Dog = { barks: true };
type Cheetah = { meows: true; fast: true };
type Wolf = { barks: true; howls: true };
type Animal = Cat | Dog | Cheetah | Wolf;
const animal: Animal = { meows: true, barks: true };
// console.log(animal);

// Declaring a simple interface that has 2 public properties x and y
interface InputNumber {
  x: number;
  y: number;
  z: number;
}
// Declaring a function that takes an input of type InputNumber
const getLatestValue = (input: InputNumber): number => {
  // input.x > input.y ? input.x : input.y > input.z ? input.y : input.z;
  return input.x > input.y ? input.x : input.y > input.z ? input.y : input.z;
};
// console.log(getLatestValue({ x: 15, y: 2, z: .5 }));
// console.log(getLatestValue({ x: 1, y: 2, z: 3 }));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// fibonaaci
const fibonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// replace n with any number
// console.log(fibonacci(10));

// fizzbuzz with return type & while loop
const fizzBuzz = (n: number): string => {
  let result = "";
  while (n != 0) {
    if (n % 3 === 0) {
      result += "Fizz ";
    } else if (n % 5 === 0) {
      result += "Buzz ";
    } else if (n % 3 === 0 && n % 5 === 0) {
      result += "FizzBuzz ";
    } else {
      result += n + " ";
    }
    n--;
  }
  return result;
};
// console.log(fizzBuzz(15));
// fizzbuzz with return type & for loop
const fizzBuzz2 = (n: number): string => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      result += "Fizz ";``
    } else if (i % 5 === 0) {
      result += "Buzz ";
    } else if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz ";
    } else {
      result += i + " ";
    }
  }
  return result;
}
console.log(fizzBuzz2(15));

// function fizzbuzz(num: number): string | number {
//   if (num % 15 === 0) return 'FizzBuzz';
//   if (num % 5 === 0) return 'Buzz';
//   if (num % 3 === 0) return 'Fizz';
//   return num;
// }

// for (let i: number = 1; i <= 100; i++)
// console.log(fizzbuzz(i));

// const fizzbuzz = (num: number): string | number => {
//   if (num % 15 === 0) return 'FizzBuzz';
//   if (num % 5 === 0) return 'Buzz';
//   if (num % 3 === 0) return 'Fizz';
//   return num;
// }
// for (let i: number = 1; i <= 16; i++)
// // console.log(fizzbuzz(i));
