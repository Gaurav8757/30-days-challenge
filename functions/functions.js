// Function Declaration
// Task - 1
function oddeven(num) {
  if (num % 2 === 0) {
    return num + " is even number";
  } else {
    return num + " is odd number";
  }
}
const result = oddeven(111);
console.log(result); // 111 is odd number

// Task - 2
// To calculate the square of the number
function square(num) {
  return num * num;
}
const sqr = square(4);
console.log(sqr); // 16

//  Task - 3
// To find the maximum of two numbers.
const maxValue = function (a, b) {
  if (a > b) {
    return a + " is greater than " + b;
  } else if (a < b) {
    return b + " is greater than " + a;
  } else {
    return "Both are equal";
  }
};
console.log(maxValue(10, 40)); // 40 is greater than 10

// Task - 4
// Write a fn expression to concatenate two strings and return the result.
const concats = (a, b) => a.concat(b);
console.log(concats("Hello ", "World!"));

// Arrow Functions
// Task - 5
const res = (a, b) => a + b;
console.log(res(20, 10)); //  30

// Task - 6
// Arrow fn to check if a string contains a specific character and return a boolean value.
const check = (str, char) => str.includes(char);
console.log(check("GAURAV", "A")); //TRUE

// Task - 7
const results = (a, b = 2) => {
  return a * b;
};
console.log(results(4)); // gives 8 => a=4, b=2 default value

// Task - 8
// Write a function that takes a person's name and age returns a greeting message. Provide default value for the age.
const greet = (name, age = 20) => {
  // age default value used 20
  return `Hello ${name} you are ${age} years old.`;
};
console.log(greet("Gaurav")); // Hello Gaurav you are 20 years old

// HOF
// Task - 9
// Write a higher-order function that takes a function and a number, and calls the function that many times.
const call = (fn, n) => {
  for (let i = 0; i < n; i++) {
    fn();
  }
  return "Function called " + n + " times";
};
const  User = (a) => ()=> console.log(a*a);

console.log(call(User(10), 10)); //n=10, 10 times call due to for loop



// Task - 10
// Write a higher-order function that takes two function and a value, applies the first function to the value, and then  
// then second function to the result.

const applyFunctions = (fn1, fn2, value) => {
  const result1 = fn1(value);
  const result2 = fn2(result1);
  return result2;
};

// Example functions
const addFive = (num) => num + 5;
const multiplyByTwo = (num) => num * 2;

// Using the higher-order function
const ans = applyFunctions(addFive, multiplyByTwo, 10);
console.log(ans); // Output: 30

