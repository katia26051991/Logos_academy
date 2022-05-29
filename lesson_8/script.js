/*Завдання 1:
— Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.
*/
let text = prompt();
for( let i = 0; i <text.length; i++)
if(text.charAt(i) == " "){
    console.log("пробіл знаходиться на ", i , "позиції");
}

/*
👉 Завдання 2
— Користувач вводить email. Потрібно перевірити дані на правильність введення. Правильно введений email - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.
— Приклад правильно введених даних:
student@ukr.net
— Приклад не правильно введених даних:
@student.ukr.net
student.ukr.net@
student.ukr.net
*/

let str = prompt("Введіть електронну пошту");
for (let i = 0; i < str.length; i++) {
    if (str.indexOf("@") == -1) {
        console.log("incorrect email");
    }
    else if ((str[0] == "@") || (str[str.length - 1] == "@")) {
        console.log("incorrect email");
    } else {
        console.log("correct email :", str);
    }
}
 /*
👉 Завдання 3:
— Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
— Приклад роботи:
Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
*/
let str1 = "Text html javascript html css html html"
let start = 0;
let find = "html";
let count = 0;
while (true) {
    let position = str1.indexOf("html", start);
    if (position === -1) break;
    find += position + ' ';
    count++;
    start = position + 1;
}
console.log(find,"count of html =", `${count}`)
/*
👉 Завдання 4:
— Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
— Приклад роботи:
Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.
*/
let web = prompt();
for (let i = 0; i < web.length; i++) {
    if (web.indexOf("http://")) {
        console.log(web.slice(8,))
    };
    if (web.indexOf("https://")) {
        console.log(web.slice(9,))
    }
}