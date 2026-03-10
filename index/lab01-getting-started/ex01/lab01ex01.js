/**
 * Web Applications [2025/2026] - Lab 1: Getting started with Node.js
 */

/* ─────────────────────────────────────────────
   EXERCISE 0 – String manipulation
───────────────────────────────────────────── */

"use strict";

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

function transformString(arr) {
    for (let i = 0; i < arr.length; i++) {
        const l = arr[i].length;
        // Create an array of chars of the i-th word in v.
        const chars = [...arr[i]];
        // I need to initialize myString as a void string.
        let myString = '\0';

        if (l < 2) {
            // For string shorter than 2 chars, print void string.
            console.log('');
        } else {
            // For longer strings, print first 2 letters and last 2 letters.
            myString += chars[0];
            myString += chars[1];
            myString += chars[arr[i].length - 2];
            myString += chars[arr[i].length - 1];
        }
        console.log('- ', myString);
    }
}

const v = ["spring", "cat", "it", "ciao", "paolo"];

console.log('========== Exercise 0, Lab 1 ==========');
console.log('Original words: ', v);
console.log('Computed words:');
transformString(v);
