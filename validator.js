
/*
 * Name: Kent Adrian
 * Subject: IT Programming 1
 */

// 4.1 Equality, Truthiness, and the Ternary

// Check if the values are equal.
console.log(5 == '5');            // true: same value
console.log(5 === '5');           // false: different types
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(NaN === NaN);         // false

// Check if the values are true or false.
console.log(Boolean(''));    // false: empty text
console.log(Boolean('0'));   // true: has text
console.log(Boolean([]));    // true: empty array

// Use Guest if the nickname is empty.
let nickname = '';
console.log(nickname || 'Guest');  // Guest
console.log(nickname ?? 'Guest');  // empty text

// Check if the score is passing.
const score = 78;
console.log(score >= 75 ? 'PASSED' : 'FAILED');  // PASSED


// 4.2 Console-Based Validation Logic

// Store account information.
const account = {
    username: 'jsantos',
    password: 'Occ2026!',
    age: 19,
    status: 'active'
};

// Check the account information.
function validate(data) {
    // Store errors.
    const errors = [];

    // Check the username.
    if (!data.username || data.username.length < 4) {
        errors.push('Username must be at least 4 characters');
    }

    // Check the password.
    if (data.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }

    // Check the age.
    if (data.age < 16 || data.age > 70) {
        errors.push('Age must be between 16 and 70');
    }

    // Check if the account is active.
    if (data.status !== 'active') {
        errors.push('Account is not active');
    }

    // Show success or errors.
    return errors.length === 0 ? 'All valid' : errors;
}

// Display the result.
console.log(validate(account));
