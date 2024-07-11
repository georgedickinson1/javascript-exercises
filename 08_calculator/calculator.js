const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total + current
  },0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current
  })
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  let numbers = [];
	for (let i = n; i > 0; i--) {
    numbers.push(i);
  }
  return numbers.reduce((total, current) => {
    return total * current;
  })
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
