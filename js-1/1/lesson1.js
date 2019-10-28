let title = "Титаник";
const title2 = title.toUpperCase(); //все заглавные
const a = title.endsWith("к"); //проверка буквы
const title3 = title.replace("а", "о"); //замена буквы
const aPosition = title.search("а"); //поиск буквы

console.log("title = ", title);
console.log("title2 = ", title2);
console.log("a = ", a);
console.log("title3 = ", title3);
console.log("aPosition = ", aPosition);
console.log(" ");

const firstLetter = title[0]; //буква [позиция]
const subTitle = title.substring(1, 4); //подстрока из элементов с 1 по 4
const l = title.length; //длинна строки
const lastLetter = title[l - 1]; //последняя буква
console.log("firstLetter = ", firstLetter);
console.log("subTitle = ", subTitle);
console.log("l = ", l);
console.log("lastLetter = ", lastLetter);
console.log("**************");

films = ["Титаник", "Смешарики", "Лунтик"];
console.log(films);
films.push("Армагеддон"); //добавление элемента в конец массива
console.log(films);
films.pop(); //удаление элемента из конца массива
console.log(films);
films.shift(); //удаление первого элемента массива
console.log(films);
films.unshift("Начало"); //добавление первого элемента массива
console.log(films);
//let title = "Титаник";
films[0] = "Вверх".toUpperCase();
films[1] = "Вниз";
console.log(films);

films.push("Армагеддон");
films.unshift("Начало");

console.log("**************");
films.sort(); //сортировка массива
console.log(films);
films.reverse(); //обратная сотрировка
console.log(films);
films.splice(1, 3, "Марвел", "Топган"); //Удаление 3 элементов начиная с [1] и добавление начиная с [1]
console.log(films);
console.log();

films = films.concat(["Концовка"]); //добавление элементов массива к массиву
console.log(films);
let films2 = ["222", "333"];
films = films.concat(films2); //добавление массива к массиву
console.log(films);
console.log();

const s2 = films.join("; "); //соединяет в строку все элементы массива разделяя их "; "
const s = "Унас есть фильмы: " + s2;
console.log(s);
const films3 = s.split(", "); //из строки делает массив из элементов разделенных пробелом
console.log(films3);
console.log();

const boy = {
    name: "Ваня",
    weight: 170
}; ///создаём объект
console.log(boy);
boy.name = "Даша"; //меняем элемент name
boy.weight = boy.weight + 20; //меняем элемент роста через вычисления
console.log(boy["name"]); //варианты вывода элемента
console.log(boy.name); //варианты вывода элемента
console.log(boy);
console.log();

const filmsAll = []; //создаём пустой "каталог"
const film1 = {
    name: "Титаник",
    money: 2e6
}; //создаём первый элемент
filmsAll.push(film1); //добавляем в каталог
const film2 = {
    name: "Смешарики",
    money: 1e5
}; //создаём второй элемент
filmsAll.push(film2); //добавляем в каталог
console.log(filmsAll);
console.log(filmsAll[0].name); //выводит name элемента [0]
console.log(filmsAll[0].money + filmsAll[1].money); //выводит сумму элементов money, элемента [0] и [1]
console.log();

//присвоение переменным разных типов данных
let x = 36;
let y = "Hello";
let z;
let n = null;
let li = [];
let ob = {};
let b = true;
//отображение типов данных переменным
console.log(typeof(x));
console.log(typeof(y));
console.log(y);
console.log(typeof(z));
console.log(typeof(n));
console.log(typeof(li));
console.log(typeof(ob));
console.log(typeof(b));