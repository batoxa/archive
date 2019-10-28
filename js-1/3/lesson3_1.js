console.log("********************");

// посчитать суммы выручки фильмов
const films = [{ "name": "Рапунцель", "money": 2e6 },
    { "name": "Титаник", "money": 2e6 + 3e5 },
    { "name": "Смешарики", "money": 2e6 + 4e5 },
    { "name": "Начало", "money": 2e6 + 6e4 }
];

let i;
let s = 0;
for (i = 0; i < films.length; i++) {

    s += films[i]["money"];
}
console.log(s);
console.log();

// найти значение первой степени 2, больше 20000
for (let n = 1; n < 20000; n = n * 2) {
    console.log(n);
}
console.log();

let q = 0;
while (2 ** q < 20000) {
    q++;
}
console.log(2 ** (q - 1));
console.log();

let z = 0;
do {
    z++;
} while (2 ** z < 20000);
console.log(2 ** (z - 1));
console.log();

const li = [5, 7, 8, 6, 2];
const ob = { "a": 1, "b": 4 };

for (let w in li) {
    console.log(w); //w - получает индекс ячейки
}

for (let m of li) {
    console.log(m); //m - значение ячейки
}

for (let y in ob) {
    console.log(y + ": " + ob[y]); //y - ключ "a" или "b"
}
for (let l of "ЙЦКУ") {
    console.log(l); //разложить строку на элементы
}

//редактируем первый цикл подсчета выручки фильмов
let ss = 0;
for (let u in films) {
    ss += films[u]["money"];
}
console.log(ss);

ss = 0;
for (let film of films) {
    ss += film["money"];
}
console.log(ss);