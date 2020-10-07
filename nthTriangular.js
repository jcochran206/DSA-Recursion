const nthTriangular = function(num) {
  if (num === 1) {
    return num;
  }

  return num + nthTriangular(--num);
}

console.log(nthTriangular(7));