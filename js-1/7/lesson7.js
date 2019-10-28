const categories = ["Юмор", "Ужасы", "Фантастика", "Драма", "Триллер"];
const films = [];

class Comment {
    constructor(text, autor, stars) {
        this.text = text;
        this.autor = autor;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.budget = 0;
        this.expertStars = 3;
        this.comments = [];
    }
    addComment(text, autor, stars) {
        this.comments.push(new Comment(text, autor, stars));
    }
    getAverageStars() {
        let sumStars = 0;
        this.comments.forEach(comment => sumStars += comment.stars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

films.push(new Film("Титаник", 0));
films.push(new Film("Один дома", 0));
films.push(new Film("Нечто", 1));
films.push(new Film("Гарри Поттер", 2));
films.push(new Film("Легенды осени", 3));
films.push(new Film("Сибирский цирюльник", 3));
films.push(new Film("Молчание ягнят", 4));

films[0].addComment("good films", "Вася", 5);
films[0].addComment("bad films", "Маша", 4);
films[1].addComment("nice cinema", "Петя", 4);
films[1].addComment("ифв cinema", "Валя", 3);

/*
console.log(films);
console.log(films[0].comments[0]);
console.log(films[1].getAverageStars());
*/

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}
console.log(getFilmsByCategory("Драма"));