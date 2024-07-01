function primeNumber(a) {
    let n = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            n++;
        }
    }
    if (n > 0) return "No";
    else return "Yes";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
