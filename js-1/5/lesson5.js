const li = [{ "a": 5, "b": 3 }, { "a": 4, "b": 1, "c": 7 }];

for (let ob of li) {
    if (ob.hasOwnProperty("c")) {
        console.log(ob.c);
    } else {
        console.log("no such property");

    }
}
console.log();

const ob = new Object();
ob["a"] = 1;
ob["b"] = 11;
console.log(ob);
const keys = Object.keys(ob); //возвращает ключи объекта
const values = Object.values(ob); //возвращает значения ключей объекта
console.log(keys);
console.log(values);
console.log();

const s = '{"a":4, "b": 6, "c":["sdfsdf", 345]}'; //снаружи обязательно одинарные кавычки или сломается parse
const obb = JSON.parse(s); //делает из строки объект
obb.b = 30;
const s2 = JSON.stringify(obb); //делает из объекта строку
console.log(obb);
console.log(s2);
console.log();