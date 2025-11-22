
let city = "Prague";
document.body.innerHTML = "<h1>Мой город: " + city + "</h1>";


let age = 25;
document.body.innerHTML += "<p>Тип данных переменной age: " + typeof(age) + "</p>";


let userName = prompt("Введите своё имя:");
document.body.innerHTML += "<p>Привет, " + userName + "!</p>";


let isContinue = confirm("Хотите продолжить?");
document.body.innerHTML += "<p>Пользователь хочет продолжить: " + isContinue + "</p>";


let userName2 = prompt("Введите ваше имя:");
let confirmation = confirm("Подтвердите действие");
document.body.innerHTML += "<hr><h2>Комбинация всех действий:</h2>";
document.body.innerHTML += "<p>Привет, " + userName2 + "!</p>";
document.body.innerHTML += "<p>Результат подтверждения: " + confirmation + "</p>";

// ============================================
// Старый код 
// ============================================

// Альтернативный вариант с шаблонными строками (более современный способ):
// document.body.innerHTML = `<h1>Мой город: ${city}</h1>`;

// let a = 15;
// a = 17;
// a = 1;

// console.log(a);

// const pi = 3.14;
// const API_URL = 'https://api.example.com';

// pi = 15; // error
// console.log(pi);

// let = a = 'Hello World!';
// console.log(typeof(a)); //string
// console.log(typeof(5)); //number 
// console.log(typeof(5.595959)); //number 

// confirm("do you want to delete this file?");
// prompt("enter your name");

// let a = 15;
// let b = 10;
// let c = a + b;
// console.log(c);

// document.body.innerHTML = a;
// alert(a);

// var b = 10;
// b = 15;
// console.log(b);
