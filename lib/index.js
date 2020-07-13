'use strict';

function add(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function multiply(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function square(number) {
  return number * number;
}

module.exports = { add, multiply, square };
