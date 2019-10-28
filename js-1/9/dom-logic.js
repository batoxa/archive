const opennedFilms = {};

document.addEventListener("DOMContentLoaded", function() {
    for (let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function() {
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
})

function getFilmByName(filmName) {
    return films.filter(f => f.name === filmName)[0];

}

function getFilmsComments(filmName) {
    const film = getFilmByName(filmName);
    return film.comments;
}


function onAddCommentClick(name) {

    const authorValue = document.getElementById("author-" + name).value;
    const commentValue = document.getElementById("comment-" + name).value;
    const film = getFilmByName(name);
    film.addComment(commentValue, authorValue);
    onCategoryChoice(film.category);

}

function renderCommentForm(film) {
    const content = `<div class="form-title">Добавьте отзыв фильму ${film.name}</div>
    <div class="form-body">
        <input id="author-${film.name}" class="form-autor" placeholder="Ваше имя">
        <input id="comment-${film.name}"class="form-comment" placeholder="Ваш отзыв">
        <button onclick="onAddCommentClick(\'${film.name}\')">Отправить</button>
    </div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");
    form.innerHTML = content;

    form.addEventListener("click", function(event) {
        event.stopPropagation();
        form.classList.add("chosen");
    });

    return form;
}


function openFilmCard(film, newEl) {
    const comments = getFilmsComments(film.name);
    let s = "";
    comments.forEach(c => {
        s += `<div class ="comments"><span class="comment-autor">${c.autor}:</span> ${c.text}</div>`;
    });
    newEl.innerHTML += `<div class ="film-comments">${s}</div>`;
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function(event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film, newEl) {
    if (opennedFilms.hasOwnProperty(film.name) && opennedFilms[film.name] === true) {
        newEl.innerHTML = `<div class ="film-name">${film.name}</div>`;
        newEl.innerHTML += `<img class ="film-img"src = "img/img-${film.id}.jpg" alt = "${film.name}">`
        opennedFilms[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        opennedFilms[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    //newEl.innerHTML = '<div class ="film-name">' + film.name + '</div>';
    newEl.innerHTML = `<div class ="film-name">${film.name}</div>`;
    newEl.innerHTML += `<img class ="film-img"src = "img/img-${film.id}.jpg" alt = "${film.name}">`
    newEl.addEventListener("click", function() {
        onFilmClick(film, newEl);
    });
    document.querySelector(".films").appendChild(newEl);
}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) { renderFilm(film) }
}