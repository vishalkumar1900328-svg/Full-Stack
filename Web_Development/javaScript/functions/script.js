function sum(a,b){
    let c = a+b;
    console.log(c);
}

sum(5,10);

// ----------------------------------------------------

function sum_with_d(x,y=10){
    console.log(x+y);
}

sum_with_d(7);
sum_with_d(8,20);

// ----------------------------------------------------

function Calculate(a,b,c){
    return a+b-c;
}

let answer = Calculate(5,6,7);
console.log(answer);

// ----------------------------------------------------

// function expression

const greet = function(){
    console.log("Welcome to javaScript");
}

greet();

// Nested loop with rows and columns
console.log("Rows and Columns:");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// Nested loop with different conditions
console.log("Pattern:");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
}