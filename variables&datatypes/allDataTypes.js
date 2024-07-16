const num = 2;
const str = "Gaurav";
const bool = true;
const arr = [1,3,4,5];
const obj = {
    name:"Gaurav",
    age:20,
    city:"Patna",
    state:"Bihar",
    country:"India",   
}

// number
console.log(`${num} is: ${typeof num}`);

// string
console.log(`"${str}" is: ${typeof str}`);

// boolean
console.log(`"${bool}" is: ${typeof bool}`);

// array
console.log(`"${arr}" is: ${typeof arr} ${Array.isArray(arr)}`);


// object
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
console.log(`${typeof obj}`);