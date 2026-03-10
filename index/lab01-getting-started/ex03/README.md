# Film Library Extended - Lab 2 (Part 2)

This project expands the initial Film Library application by introducing advanced data manipulation methods. The focus is on using the **functional programming paradigm** (such as `filter`, `map`, and `sort`) to manage and transform the collection of films.

---

## New Functionalities

The `FilmLibrary` object now includes the following methods to interact with the film collection:

* **`sortByDate()`**: Returns a new array of films sorted by their watch date in ascending order. Films without a defined watch date are automatically moved to the end of the list.
* **`deleteFilm(id)`**: Removes a specific film from the library based on the provided numerical ID.
* **`resetWatchedFilms()`**: Clears the watch date for every film currently stored in the library, resetting them to `<not defined>`.
* **`getRated()`**: Filters the library to return only films that have an assigned score. The resulting list is ordered by rating in descending order (highest score first).

---

## Technical Implementation Details

### Functional Programming

Instead of traditional `for` loops, the implementation leverages:

* `Array.prototype.filter()` for selecting rated films.
* `Array.prototype.sort()` with custom comparator logic to handle null dates.
* `Array.prototype.forEach()` or `map()` for batch updates like resetting dates.

### Date Comparison

The sorting logic utilizes the `diff()` or `isAfter()` methods from the **day.js** library to accurately compare chronological data and ensure that "undefined" dates are pushed to the end of the collection.

---

## Testing Instructions

To verify the new features, the following test sequence is implemented in the script:

1. **Sort Test**: Invoke `sortByDate()` and print the result to ensure Pulp Fiction (March 10) appears before Shrek (March 21), with Star Wars at the end.
2. **Filter Test**: Invoke `getRated()` to confirm that only films with scores 5, 4, and 3 are displayed, excluding Matrix and Star Wars.
3. **Deletion Test**: Call `deleteFilm(2)` and verify the library no longer contains "21 Grams".
4. **Reset Test**: Call `resetWatchedFilms()` and verify that all `watchDate` fields are null.

---

## Execution

Ensure **day.js** is installed, then run the test suite:

```bash
node index.js

```

Would you like me to provide the specific JavaScript code for the `sortByDate` comparator logic?