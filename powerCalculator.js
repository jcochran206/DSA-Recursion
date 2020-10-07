const powerCalculator = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * powerCalculator(base,--exp);
}

console.log(powerCalculator(10,3));