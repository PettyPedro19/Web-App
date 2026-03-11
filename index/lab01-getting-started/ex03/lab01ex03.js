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
 * @param {boolean} [favourite = false] 
 * @param {string|null} [watchDate = null]    - accepted by dayjs (e.g. 'YYYY-MM-DD')
 * @param {number|null} [rating = null]       - 1-5
 */
function Film(id, title, favourite = false, watchDate = null, rating = null) {
    this.id = id;
    this.title = title;
    this.favourite = favourite;
    this.watchDate = watchDate ? dayjs(watchDate) : null;
    this.rating = rating;

    this.toString = function () {
        const dateStr = this.watchDate ? this.watchDate.format('MMMM D, YYYY') : '<not defined>';
        const ratingStr = this.rating !== null ? this.rating : 'not assigned';
        // WATCH OUT: with single quotes (') variables are NOT interpolated, MUST use backticks (`) 
        return `Id: ${String(this.id).padEnd(4)}`
            + `Title: ${this.title.padEnd(25)}`
            + `Favourite: ${String(this.favourite).padEnd(8)}`
            + `Watch date: ${dateStr.padEnd(20)}`
            + `Rating: ${ratingStr}`;
    };
}

/**
 * FilmLibrary constructor
 */

function FilmLibrary() {
    this.films = [];

    // This function adds a new film to the 'Film' entity.
    this.addNewFilm = (film) => {
        // If movie is not already in the list, then add it.
        if (!this.films.some(f => f.title == film.title) && !this.films.some(f => f.id == film.id))
            this.films.push(film);
        else
            throw new Error('Duplicated id');
    };

    // This function prints all the movies in Library.
    this.print = function () {
        console.log('\n===== List of films =====');
        this.films.forEach(f => console.log(f.toString()));
    };

    /**
     * Removes a specific film from the library based on the provided 
     * numerical ID.
     *
     * @param {*} id Id of the movie to be removed.
     */
    this.deleteFilm = (id) => {
        const newList = this.films.filter(function (film, index, arr) {
            return film.id != id;
        })
        this.films = newList;
    }

    /**
     * Clears the watch date for every film currently stored in the library, 
     * resetting them to <not defined>.
     */
    this.resetWatchedFilms = () => {
        this.films.forEach((film) => film.watchDate = null);
    }

    /**
     * Filters the library to return only films that have an assigned score.
     * The resulting list is ordered by rating in descending order 
     * (highest score first).
     * @returns newList: filtered movies.
     */
    this.getRated = () => {
        const newList = this.films.filter(function (film, index, arr) {
            return film.rating > 0;
        }).toSorted((d1, d2) => { return d2.rating - d1.rating });
        return newList;
    }


    /**
     * Returns a new array of Films sorted by ascending watch date.
     * Unwatched films (no date) are placed at the end. 
     */
    this.sortByDate = () => {
        const newArray = [...this.films];
        newArray.sort((d1, d2) => {
            if (!(d1.watchDate)) return 1;
            else if (!(d2.watchDate)) return -1;
            return d1.watchDate.diff(d2.watchDate, 'day');
        });
        return newArray;
    }


}


function main() {
    // Initializating film library.
    const myLibrary = new FilmLibrary();

    // Adding the films to the library.
    myLibrary.addNewFilm(new Film(1, 'Pulp Fiction', true, '2023-03-10', 5));
    myLibrary.addNewFilm(new Film(2, '21 Grams', true, '2023-03-17', 4));
    myLibrary.addNewFilm(new Film(3, 'Star Wars', false, null, null));
    myLibrary.addNewFilm(new Film(4, 'Matrix', false, null, null));
    myLibrary.addNewFilm(new Film(5, 'Shrek', false, '2023-03-21', 3));
    myLibrary.addNewFilm(new Film(6, 'Saving Private Ryan', true, '2025-08-19', 5));

    // Printing the results.
    console.log('===== Exercise 2 =====');
    myLibrary.print();
    console.log();

    // Print sorted films
    console.log('*** List of films (sorted) ***');
    const sortedLibrary = myLibrary.sortByDate();
    sortedLibrary.forEach((film) => console.log(film.toString()));
    console.log();

    // Deleting film #2
    console.log('Deleting film #2');
    myLibrary.deleteFilm(2);
    myLibrary.print();
    console.log();

    // Reset dates.
    console.log('*** List of films (reset dates) ***')
    myLibrary.resetWatchedFilms();
    myLibrary.print();
    console.log();

    // Retrieve and print films with an assigned rating
    console.log('*** Films filtered, only the rated ones ***')
    const ratedFilms = myLibrary.getRated();
    ratedFilms.forEach((film) => console.log(film.toString()));

    // Additional instruction to enable debug.
    debugger;
}

main();