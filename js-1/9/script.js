const categories = ["Юмор", "Ужасы", "Фантастика", "Драма", "Триллер", "Боевик"];
const films = [];

class Comment {
    constructor(text, autor, stars) {
        this.text = text;
        this.autor = autor;
        this.stars = stars;
    }
}

class Film {
    constructor(id, name, cat) {
        this.id = id;
        this.name = name;
        this.category = categories[cat];
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

films.push(new Film(1, "Бриллиантовая рука", 0));
films.push(new Film(2, "Один дома", 0));
films.push(new Film(3, "Нечто", 1));
films.push(new Film(4, "ОНО", 1));
films.push(new Film(5, "Гарри Поттер", 2));
films.push(new Film(6, "Аладдин", 2));
films.push(new Film(7, "Легенды осени", 3));
films.push(new Film(8, "Сибирский цирюльник", 3));
films.push(new Film(9, "Молчание ягнят", 4));
films.push(new Film(10, "Семь", 4));
films.push(new Film(11, "Гемини", 5));
films.push(new Film(12, "Леон", 5));

films[0].addComment("Худшего пожелания по нынешним временам, чем 'чтоб ты жил на одну зарплату' не существует", "Вася", 5);
films[1].addComment("Один из лучших рождественских, семейных фильмов в истории кинематографа", "Петя", 4);
films[2].addComment("Фильм «Нечто» шикарно передает гнетущую атмосферу, накал между людьми", "Вадим", 4);
films[3].addComment(" Спасибо Стивену Кингу за этот роман, а создателям за душевное, хоть и немного страшное кино", "Валера", 5);
films[4].addComment("Кино снято для всех возрастов и на долгие времена", "Анна", 4);
films[5].addComment("Поразительно яркая, красочная и невероятно милая история", "Оксана", 5);
films[6].addComment("Что больше всего радует, это фильм не только о любви, но и о дружбе и чести", "Валя", 4);
films[7].addComment("Отличные диалоги, легендарные песни, запоминающейся фразы", "Маша", 5);
films[8].addComment("Это опасная и действительно нестареющая классика", "Коля", 4);
films[9].addComment("Могу с уверенностью сказать, что это один из самых интеллектуальных и держащих в напряжении фильм из всех, что я видел", "Антон", 5);
films[10].addComment("Стандартный боевик, с клишированным сюжетом, но с хорошей динамикой", "Денис", 3);
films[11].addComment("Просто гениальная картина с потрясающим балансом.", "Дима", 5);

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}