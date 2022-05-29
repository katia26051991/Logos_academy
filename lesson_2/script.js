/*
Завдання 1:
— Написати тест на довільну тему з 10-ти питань. Якщо користувач відповідає вірно додаємо бал. Якщо відповідає не вірно тоді нічого не робимо. В кінці виводимо статистику про кількість правильних відповідей з можливих 10. І повідомлення для користувача про рівень знань відносно набраних балів.
*/
//Exercise_1

let count = 0;
console.log('Count =', count);
let ask = prompt('What names of the capital of Ukraine?');
 if (ask === 'Kyiv') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_1 = prompt('What names of the cultural capital of Ukraine?');
if(ask_1 === 'Lviv') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_2 = prompt('What names of the capital of Turkey?');
if (ask_2 === 'Ankara') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_3 = prompt('What names of the capital of Sweden?');
if(ask_3 === 'Stockholm') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_4 = prompt('What names of the capital of Spain?');
if(ask_4 === 'Madrid') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_5 = prompt('What names of the capital of Sweden?');
if(ask_5 === 'Stockholm') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_6 = prompt('What names of the capital of Italy?');
if(ask_6 === 'Rome') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_7 = prompt('What names of the capital of Germany?');
if(ask_7 === 'Berlin') {
    console.log('correct');
    count++
}
console.log('Count =', count);
let ask_8 = prompt('What names of the capital of France?');
if(ask_8 === 'Paris') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
let ask_9 = prompt('What names of the capital of Canada?');
if(ask_9 === 'Ottawa') {
    console.log('correct');
    count++;
}
console.log('Count =', count);
alert (`Your count is + ${count}`);
if (count <= 4) {
    console.log('bad answer');
}
else if (4 < count < 7) {
    console.log('not bad');
}
else {
    console.log('ok')
}
/*
Завдання 2:
— Якщо користувач вводить «Ім’я», то питати пароль, якщо натиснув скасувати(escape) - виводити «Вхід скасований», якщо вводить щось інше - «Я вас не знаю». 
Пароль перевіряти так. Якщо введений пароль «ЛОГОС», то виводити «Ласкаво просимо!», Інакше - «Пароль невірний», при скасуванні - «Вхід скасований».
*/
//Exercise_2

let message = prompt("write your name");
if (message) {
let answer = prompt('enter your password')
    if (answer == "Logos"){
        alert("Wellcome!")
        }
        else if (answer == null) {
            alert("entry canceled")
        }
        else {
            alert( "incorrect password")
        };
}
else if (message == null) {
    alert("entry canceled")
    }
    else {
        alert( "I don't know you")
    }

/*
Завдання 3:
— Написати програму яка видає користувачу ввести число. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач. Якщо число не входить в діапазон від 1 до 12 тоді неможливо.
*/
//Exercise_3
let season = prompt("Enter the number");
if (season == 12 || season == 1 || season == 2) {
    alert("that is winter")
}
else if (season == 3 || season == 4 || season == 5 ) {
    alert("that is spring")
}
else if (season == 6 || season == 7 || season == 8 ) {
    alert("that is summer")
}
else if (season == 9 || season == 10 || season == 11) { 
    alert("that is autumn")
}
 else {
     alert("it is impossible")
 }   
 
