function log(any: any): void {
  return console.log(any);
}
// function multiply(a: number, b: number) {
//   return a * b;
// }
// log(multiply(2, 3));

// // Array
// let fruits = ["apple", "mango", "orange"];
// fruits.push(1)
// let mixed = [1, "Nahid", true ,{}];
// mixed.push(1);
// mixed.push({
//   name:'Nahid'
// })

// // Object
// let person = {
//   name:'Nahid',
//   class:12,
//   isCoder:true,
// }
// person.name = 'Nahid Hassan';

// // Explicit & Union Types
// let a: string;
// let b: number;
// array
// let a: (string | number)[] = [];
// a.push('Nahid', 4 , true);
// let b: string | number;
// b = "Nahid";
// b = 1;
// object
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

// // function
// const myFunc = (a: string, b: string, c?: string) => {
//   log(`Hello ${a} ${b}`);
// };
// myFunc("world", '!');

// type aliases
type stringOrNumber = string | number;
type userType = { name: string; password?: stringOrNumber; age: number };
const userDetails = (id: stringOrNumber, user: userType) => {
  log(`User id id ${id} , name is ${user.name} & age is ${user.age}`);
};

const sayHello = (user: userType) => {
  log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
