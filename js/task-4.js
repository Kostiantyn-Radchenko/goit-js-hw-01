const credits = 23580;
const pricePerDroid = 3000;
let message = prompt('how many droid, you want buy?');
let totalPrice = message * pricePerDroid ;

if (message === null) {
    message = ('Отменено пользователем!')
} else if ((message * pricePerDroid) > credits) {
    message = ('Недостаточно средств на счету!')
} else {
    message = (`Вы купили ${message} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}

console.log(message)
