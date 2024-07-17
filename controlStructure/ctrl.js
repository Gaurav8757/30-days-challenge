// IF-ELSE
// Task - 1
// Write a program to check whether a number is positive, negative or zero.

let num = 0;
if (num > 0) {
  console.log(`${num} is Positive`);
} else if (num < 0) {
  console.log(`${num} is Negative`);
} else {
  console.log(`${num} is Zero`); // 0 is Zero
}

// Task - 2
// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) {
  console.log(`You are eligible to vote`); // run
} else {
  console.log(`You are not eligible to vote`);
}

// Nested If-Else Statements

// Task - 3
// Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the largest number`);
  } else {
    console.log(`${num3} is the largest number`);
  }
} else if (num2 > num3) {
  console.log(`${num2} is the largest number`);
} else {
  console.log(`${num3} is the largest number`); // 30 is the largest number
}

// Switch Case
// Task - 4
// Write a program to check the day of the week based on a number (1-7) and log the day name using switch case.
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// Task -5
// Write a program that uses a switch case to assign a grade A,B,C,D,F based on a score log the grade.
let score = 80;

switch (true) {
  case (score >= 85 && score <= 100):
    console.log("A");
    break;
  case (score >= 70 && score <= 84):
    console.log("B");
    break;
  case (score >= 60 && score <= 69):
    console.log("C");
    break;
  case (score >= 45 && score <= 59):
    console.log("D");
    break;
  case (score < 45):
    console.log("F");
    break;
  default:
    console.log("Invalid Grading System");
}


// Ternary Operator
// Task -6

// Write a program that uses a ternary operator to check if a number is even or odd and log the result to the console.
let number = 10;
let result = (number % 2 === 0 ) ? `${number} is Even Number` : `${number} is Odd Number`;
console.log(result);

// Combining all conditions
// Task -7
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2021;
let result1 = (year % 4 === 0 && year % 100 !== 0) ? `${year} is a Leap Year` : `${year} is not a Leap Year`
console.log(result1);