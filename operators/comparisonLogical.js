// Comparison Operators

const a = 10, b =20, c =20;

// greater than
console.log(a > b); //10 > 20 false

// less than
console.log(a < b); //10 < 20 true

// greater than equal to
console.log(b >= c); // 20 == 20 true

// less than equal to
console.log(b <= c); //20 == 20 true

// ==
console.log(a == b); // 10 == 20 false

// ===
console.log(a === b); // 10 === 20 false 
console.log(c === b); // 20 === 20 true



console.log("_____ Logical Operators ____");

// Logical Opeators
console.log((a > b) && (b < c)); // false && true => false
console.log((a > b) || (b === c)); // false || true => true
console.log((a < b) != (c >= b)); // true != true => false
