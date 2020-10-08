const fibonacci = function (n) {
  if (n === 0) {
    return [];
  }

  function fib(num) {
    if (num < 2) {
      return num;
    }
    return fib(num - 1) + fib(num - 2);
  }

  return [...fibonacci(n-1), fib(n)];

};

console.log("===============");
console.log("Fibonacci");
console.log("===============");
console.log(fibonacci(7));
