const a = 2

const result1 = a * a + a;
console.log(result1)

const b = Math.sin(54)
const c = Math.cos(16)

const result2 = Math.round((b * c)**2);
console.log(result2)

const a1 = 16
const b1 = Math.sqrt(13.2 * 71.90)
const c1 = 2.4
const d1 = 7**4
const e1 = 3**Math.sqrt(49)
const f1 = 2**7

const result3 = Math.round((a1 * b1 / c1/d1 + e1) * f1);
console.log(result3)

function isOdd(num) { return num % 2;}
console.log("1 is " + isOdd(1)); // остаток 1 - число нечетное
console.log("2 is " + isOdd(2)); // остаток 0 - число четное

let name1 = ''
console.log(name1 || 'Hello, Guest!')

let name2 = 'Lawrence'
console.log("Hello, " + name2 + "!" || Guest)