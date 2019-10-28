/* Игра в выживание птичек.
Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
Алгоритм решения:
1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, .....Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
(та, которая съедена, становится wasEaten = true, а та, которую покормили, —point++)*/

function getRandom(maxValue, excludeValue) {
    let randomValue;
    do {
        randomValue = Math.round(Math.random() * (maxValue - 1));
    }
    while (randomValue === excludeValue);
    return randomValue;
}

class Bird {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
    addPoint() {
        this.points++;
    }
}
const birds = [];
const graveyard = [];
for (i = 0; i < 10; i++) {
    birds.push(new Bird("Bird " + (i + 1)));
}
let killerIndex;
let victimIndex;

while (birds.length > 1) {
    killerIndex = getRandom(birds.length, null);
    victimIndex = getRandom(birds.length, killerIndex);
    birds[killerIndex].addPoint();
    birds[victimIndex].wasEaten = true;
    graveyard.push(birds[victimIndex]);
    birds.splice(victimIndex, 1);
};
graveyard.push(birds[0]);
graveyard.sort((first, second) => second.points - first.points)
console.log("Results of the Battle Royal", graveyard);
console.log();
console.log("По итогам самыми прожорливыми оказались:");
let winBird;
for (let w of graveyard) {
    if (w.points === graveyard[0].points) {
        console.log(w.name, "скушала", w.points, " сородичей");
    };
    if (w.wasEaten === false) {
        winBird = w;
    };
};
console.log();
console.log("А выжила в королевской битве - ", winBird.name, ",");
console.log("с результатом - ", winBird.points, " фрагов");
console.log();