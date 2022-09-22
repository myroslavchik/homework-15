
// Запитай у користувача його вік і визначи, ким він 
// є: дитиною (0-11), підлітком (12-17), дорослим (18_59)
//  або пенсіонером (60 ...),
//  передбач можливість введення невірних даних.


let olds = +prompt('Вкажіть ваш вік', '');

if (olds <= 11 && olds > 0) {
    alert('Ви дитина!');
} else if (olds >= 12 && olds <= 17) {
    alert('Ви підліток!');
} else if (olds >= 18 && olds <= 59) {
    alert('Ви дорослий!');
} else if (olds > 60 && olds < 140) {
    alert('Ви пенсіонер')
} else {
    alert('Неправильні дані');
}


// Запитай у користувача число від 0 до 9 і виведи йому
// спецсимвол, який розташований на цій клавіші
// (1 !, 2 @, 3 # і т. д).


let number = +prompt('Вкажіть число від 0 до 9');

if (number === 1) {
    alert('!')
} else if (number === 2) {
    alert('@')
} else if (number === 3) {
    alert('#')
} else if (number === 4) {
    alert('$')
} else if (number === 5) {
    alert('%')
} else if (number === 6) {
    alert('^')
} else if (number === 7) {
    alert('&')
} else if (number === 8) {
    alert('*')
} else if (number === 9) {
    alert('(')
} else {
    alert('Помилка')
}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let min = +prompt('Вкажіть перше число діапазону', '');
let max = +prompt('Вкажіть друге число діапазону', '');
let sum = 0;
for (let i = min; i <= max; i++) {
    sum += i;
}
alert('Сума чисел діапазону: ' + sum);


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let number1, number2, divider;
number1 = parseInt(prompt('Введіть перше число', ''));
number2 = parseInt(prompt('Введіть друге число', ''));
if (number1 > 0 && number2 > 0) {
for (let i = 1; i <= number1; i++) {
if ((number1 % i == 0) && (number2 % i == 0)) {
divider = i;
}
}
alert(`Найбільший спільний дільник чисел (${number1} і ${number2}) : ${divider}`);

}


// Запитай у користувача число і виведи всі дільники цього числа.


let = number = +prompt('Введіть число', '');
console.log(`Дільники числа ${number} такі:`);
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}




// Запитай у користувача п’ятирозрядне число і визначи,
//  чи є воно паліндромом.

let = value = prompt('Введіть п’ятирозрядне число', '');

if (value[0] === value[4] && value[1] === value[3]) {
    alert('Паліндром!');
} else if (value.length > 5) {
    alert('Неправильне число!')
} else {
    alert('');
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumBuy = +prompt('Введіть суму покупки', '');
let discount;
let sumDiscount;

if (sumBuy >= 200 && sumBuy <= 299) {
    alert(`Сума зі знижкою ${sumDiscount = sumBuy - (sumBuy * 0.03)}`);
} else if (sumBuy >= 300 && sumBuy <= 499) {
    alert(`Сума зі знижкою ${sumDiscount = sumBuy - (sumBuy * 0.05)}`);
} else if (sumBuy >= 500) {
    alert(`Сума зі знижкою ${sumDiscount = sumBuy - (sumBuy * 0.07)}`);
}


// Запитай у користувача 10 чисел і порахуй,
// скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і
// непарних. Виведи статистику на екран. Враховуй,
// що достатньо однієї змінної (не 10) для введення
// чисел користувачем.

let answers = 10;
let counterEven = 0;
let counterOdd = 0;
let counterPositive = 0;
let counterNegative = 0;
let counterZero = 0;
for (answers = 0; answers < 10; answers++) {

let number = +prompt(`Please enter a number`);
let positiv;
let negative;
let zero;
let even;
let odd;
if (number % 2 == 0) {
    for (i = number; i <= number; i++) {
        even = i;
    } counterEven += 1;
    } 
if (number % 2 != 0) {
    for (i = number; i <= number; i++) {
        odd = i;
    } counterOdd += 1;
    }

if (number > 0) {
    for (i = number; i <= number; i++) {
        positiv = i;
    } counterPositive += 1;
 } else if (number < 0) {
    for (i = number; i <= number; i++) {
        negative = i;
    } counterNegative += 1;
 } else if (number == 0) {
    for (i = number; i <= number; i++) {
        zero = i;
    } counterZero += 1;
} 
}

console.log(`Sum of even = ${counterEven}`);
console.log(`Sum of odd = ${counterOdd}`);
console.log(`Sum of positive = ${counterPositive}`);
console.log(`Sum of negative = ${counterNegative}`);
console.log(`Sum of zero = ${counterZero}`);






// Зацикли відображення днів тижня таким чином:
// «День тижня. Хочеш побачити наступний день? » і так до тих пір,
// поки користувач натискає OK.

let user;
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
do {
for (i = 0; i < days.length; i++) {
    if (user == false) {
        break;
    }
    user = confirm(`${days[i]} Хочеш побачити наступний день?`) 
}
} while (user == true);



// Виведи таблицю множення для всіх чисел від 2 до 9.
// Кожне число необхідно помножити на числа від 1 до 10.



for (let i = 2; i < 10; i++) {
    console.log(i);
    for (y = 1; y < 11; y++) {
        console.log(`${i} * ${y} = ${i * y}`)
    }
}



// Запитай дату (день, місяць, рік) і виведи наступну
// за нею дату. Враховуй можливість переходу на
// наступний місяць, рік, а також високосний рік.


let date = +prompt('Вкажіть день', '');
let mouth = +prompt('Вкажіть місяць', '');
let year = +prompt('Вкажіть рік', '');

if (date && mouth && year) {
    date += 1;
    mouth += 1;
    year += 1;
} else if (date == 0 || mouth == 0 || year == 0) {
    alert(`Неправильне значення`)
} else if (date == undefined || mouth == undefined || year == undefined) {
    alert(`Неправильне значення`)
} else if (date > 31 || mouth > 12) {
    alert(`Неправильне значення`)
} if (mouth > 12 || date > 2) {
    alert(`Неправильне значення місяця або дати`)
}

console.log(`Наступна дата ${date}/${mouth}/${year}`)






