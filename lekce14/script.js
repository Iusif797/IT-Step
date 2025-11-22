// let a = 1;

// // console.log(a, typeof(a))
// // console.log(Boolean(a), typeof Boolean(a));

// let b = 1;
// console.log(a < b) // true
// console.log(a > b) // false

// console.log("hello" > "halex");

// console.log("$" == 1); // false
// console.log("$" !== 1); // true

// console.log(!false); // true
// console.log("5" !== 53); // true

// console.log("1" === 1) // false

// console.log("" === true); // false
// console.log(" " == false);  // true

// console.log(typeof true);

// console.log("" === 0); // false - type coercion doesn't happen here
// console.log((Number(" ")));

// //== -  не строгое сравнение
// // === - строгое сравнение
// // != - не строгое неравенство
// // !== - строгое неравенство

// console.log("5" != 5);

let a = 15;
let b = 32;

if (a >= b) {
  console.log("Переменная а больше b");
}

console.log("Good buy!");



let userName = prompt("Enter your name");
let password = prompt("Enter your password"); 

if (userName === "alexVin") {
    if (password === "12345") {
        console.log("Welcome!");
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid username");
}




