function capitalize(strings) {
    return strings.map((str) => str.toUpperCase());
  }
  
  function filterLength(strings, length) {
    return strings.filter((str) => str.length >= length);
  }
  
  function sumOfSquares(integers) {
    return integers.map((num) => num * num).reduce((acc, num) => acc + num, 0);
  }
  
  export { capitalize, filterLength, sumOfSquares };