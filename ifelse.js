const Number6 = -6;

if (Number6 >= 1) {
    console.log('Число положительное');
} else if (Number6 == 0) {
    console.log('Число равно нулю');
} else if (Number6 < 0) {
    console.log('Число отрицательное');
}

const weight = 42
const height = 156/100

let bmi = weight / (height**2);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}

const month = Number(prompt('Укажите номер месяца'));
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверный месяц';
}
console.log(monthName);

const season = prompt('Укажите любимое время года и получите смайлик');
let seasonName;

switch (season) {
    case 'Зима':
        seasonName = ';3';
        break;
    case 'Весна':
        seasonName = ':^';
        break;
    case 'Лето':
        seasonName = ':0';
        break;
    case 'Осень':
        seasonName = '*^*';
        break;
}
console.log(seasonName);