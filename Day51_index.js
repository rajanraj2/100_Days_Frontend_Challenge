// index.js

// Define the sum function using the spread operator
const sum = (...args) => {
    // Use the reduce method to calculate the sum of all arguments
    return args.reduce((acc, current) => acc + current, 0);
  };
  
  // Export the sum function using ESM syntax
  export { sum };
  