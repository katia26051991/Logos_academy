/*👉 Завдання 1:
— Напишіть функцію getArea(number), яка обчислює площу круга. Для визначення площі використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
- Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
- Якщо передали не число - Повинно бути числове значення.
- Якщо в функцію нічого не передали - Будь ласка, введіть радіус!
*/
let result;
let number = prompt("number");
function getArea() {
    return Math.pow(number, 2) * Math.PI;
}
result = getArea();
if (isFinite(number)) {
    alert(`Площа дорівнює ${result} квадратних одиниць`)
} else if (number == '') {
    alert("Будь ласка, введіть радіус")
}
else {
    alert("Повинно бути числове значення")
}
getArea(number);
/*
👉 Завдання 2
— Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
- Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
- Якщо передали не число - Повинно бути числове значення.
- Якщо число менше 0 - Введіть додатнє число.
- Якщо в функцію нічого не передали - Будь ласка, введіть число!
*/
let res;
let number_1 = prompt("number")
function getSqrt(number_1) {
    return Math.sqrt(number_1)
}
res = getSqrt(number_1);
if ((isFinite(number_1)) > 0) {
    alert(`Квадратний корінь з ${number_1} = ${res}`)
} else if ((isFinite(number_1)) < 0) {
    alert("Введіть додатнє число");
}
else if (number_1 == "undefined") {
    alert("Будь ласка, введіть число!");
}
else alert("Повинно бути числове значення");
getSqrt(number_1)
/*
👉 Завдання
— Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:
- MyMath.PI – це властивість яка має повертати число Pi.
- MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
- MyMath.abs(number) – це метод який має повертати модулю числа.
- MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.
- MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.
Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
- Якщо передали не число - Повинно бути числове значення.
- Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
При створенні цих методів використання об’єкту Math заборонене!
*/
let MyMath = {};
MyMath.PI = function PI() {
    console.log("PI: 3,14")
};
MyMath.pow = function (number_3, degree) {
    let result_2 = 1
    for (let i = 1; i <= degree; i++) {
        result_2 *= number_3;
    };
    console.log(result_2)
    if ((number_3.isNaN) || (degree.isNaN)) {
        console.log("Повинно бути числове значення")
    }
    else if ((number_3 == "undefined") || (degree == "undefined")) {
        console.log("введіть число")
    }
};
MyMath.abs = function abs(number_4) {
    let b;
    if (number_4 < 0) {
        b = -number_4;
    }
    if (number_4.isNaN) {
        console.log("Повинно бути числове значення")
    }
    else if (number_4 == "undefined") {
        console.log("введіть число")
    }
    else
        return b
};
MyMath.max = function f_1(...arguments) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        };
    };
    if (arguments.isNaN) {
        console.log("Повинно бути числове значення")
    }
    else if (arguments == "undefined") {
        console.log("введіть числa")
    }
    else
        return max
};
MyMath.min = function f_2(...arguments) {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        };
    };
    if (arguments.isNaN) {
        console.log("Повинно бути числове значення")
    }
    else if (arguments == "undefined") {
        console.log("введіть числa")
    }
    else
        return min
};
console.log(MyMath);
console.log('PI:', MyMath.PI());
console.log('pow:', MyMath.pow(4, 2));
console.log('abs:', MyMath.abs(-6));
console.log('max:', MyMath.max(7, 10, 1, 9, 80));
console.log('min:', MyMath.min(7, 10, 1, 9, 80));


