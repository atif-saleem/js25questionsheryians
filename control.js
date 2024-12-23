//1
// function fruits(){
//     console.log(name);
//     console.log(age);
//     var name='atif';
//     let age=25
// }
// fruits();
//hoisting apply here in case of let print undefined becuase it not follow hoisting
//2
// for(var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1)

// }
//var is globally scoped so i=3 in all cases
//3
// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1)
// }
//let i is block in braces scop so output is 1 2 3
//4
// console.warn(+true);
// console.warn(typeof +true)
//the output will be one and it print 1 and type number implicity conversion
//5
// console.warn(!"atif");
// console.warn(typeof("atif"));
//negation convert it false in next case type string if we have !!'atif'ans true
//6
// let data="sizes";
// const bird={
//     size:'small'
//     ,sizes:'big'
// }
// console.log(bird[data]);//go to data=sizes=big
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);
//yaha ham as refrence wala method us kar rahe hai [data]='size'=small
//two way access object kes like obj.key,obj['key'] but we cannot directly
//call varible object.variable like obj[variable]
//7
// let c={name:'piter'};
// let d;
//  d=c;
//  c.name="atif";
//  console.warn(c);
//  console.warn(d);
//due to copy of refrence type the change in one change in other due to refrnce
//8
// var x;
// var x = 10;
// console.log(x);
//the output will be 10 because var can be re declare but let not
//9
// var x;
// let x;
// console.log(x);
//this will give error like x with var have global scop and with let cannot redeclare
//although it in in case of another scop () => {
//   let x = 10;
// };
//10
// let a = 10;
// let b = new Number(10);
// console.log(a == b);
// console.log(a === b);
//in the first case it will give true because it compare 3==3 in second false one type
//is obj ===number
//11
// let name;
// let nmae = {};
// console.log(name);
//no matter we call the name correct spelled
//12
// function fruits() {
//   console.log("apple");
// }
// fruits.name = "bnanan";
// fruits();
//no metter we giving any value to the fruits function it not give error and print apple
//13
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));
//the output will be 12 due to string but in a++b first b will convert into number implicitly
//14
// let number = 0;
// console.log(number++);//0
// console.log(++number);//2
// console.log(number);//2
//15
// function getage(...args) {
//   console.log(typeof args);
//   console.log(args);
// }
// getage(21);
//this will give array but type is object
//16
// function getage() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }
// getage(21);
//yaha sara kam strict ka hai es laye strictly fully rule when declare
//17
// const sum = eval("10*10+5");
// console.log(sum);
//eval function string ke andar wale value ko eval kartaa hai
//18
/* how long is accseible cool_secret
it is accesible in different tabs like login facebook one tab then next tab facebook open
data not lose as browser close
sessionstorage.setItem
its also close as the tab or window close data loss storing apply info access only that tab
*/
//19
// const obj={1:'a',2:'b'}
// console.log(obj.hasOwnProperty(1));
// console.log(obj.hasOwnProperty('1'));
//in both the output will true because string also checked as number
//20
// const obj = { a: "ali", b: "akbar", a: "atif" };
// console.log(obj);
//then the values of a will override store atif but postion of a wil the first one
//21
// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
//the output is 0124 for three if run
//22
// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second"));
// const buz = () => console.log("third");
// bar();
// foo();
// buz();
//first third and second bcusae bar has settimeout so it run lass
//23
//div onclick='console.log('first div')'
//div onclick='console.log('second div')'
//button onclick="console.log('button')">clicked</button>
//when we click on button it will give booble inside to outside
//output it buuton the second then first
//24
// const person = { name: "linda" };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
//in the second case it will return a function
//25
// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi());
//output will be number becuase arrow function return 0 which is a number
//26
// function sayHi() {
//   return () => 0;
// }
// console.log(typeof sayHi());
//the outputs function because it now returning arrow function no iffy
//27
// console.log(typeof typeof 1);
// ans string first typeof 1 =number the number is a string
//28
// const number = [1, 2, 3, 4, 5];
// number[9] = 11;
// console.log(number);
//index 5 to 11 8 is empty prints in array
//29
// const number = [1, 2, 3, 4, 5];
// number[6] = number;
// console.log(number);
//the outputs is array at 6 index expand array expand array
//30
//everything in js either a
/*primitive or Object ans
function or object
numbers or object
tricky question or object*/
//31
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
//false false true but if 'str'=true ! to false the !!true
//! change the satuation
//32
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
//the output has 1 2 3 then hihihihihi 123 is id unque to stop it
//33
// console.log([..."anil"]);
// this will destruct the array or string into the minimul part
//34

// let data = 25 + 4 + "5";
// console.log(data);
//this will solve the equation from left to the right and output will be 295
//35
// console.log(typeof 25 + 4 + "5");
// the output is from 25 to number from left then add 45 the output is number45
//36
// console.log(typeof (25 + 4 + +"5"));
//the output will give the answer as number like +5 convert to 5 if one pluse 25 + 4 + "5"then
// the output will be string 295 add string to him
// 37
// console.log(typeof []);//we cnannot compare them because of different memory location
//38
// let data = [1, 2, 3, 4].map(function (num) {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(data);
//all the array inexex have number on it so all if true and we returning notinhg output will be udefined
//39
// function getInfo(person) {
//   person.name = "ali";
// }
// const person = { name: "atif" };
// getInfo(person);
// console.log(person);
//the output will ali bceauseobject is passsed by refrences so get info functon change the value
//of the name person to ali
// //40
// function car() {
//   this.make = "tata";
//   return { make: "kia" };
// }
// const car2 = new car();
// console.log(car2.make);
//the output is kia because when we are returning withe the same name then values will override
//44

// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);
//if print x then not defined nhi to type undefined

// (() => {
//   let x = (y = 20);
//   z = 10;
// })();
// console.log(y);
// console.log(z);
//type of not defined is undefined but in this output is 20 and 10 due to glabally scop
//45
// (() => {
//   let x = (y = 20);
//   z = 10;
//   console.log(x);
// })();
// console.log(typeof y);
//becuse it has gloal scop and value is 20 wich is equal to number x=20,number
//46
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();
// counter();
// counter();
// the output is 1 2 3 4 every time count increase value return by inner function
//47
// console.log(0 == false);
// console.log(0 === false);
// Answer: true, false. == allows type coercion; === does not
//48
// console.log([] == []);
// console.log([] === []);
//rturn false due to different memory location
//49
// console.log(typeof null);
// Answer: "object". This is a historical bug in JavaScript.
//50
// console.log(1 + "2" + 3);
// Answer: "123". Numbers are coerced into strings when concatenated with a
//51
// console.log([..."hello"]);
// Answer: ['h', 'e', 'l', 'l', 'o']. The spread operator splits a string into its characters.
//52
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}`);
//   }
//   greet();
//Answer: "Hello, Guest". Default parameters are used when no argument is provided
//53
// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
//   }
//   console.log(sum(1, 2, 3, 4));
//10 is output
//54
// const obj = {
//     value: 42,
//     method() {
//       console.log(this.value);
//     },
//   };
//   obj.method();
//Answer: 42. Inside methods, this refers to the object.
//55
// const [a, b] = [1, 2, 3];
// console.log(a, b);
//Answer: 1, 2. Only the first two elements are destructured.

//56
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);
//the output is 1 2
//57
// const obj = { a: { b: 2 } };
// console.log(obj?.a?.b);
// console.log(obj?.c?.d);
//Answer: 2, undefined. Optional chaining prevents errors when accessing nested properties.
//58
// const arr = [1, 2, 3];
// const result = arr.map(x => x * 2);
// console.log(result);
//[2 4 6]
//59
// const arr = [1, 2, 3, 4];
// const result = arr.filter(x => x % 2 === 0);
// console.log(result);
//[2 4]
//60
// Promise.resolve("Success").then(console.log);//output success
//61
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => console.log(x));
//ans 2
// Promise.reject("Error")
//   .catch(console.log)
//   .then(() => console.log("Handled"));
//Answer: "Error", "Handled".
//62
// async function test() {
//     return "Hello";
//   }
//   test().then(console.log);
//output hello
//63
// async function test() {
//   const promise = new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
//   console.log(await promise);
// }
// test();
//waite untill the promise resolves
