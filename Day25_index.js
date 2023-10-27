// Link to problem :
// https://codedamn.com/problem/kI6QGjuBVQ6-hj5yVQsb-?challengeList=100-days-of-frontend

/**
 * @param {number} n - The initial value for the counter.
 * @return {Function} counter - A function that returns the next value in the sequence.
 */
export function createCounter(n) {
    // Initialize the counter to the provided value
    let count = n;

    // Return a function that increments and returns the counter value
    return function() {
        return count++;
    };
}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43
