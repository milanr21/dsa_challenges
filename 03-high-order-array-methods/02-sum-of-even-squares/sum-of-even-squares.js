function sumOfEvenSquares(arr) {
  const evenNumbers = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, square) => total + square, 0);
  return evenNumbers;
}

module.exports = sumOfEvenSquares;
