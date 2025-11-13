const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, num) => num + total);
};

const multiply = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, num) => num * total);
};

const power = function (b, e) {
  return b ** e;
};

const factorial = function (n) {
  if (n == 1 || n == 0) return 1;
  if (n > 1) return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
