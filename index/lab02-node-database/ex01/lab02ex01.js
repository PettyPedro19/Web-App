/**
 * Web Applications [2025/2026] - Lab 2: Database integration
 */

/* ─────────────────────────────────────────────
   EXERCISE 1 – Retrieve data from the database
───────────────────────────────────────────── */

'use strict';
import dayjs from "dayjs";
import sqlite from 'sqlite3';


// Connect the DB.
const db = new sqlite.Database('films.db', (err) => { if (err) throw err; });



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

    // ======================================================================================================

    /**
     * Get all the films stored in the database and return (a Promise that resolves to) an array of Film
     * objects.
     */
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films';

            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

    /**
     * Get all the favorite films stored in the database and return (a Promise that resolves to) an array of
     * Film objects.
     */
    this.getFavorite = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE favorite=1';

            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

    /**
     *  Get all the films watched today stored in the database and return (a Promise that resolves to) an
     * array of Film objects.
     */
    this.getWatchedToday = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchdate = date(\'now\')';

            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

    /**
     *  Get, through a parametric query, the films stored in the database whose watch date is earlier than
     *  a given date received as a parameter. Return (a Promise that resolves to) an array of Film objects.
     */
    this.getWatchedBefore = (date) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchdate < ?';

            db.all(sql, [date], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

    /**
     *  Get, through a parametric query, the films in the database whose rating is greater than or equal to
     *  a given number received as a parameter. Return (a Promise that resolves to) an array of Film
     *  objects.
     */
    this.getRatedAtLeast = (rate) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE rating >= ?';

            db.all(sql, [rate], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

    /**
     * Get, through a parametric query, the films in the database whose title contains a given string
     * received as a parameter. Return (a Promise that resolves to) an array of Film objects.
     */
    this.getFilmContaining = (expr) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE title LIKE ?';

            db.all(sql, [`%${expr}%`], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const films = rows.map(row => new Film(
                    row.id,
                    row.title,
                    row.favorite,
                    row.watchdate,
                    row.rating
                ));
                resolve(films);
            });
        });
    };

}


async function main() {
    // Initializating film library.
    const myLibrary = new FilmLibrary();

    // Gett all movies inside the DB.
    const allFIlms = await myLibrary.getAll();
    console.log('===== ALL FILMS from DB =====');
    allFIlms.forEach(f => console.log(f.toString()));

    // Get only favorite films from DB.
    const favoriteFilms = await myLibrary.getFavorite();
    console.log('===== FAVOURITE FILMS from DB =====');
    favoriteFilms.forEach(f => console.log(f.toString()));

    // Get only films from DB with watchdate = today.
    const todayFilms = await myLibrary.getWatchedToday();
    console.log('===== WATCHED TODAY FILMS from DB =====');
    todayFilms.forEach(f => console.log(f.toString()));

    // Get only films from DB with watchdate = date.
    const date = '2023-03-21';
    const beforeFilms = await myLibrary.getWatchedBefore(date);
    console.log(`===== WATCHED BEFORE ${date} FILMS from DB =====`);
    beforeFilms.forEach(f => console.log(f.toString()));

    // Get only films from DB with rate >= value.
    const value = 4;
    const ratedFilms = await myLibrary.getRatedAtLeast(value);
    console.log(`===== ${value} star(s) FILMS from DB =====`);
    ratedFilms.forEach(f => console.log(f.toString()));
    
    // Get only films from DB with title containing expr.
    const expr = 'rix';
    const matchedFilms = await myLibrary.getFilmContaining(expr);
    console.log(`===== \'${expr}\' FILMS from DB =====`);
    matchedFilms.forEach(f => console.log(f.toString()));

    db.close();
}

main();

