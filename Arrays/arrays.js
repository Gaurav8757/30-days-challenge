// Task - 1
const  a = [1,2,3,4,5];
console.log(a);

// Task - 2
console.log(a[0], a[a.length-1]);

// Task - 3
a.push(6, 7);
console.log(a); // 6,7 pushed

// Task - 4
a.pop();
console.log(a); //7 delete

// Task - 5
a.shift();
console.log(a); // 2,3,4,5,6

// Task - 6 
a.unshift(0);
console.log(a); // 0,2,3,4,5,6

// Task - 7
let res = a.map((arr)=> arr**2);
console.log(res); // 2,4,6,8,10,12

// Task - 8
let res1 = a.filter((arr)=> arr%2==0);
console.log(res1); // 0,2,4,6

// Task - 9
let res2 = a.reduce((acc, cur)=> acc+cur);
console.log(res2); // 20  answer comes from unshift fns

// Task - 10
let i;
for (i = 0; i <= a.length-1; i++) {
    console.log(a[i]);
}

// Task - 11
a.forEach((arr) => arr); // This doesn't return anything, just executes the function on each element
console.log(a); 

// Multi-Dimensionl Arrays
const b = [[1,2,3],[4,5,6],[7,8,9]];
console.log(b);
console.log(b[0], b[1], b[2]); // [ 1, 2, 3 ] [ 4, 5, 6 ] [ 7, 8, 9 ]

// Access and Log a specific element from 2-D Arrays
console.log(b[0][0], b[1][1], b[2][2]); //1 5 9