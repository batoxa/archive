//Федор и Петр играют в блэкджек. Набранные ими очки хранятся в виде числа в двух переменных fedorPoints и petrPoints. Нам нужно:
//сохранить любые два числа в эти переменные,
//вывести, кто из игроков победил.
//Правила блэкджека:
//Выигрывает тот, кто набрал число очков, максимально близкое к 21 (20 выигрывает у 19). 
//Но первый, кто превысит 21 хоть на 1, — проиграл (19 выигрывает у 22).

let fedorPoints = Math.ceil(Math.random() * 31); //присваиваем случайное значение не больше 31
let petrPoints = Math.ceil(Math.random() * 31); //т.к. максимально возможно к 20 очкам "докупить" туза на 11

// Math.random() *31 - генерирует число от 0 до 1 и умножает его на 31
// Math.ceil() - округляет до целого в большую сторону

console.log("Фёдор набирает: ", fedorPoints, " очков");
console.log("Петру набирает: ", petrPoints, " очков");

if (fedorPoints > 21 && petrPoints > 21) {
    console.log("Оба игрока набирают больше 21 очков и проигрывают");
} else if (fedorPoints > 21) {
    console.log("Федор проигрывает");
} else if (petrPoints > 21) {
    console.log("Пётр проигрывает");
} else if (fedorPoints === petrPoints) {
    console.log("Оба игрока набирают одинаковое количество очков");
} else if (fedorPoints > petrPoints) {
    console.log("Федор выигрывает");
} else {
    console.log("Пётр выигрывает");
}
console.log();