# Web Applications 2025/2026 - Lab 2: Database Integration

This lab focuses on integrating the previously developed JavaScript application with a local SQLite database named **films.db**. The primary goal is to transition from in-memory data storage to persistent data management using asynchronous operations.

---

## 1. Data Retrieval Requirements

The application must be modified to include several asynchronous methods within the `FilmLibrary` class. Each method is required to return a **Promise** that resolves to an array of `Film` objects retrieved from the database.

| Retrieval Goal | Functional Requirement |
| --- | --- |
| **All Films** | Retrieve every film record stored in the database. |
| **Favorites** | Filter and return only films marked as favorites. |
| **Watched Today** | Retrieve films where the watch date matches the current date. |
| **Date Filter** | Use a parametric query to find films watched before a specific provided date. |
| **Rating Filter** | Use a parametric query to find films with a rating greater than or equal to a specific number. |
| **Search by Title** | Use a parametric query to find films whose title contains a specific substring. |

After implementation, these methods should be invoked to verify that the retrieved data is printed correctly to the console.

---

## 2. Database Modification Operations

Beyond retrieval, the library must support methods that permanently alter the database content. Because these operations are destructive, it is recommended to create a backup of **films.db** before testing.

The specific functionalities to implement include storing a new film record, deleting an existing film using its unique ID, and a bulk operation to clear the watch date for all entries in the database. Each of these methods should provide a confirmation or failure message upon completion.

---

## Technical Implementation Notes

The project utilizes the **sqlite3** npm module as the interface for database interactions. For viewing and managing the database structure outside of the code, the lab suggests using the **SQLite extension for Visual Studio Code** or the **DB Browser for SQLite** standalone application.

The database schema can also be modified or reset using the provided **SQL setup files** available in the course repository. These tools ensure that the database environment is correctly configured for the parametric queries required in the exercises.

