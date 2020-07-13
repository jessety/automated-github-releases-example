'use strict';

function add(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = { add };
