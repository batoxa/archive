const bird = { "flies": true };

function Eagle(name) {
    this.name = name;
    this.speed = 100;
}
Eagle.prototype = bird;

const eagle1 = new Eagle("Alex");
console.log(eagle1);
console.log(eagle1.flies); //хранится не в объекте а в прототипе

const eagle2 = new Eagle("Martin");
eagle2.flies = false; // добавляется в свойства самого eagle2 и имеет более высокий приоритет
console.log(eagle2);
console.log(eagle2.flies);

/*let winBird = birds[0];
for (let deadBird of graveyard) {
    if (deadBird.points > winBird.points) {
        winBird = deadBird;
    };
};*/