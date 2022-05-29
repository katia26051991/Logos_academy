/* Завдання 1:
Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
— Створіть порожній об'єкт person.
— Додайте властивість firstName зі значенням Ivan.
— Додайте властивість secondName зі значенням Ivanov.
— Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
— Скопіюйте об'єкт person в об'єкт newPerson.
— Поміняйте в newPerson властивість firstName на Petro.
— Поміняйте в newPerson властивість secondName на Petriv.
— Запустіть метод showData з person і newPerson, результат має бути наступним:
person.showData() – має повернути Ivan Ivanov
newPerson.showData() – має повернути Petro Petriv
*/

let person = {};
person.firstName = "Ivan";
person.secondName = "Ivanov"
person.showData = function () {
    console.log("ім*я: " + person.firstName + " прізвище: " + person.secondName)
}
person.showData();
/* 1ий спосіб
let newPerson = {};
/*for (const key in person) {
    newPerson[key] = person[key];
}

newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
console.log("person", person);
console.log("newPerson", newPerson);
newPerson.showData();
person.showData();
2ий спосіб*/
let newPerson = Object.assign({}, person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
console.log("person", person);
console.log("newPerson", newPerson);
newPerson.showData();
person.showData();

/* Завдання 2:
Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
— Створіть порожній об'єкт MyMath.
— Cтворіть властивість a зі значенням 5.
— Cтворіть властивість b зі значенням 2.
— Створіть 4 методи які будуть робити наступне:
sum – обчислює суму a+b та повертає значення console.log().
multiplication – обчислює множення a*b та повертає значення console.log().
division – обчислює ділення a/b та повертає значення console.log().
subtraction – обчислює віднімання a-b та повертає значення console.log().
— Запустіть кожен з цих методів, результат має бути наступним:
MyMath.sum() – має повернути 5 + 2 = 7
MyMath.multiplication() – має повернути 5 * 2 = 10
MyMath.division() – має повернути 5 / 2 = 2.5
MyMath.subtraction() – має повернути 5 - 2 = 3
*/
let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function () {
    console.log(MyMath.a + MyMath.b)
}
MyMath.multiplication = function () {
    console.log(MyMath.a * MyMath.b)
}
MyMath.division = function () {
    console.log(MyMath.a / MyMath.b)
}
MyMath.subtraction = function () {
    console.log(MyMath.a - MyMath.b)
}
MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.subtraction()



