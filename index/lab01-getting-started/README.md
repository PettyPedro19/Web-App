# Web Applications 2025/2026 - Lab 1: Getting Started with Node.js

This repository contains the initial exercises for becoming familiar with JavaScript and Node.js as part of the Web Applications course. The lab focuses on core language fundamentals and the implementation of a functional application to manage a personal film library.

---

## 01. Preparation and Warm-up

The environment requires Visual Studio Code and Node.js. For development on Windows, using Windows Subsystem for Linux (WSL) 2 is recommended to align with the Linux-based evaluation environment used for exams.

The warm-up exercise involves creating a function to manipulate an array of strings. For each input string, the function generates a new string based on the following logic:

* The result is composed of the first two and last two characters of the original string.


* If the word is shorter than two characters, the function prints an empty string.


* If the word is two or three characters long, the available characters are repeated twice (e.g., 'it' becomes 'itit').



---

## 02. Film Library Management

The core of the lab is the creation of a film tracking system. This includes implementing constructor functions for `Film` objects and a `FilmLibrary` object to store them.

### Film Object Structure

Each film consists of the following data:

* A mandatory unique numerical ID.


* A mandatory title.


* A Boolean "favorite" status, which defaults to false.


* An optional watch date.


* An optional numerical rating between 1 and 5.



The `FilmLibrary` includes an `addNewFilm` method to populate the collection and a `print` method to display all stored films in the console. The `day.js` library is suggested for handling date objects.

---

## 03. Advanced Library Functionalities

The second exercise extends the `FilmLibrary` with methods designed using functional programming paradigms to manipulate the film array:

* **sortByDate**: Returns a new array of films sorted by their watch date in ascending order, placing unwatched films at the end of the list.


* **deleteFilm**: Removes a film from the library based on its unique ID.


* **resetWatchedFilms**: Clears the watch date for every film in the library.


* **getRated**: Filters the collection to return only films with an assigned score, sorted by the rating in descending order.
