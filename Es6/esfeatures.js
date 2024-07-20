// Task - 1
// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Gaurav Kumar";
const age = 20;
const message = `The person's name is ${name} and they are ${age} years old.`;
console.log(message); // The person's name is Gaurav Kumar and they are 20 years old.

// Task - 2
// Create a multi-line string using template literals and log it to the console.
const multiLineString = `
This is a multi-line string.
You can write text over multiple lines
without using any special characters.

Template literals are very convenient!
`;
console.log(multiLineString);

// Task - 3
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, ...rest); // 1, 2, 3,4,5

// Task - 4
// Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
const { title, author } = book;
console.log(title, author); // The Great Gatsby, F. Scott Fitzgerald

// Task - 5
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const spread = [1, 2, 3, 4, 5];
const newNumbers = [...spread, 6, 7, 8, 9, 10];
console.log(newNumbers); // 1,2,3,4,5,6,7,8,9,19

// Task - 6
// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Task - 7
// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.
// Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(2)); // 2

// Task - 8
// Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
  name: "Gaurav Kumar",
  age: 20,
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};
person.greet(); // Hello, my name is Gaurav Kumar and I am 20 years old.

// Task - 9:
// Create an object with computed property names based on variables and log the object to the console.
const person1 = {
    name: "Gaurav Kumar",
    age: 20,
    };
    const key = "name";
    const value = "Gaurav Kumar";
    console.log(person1[key]); // Gaurav Kumar
