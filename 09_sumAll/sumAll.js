const sumAll = (num1, num2) => {
  total = 0;

  let isInvalid = [num1, num2].some((num) => num < 0 || !Number.isInteger(num));

  if (isInvalid) return "ERROR";
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      total += i;
    }
    return total;
  } else {
    for (let i = num2; i <= num1; i++) {
      total += i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
