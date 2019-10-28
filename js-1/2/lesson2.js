const tel = "79261582268";
console.log(tel);
console.log();

if (tel.length == 11) {
    console.log("1 Тест пройден");
    if (tel[0] == "8") {
        console.log("2 Тест пройден");
    }
}


if (tel.length == 11 && tel[0] == "8") {
    console.log("3 Тест пройден");
} else if (tel.length == 11 && tel[0] != "8") {
    console.log("3 Тест не пройден, первая цифра не 8");

} else {
    console.log("3 Тест не пройден");
}
console.log();


switch (tel[0]) {
    case "8":
        console.log("4 Тест пройден");
        break;
    case "7":
        console.log("4 Тест не пройден, вы ввели 7");
        break;
    default:
        console.log("4 Тест не пройден");
        break;
}
console.log();


let success = false;
let error = "Неизвестная ошибка";

if (tel.length === 11) {
    switch (tel[0]) {
        case "8":
            success = true;
            break;
        case "7":
            error = "Первая цифра 7";
            break;
    }
}
const s = (success ? "Тест пройден" : "Тест не пройден :( " + error)
console.log(s);
console.log();