# Film Library - Lab 2

This project implements a Node.js application to manage a personal collection of films. The exercise focuses on practicing **constructor functions**, object manipulation, and date handling using the **day.js** library.

---

## Data Model Requirements

Each `Film` object within the library is characterized by the following fields:

* **ID**: Unique numerical identifier (mandatory).
* **Title**: The title of the film (mandatory).
* **Favorite**: A Boolean value indicating if the film is among the favorites (default: `false`).
* **Watch Date**: The date when the film was watched (optional).
* **Rating**: A numerical value between 1 and 5 (optional).

---

## Project Structure

The code is organized into two main components:

1. **`Film` Constructor**: Manages the creation of individual film objects, formatting dates via `dayjs` and handling optional fields like rating and watch date.
2. **`FilmLibrary` Constructor**: Manages a collection (array) of films and provides methods for interaction.

### Main Methods

* `addNewFilm(film)`: Adds a `Film` object to the library.
* `print()`: Displays the entire list of stored films in the console, properly formatting missing or optional fields.

---

## Example Data

The library is populated with a predefined list of films to verify correct functionality:

| Id | Title | Favorite | Watch Date | Score |
| --- | --- | --- | --- | --- |
| 1 | Pulp Fiction | True | March 10, 2023 | 5 |
| 2 | 21 Grams | True | March 17, 2023 | 4 |
| 3 | Star Wars | False | <not defined> | <not assigned> |
| 4 | Matrix | False | <not defined> | <not assigned> |
| 5 | Shrek | False | March 21, 2023 | 3 |
| 6 | Saving Private Ryan | True | August 8, 2025 | 5 |

---

## Installation and Setup

To run the project, ensure Node.js is installed and configure the dependencies:

1. Initialize the project:
```bash
npm init -y

```


2. Install the `dayjs` library:
```bash
npm install dayjs

```


3. Execute the script:
```bash
node index.js

```



---

Would you like me to add a section regarding the logic used to handle undefined dates or empty ratings?