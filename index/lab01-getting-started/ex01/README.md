# String Manipulation Exercise

This project focuses on implementing a JavaScript function to process an array of strings based on specific character extraction rules. It serves as a practical exercise for string slicing, conditional logic, and iterative processing.

---

## Task Description

The goal is to create a function that iterates through an array of strings. For each element, the function must compute and print a result according to the following criteria:

* **Standard Case**: For strings longer than three characters, the result is composed of the first two characters and the last two characters. Example: `spring` becomes `spng`.
* **Short Strings**: If the word is shorter than two characters, the function prints an empty string.
* **Two or Three Characters**: If the word is exactly two or three characters long, the function prints the first two characters twice. Example: `it` becomes `itit` and `cat` becomes `caat`.

---

## Implementation Requirements

### Function Signature

The function should be named `processStrings` (or similar) and accept a single parameter representing the array of input strings.

### Test Cases

To ensure the robustness of the implementation, the following scenarios must be tested:

1. **Empty Array**: Verify the function handles an empty input without errors.
2. **Single Character**: Input `['a']` should result in an empty string output.
3. **Two Characters**: Input `['it']` should result in `itit`.
4. **Three Characters**: Input `['cat']` should result in `caat`.
5. **Long Strings**: Input `['javascript', 'coding']` should result in `jart` and `cong`.
6. **Mixed Content**: An array containing a variety of the lengths mentioned above.
