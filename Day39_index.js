// Link to problem :
// https://codedamn.com/problem/LxpOdwQJevoLk9XxtlD1p?challengeList=100-days-of-frontend

import range from './range.js'
// index.js
import range, { mapIterator } from './range.js';

const numbers = range(1, 10);
console.log('Generated array:', numbers);

const timesTwo = (x) => x * 2;
const doubledNumbers = mapIterator(numbers, timesTwo);
console.log('Doubled array:', doubledNumbers);

console.log('Hello world')
