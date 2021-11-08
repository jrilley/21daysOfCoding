// /* ---Syntax--- */

// // let user = new Object(); // "object constructor" syntax
// // let user2 = {}; // "object literal" syntax

// /* ---Literals and properties--- */

// let user = {
//     name: "John",
//     age: 42
// };

// // Property values are accesible using the dot notation
// console.log(user.name); // John

// // The value can be of any type. Let's add a boolean value
// user.isAdmin = true;

// console.log(user.isAdmin);

// // Remove property
// delete user.isAdmin;

// /* ---Square brackets--- */
// user["like birds"] = false;

// console.log(user["like birds"]);

// let key = "Language";

// // same as user["Language"] = "English";
// user[key] = "English";

// // The dot notation cannot be used simmilar way
// let k = "isProgrammer";
// console.log(user.k); // undefined

// /* ---Computed properties--- */

// let fruit = "Apple";

// let bag = {
//     [fruit]: 5,
// }

// console.log(bag.Apple);
// // The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit
// // We can use more complex expressions inside square brackets

// let frt = "apple";

// let bag2 = {
//     [frt + "Computers"]: 2,
// }

// console.log(bag2.appleComputers);

// /* ---Property values shorthand */
// const makeUser = (user, age) => {
//     return {
//         user, // same as user: user
//         age, // same as age: age
//     };
// }

// let shorthand = makeUser("Anton", 20);
// console.log(shorthand.user);

// /* ---Property exsistence test, "in" operator */

// let someObj = {
//     name: "Anton",
//     age: 20,
// }

// console.log("age" in someObj); // true

// /* ---The "for...in" loop */

// for(key in someObj) {
//     console.log(key);
//     console.log(someObj[key]);
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//     for(let key in obj) {
//         return false;
//     }

//     return true;
// }

// console.log(isEmpty(user));

// let salaries = {
//     Ann: 100,
//     Mike: 160,
//     John: 130,
//     Tony: 100
// }

// function summary(obj) {
//     let summ = 0;
//     if (isEmpty(obj)) summ = 0;

//     for(let key in obj) {
//         summ += obj[key];
//     }

//     return summ;
// }
// console.log(summary(salaries));


// function multiplineNumberic(obj) {
//     if (isEmpty(obj)) return;

//     for (let key in obj) {
//         if (typeof obj[key] == 'string') continue;

//         obj[key] *= 2;
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplineNumberic(menu)

// for (let key in menu) {
//     console.log(`${key}: ${menu[key]}`);
// }

// let user = {
//     name: "Ann"
// }

// let admin = user;

// admin.name = "Anton";

// console.log(user.name);

// let user2 = {
//     name: "Anton"
// }

// let permission = {
//     allowDownload: true
// }

// let permission2 = {
//     keepSave: true
// }

// Object.assign(user2, permission, permission2);

// for(let key in user2) {
//     console.log(`${key}: ${user2[key]}`);
// }

// const user = {
//     name: "Anton",
//     age: 20,
//     sizes: {
//         width: 50,
//         height: 165
//     }
// };

// user.name = "Pete";

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// const marry = (man, woman) => {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman
//     };
// }

// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });

// let user = {name: "Anton"};
// let admin = {name: "Peret"};

// function sayName() {
//     console.log(this.name);
// }

// user.f = sayName;
// admin.f = sayName;

// admin.f();

// let calculator = {
//     a: 0,
//     b: 0,
//     read() {
//         this.a = prompt("a: ", 0);
//         this.b = prompt("b: ", 0);
//     },
//     sum() {
//         return +this.a + +this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     }
// }

// ladder.up().up().up().down().showStep();

// function BigUser() {
//     this.name = "Joshua";

//     return;
// }

// console.log(new BigUser().name);

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// new User("Anton").sayHi();

// let obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;

// console.log(a == b); // true

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a: ", 0);
//         this.b = +prompt("b: ", 0);
//     }

//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator;
// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("How much to add?", 0);
    }
}

let accum = new Accumulator(0);

accum.read();
accum.read();

alert(accum.value);