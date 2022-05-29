/*Завдання 1:

Необхідно зробити наступні дії з файлом homework.html за допомогою JS. Запропонувати користувачу вибрати стиль для сторінки. А саме:
— фон для сторінки
— тип шрифта на сторінці
— вирівнювання для заголовка h1
— фон для параграфа з посиланнями
— колір тексту у параграфі з посиланнями і для самих посилань. При чому колір тексту для посилань призначити у циклі
— колір, розмір, товщину тексту у елементі div
— тип маркера для маркованого списку на сторінці
Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх. Ці дані вводимо в кожен окремий prompt().
ДОДАТОК ДО ЗАВДАННЯ: замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти, які вкаже користувач
Наприклад користувач у вікно prompt() ввів адресу football24.ua, в такому разі треба створити посилання, яке веде на сайт football24, а текстом цього посилання(тим, по чому можна клікнути) буде також football24.ua.
*/


let fon = document.body;
fon.style.backgroundColor =prompt('введіть колір фону сторінки');
fon.style.fontSize = prompt('введіть розмір шрифта в px');

let page = document.body.getElementsByTagName("h1"[0]);
page.texstAlign = prompt("poзмістіть ваш заголовок")
console.log(page);

document.getElementsByTagName('p')[0].style.backgroundColor = prompt('.Яким зробимо фон для параграфа з посиланням?');
let links = document.getElementsByTagName('a'); 
for (let i=0; i<links.length; i++) { 
    links[i].style.color = prompt(`Посиланння ${i+1} розфарбуємо у:`); 
}
console.log(ll);


document.querySelector("div").style.color = prompt("Виберіть колір тексту");
document.querySelector("div").style.fontSize = prompt("виберіть розмір тексту у улементі...рх");
document.querySelector("div").style.fontWeight = prompt("виберіть товщину ..lighter,normal,bolt..")

document.querySelector("li").style.listStyle= prompt("виберіть маркер...circlе disc square")