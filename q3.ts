function primeNumber(a) {
  let n = 0;
  for (let i = a; i > 1; i--) {
    if (a % i === 0) {
      n++;
    }
  }
  if (n > 0) return "No";
  else return "Yes";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
