/*Завдання 1:
— Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
1. Користувач вводить число в prompt
2. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.
/*
//Exercise_1
let number = +prompt("enter the number")
switch (number) {
    case 1:
    case 2:
    case 12:
        alert("Winter")
        break;
    case 3:
    case 4:
    case 5:
        alert("Spring")
        break;
    case 6:
    case 7:
    case 8:
        alert("Summer")
        break;
    case 9:
    case 10:
    case 11:
        alert("Summer")
        break;
    default: alert("It is impossible")
        break;
};

Завдання 2:
— Написати розв’язок нижче описаного завдання за допомогою function declaration:
1. Створити функцію яка буде приймати одне число.
2. В середині функції перевіряємо чи це число є простим.
3. Після перевірки виводимо повідомлення в console.log().

//Exercise_2
let resolution = true;
function oneNumber(a) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            resolution = false;
            break;
        }
    }
}
oneNumber(7);
console.log(resolution);

/*Завдання 3:
— Написати розв’язок нижче описаного завдання за допомогою function declaration:
1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
2. Кількість параметрів у функції може бути від 2х і більше.
3. Забороняється використовувати Math.max().
— Приклад роботи:
1. max(5,-2) – має повернути 5.
2. max(5,-2, 30, 6) – має повернути 30
*/
//Exercise_3
function f_2(...arguments) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        };
    };
    return max
};
console.log(f_2( 7, 10, 1,9,80));

