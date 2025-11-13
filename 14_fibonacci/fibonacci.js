const fibonacci = (n) => {
  if (n == 0) return 0;
  if (n < 0) return "OOPS";
  let count = 2;
  let fib = [1, 1];
  while (count < n) {
    console.log(fib.at(-2), fib.at(-1));
    fib.push(fib.at(-2) + fib.at(-1));
    count++;
  }
  console.log(fib.at(-2), fib.at(-1));
  return fib.at(n - 1);
};

// Do not edit below this line
module.exports = fibonacci;
