let a = 10;
let b = 20;
let c = "10";
let d = "20"

// Comparison Operators

console.log(a == b); // false
console.log(a == c); // true
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true

let x = 10;
let y = 2;
console.log(x % y);

let p = 10;
let q = 3;
console.log(p / q);
console.log(++p + ++q);

// Logical Opertators

let m = true;
let n = false;
let o = true;

console.log(m && n);
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(m || n);
console.log(n || o);

// Increment - decrement Operator

var num = 12;

console.log(num++ + ++num); 
console.log(num++ + num++); 

console.log(num++);
console.log(++num);

// loop

for(var i = 0; i < 5; i++)
{
    console.log("I'm learning javaScript", i+1);
}


var i = 0;
while(i < 5)
{
    console.log("I'm learning javaScript while loop", i+1);
    i++;
}


