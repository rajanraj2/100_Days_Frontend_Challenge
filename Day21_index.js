// Link to problem :
// https://codedamn.com/problem/QULMvdz5PpH5QA7zJB3hi?challengeList=100-days-of-frontend
 
// myMap function
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // myFilter function
  function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // myReduce function
  function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  // Export the functions as named exports
  export { myMap, myFilter, myReduce };
  