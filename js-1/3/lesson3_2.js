console.log("********************");

const films = [{ "name": "Рапунцель", "money": 2e6 },
    { "name": "Титаник", "money": 2e6 + 3e5 },
    { "name": "Смешарики", "money": 2e6 + 4e5 },
    { "name": "Начало", "money": 2e6 + 6e4 }
];

const origin = { "Рапунцель": "РФ", "Титаник": "США", "Смешарики": "Мексика", "Начало": "Израиль" }

//добавляем в объект дополнительное значение из другого объекта

for (let film of films) {
    film["country"] = origin[film["name"]];
}
console.log(films);
// второй вариант
films.map(film => film["country"] = origin[film["name"]]);
console.log(films);


//считаем суммарную выручку
let money = 0;
films.forEach(film => money += film["money"]);
console.log(films);
console.log(money);