// Create the range function here
// range.js
export default function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  export function mapIterator(array, callback) {
    const result = [];
    for (const element of array) {
      result.push(callback(element));
    }
    return result;
  }
  
  export default function range(start, end) {}
  