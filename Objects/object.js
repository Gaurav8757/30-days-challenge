const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  year: 2000,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getDescription: function () {
    return `${this.title}, published in ${this.year}`;
  },
};
// Task - 1
console.log(book);

// Task - 2
console.log(book.title); // The Last Kingdom
console.log(book.author); // Bernard Cornwell

// Task - 3, 4
// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const result = book.getSummary();
console.log(result); // The Last Kingdom was written by Bernard Cornwell in 2000

// Task - 5, 6
// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Gaurav_Library",
  books: [book],
};
console.log(library);

// Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); // Library
console.log(library.books[0].title); // The Last Kingdom

// Task-7 use this keyword
// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(book.getDescription()); //T he Last Kingdom, published in 2000

// Task - 8
//  Use a for ... in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`${key} : ${book[key]}`);
    }


// Task - 9
// Use Object.keys and Object. values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); // [ 'title', 'author', 'year', 'getSummary
console.log(Object.values(book)); // [ 'The Last Kingdom', 'Bernard Cornwell', 2000, [Function: getSummary], [Function: getDescription] ]