
const _ = require('lodash');
const math = require('./math.js');

const result1 = math.add(10, 15);
const result2 = math.multiply(4, 7);

const numbers = [5, 10, 15];
const total = _.sum(numbers);

console.log(`Addition: 10 + 15 = ${result1}`);
console.log(`Multiplication: 4 * 7 = ${result2}`);
console.log(`Somme avec lodash: ${numbers} = ${total}`);
