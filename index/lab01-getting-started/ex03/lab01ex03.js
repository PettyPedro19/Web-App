/**
 * Web Applications [2025/2026] - Lab 1: Getting started with Node.js
 */

/* ─────────────────────────────────────────────
   EXERCISE 2 – Film Library Extended
───────────────────────────────────────────── */

'use strict';
import dayjs from "dayjs";

/**
 * Film constructor
 * @param {number} id 
 * @param {string} title 
 * @param {boolean} [favorite = false] 
 * @param {string|null} [watchDate = null]    - accepted by dayjs (e.g. 'YYYY-MM-DD')
 * @param {number|null} [rating = null]       - 1-5
 */
function Film(id, title, favorite = false, watchDate = null, rating = null) {
    this.id = id;
    this.title = title;
    this.favorite = favorite;
    this.watchDate = watchDate ? dayjs(watchDate) : null;
    this.rating = rating;

    this.toString = function () {
        const dateStr = this.watchDate ? this.watchDate.format('MMM D, YYYY') : '<not defined>';
        const ratingStr = this.rating !== null ? this.rating : 'not assigned';
        // WATCH OUT: with single quotes (') variables are NOT interpolated, MUST use backticks (`) 
        return `Id: ${this.id}, Title: ${this.title}, Favourite: ${this.favourite}, Watch date: ${dateStr}, Rating: ${ratingStr}`;
    }
}

/**
 * FilmLibrary constructor
 */

function FilmLibrary() {
    this.films = [];

    // This function adds a new film to the 'Film' entity.
    this.addNewFilm = function (film) {
        this.films.push(film);
    };

    // This function prints all the movies in Library.
    this.print = function () {
        console.log('\n===== List of films =====');
        this.films.forEach(f => console.log(f.toString()));
    };

    /**
     * Returns a new array of Films sorted by ascending watch date.
     * Unwatched films (no date) are placed at the end.
     */
    this.sortByDate = function () {
        return [...this.films].sort((a, b) => {
            if (!a.watchDate && !b.watchDate) return 0;
            if (!a.watchDate) return 1;      // a goes after b
            if (!b.watchDate) return -1;     // b goes after a
            return a.watchDate.diff(b.watchDate);
        })
    }

    /**
     * Deletes a Film from the library by id.
     * @param {number} id
     */
    this.deleteFilm = function(id) {
        this.films = this.films.filter(f => f.id != id);
    }
}


const myLibrary = new FilmLibrary();

myLibrary.addNewFilm(new Film(1, 'Pulp Fiction', true, '2023-03-10', 5));
myLibrary.addNewFilm(new Film(2, '21 Grams', true, '2023-03-17', 4));
myLibrary.addNewFilm(new Film(3, 'Star Wars', false, null, null));
myLibrary.addNewFilm(new Film(4, 'Matrix', false, null, null));
myLibrary.addNewFilm(new Film(5, 'Shrek', false, '2023-03-21', 3));
myLibrary.addNewFilm(new Film(6, 'Saving Private Ryan', true, '2025-08-19', 5));

console.log('===== Exercise 1 =====');
myLibrary.print();