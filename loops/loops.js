// for loop
// Task -1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Task -2
// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// while loop
// Task-3
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// Task-4
// Write a program to print numbers from 10 to 1 using a while loop.
let j = 10;
console.log("while loop");
while (j >= 1) {
  console.log(j);
  j--;
}

// Do... While Loop
// Task-5
// Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
console.log("do-while");
do {
  console.log(k);
  k++;
} while (k <= 5);

// Task - 6
// Write a program to calculate factorial of a number using a do...while loop.
let num = 5;
let fact = 1;
let steps = ""; // To store the intermediate multiplication steps
do {
  fact *= num;
  steps += num + " * "; // Add the current number and asterisk to the steps string
  num--;
} while (num > 1);

steps += num + " = " + fact; // Add the last multiplication step and the result

console.log(steps); // Output the intermediate steps and the result

// Nested Loops
// Task - 7
// Write a program to print the following pattern using nested loops.
// *
// **
// ***
// ****
// *****
let rows = 5;
console.log("Star-triangle")
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Task - 8
// Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
let l = 1;
while (l <= 10) {
  if (l == 5) {
    l++;
    continue;
  }
  console.log(l);
  l++;
}

// Task - 9
// Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
let m = 1;
console.log("break statement code");
while (m <= 10) {
  if (m == 7) {
    break;
  }
  console.log(m);
  m++;
}
