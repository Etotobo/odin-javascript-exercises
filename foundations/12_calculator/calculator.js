const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
	return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exp) {
  let result = base * base;
	for(let i = 2; i < exp; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	for(let i = 0; i < num; i++){
    result = result * (num -i);
  }
  return result;

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
