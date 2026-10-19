// const ar1 = [1,2,3,4,5];
// let ar2 = [10,20,30,40,50];

// console.log(ar1);
// console.log(ar2);

// ar1[0] = 20;
// console.log(ar1[0]);
// ar2 = 12;
// //ar1 = 10;

// let arr3 = ["Vishal", 302 , "Hello" , 1900328];

// let i;
// for(i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
// }

// // for(var j = -1; j > -arr3.length; i--){
// //     console.log(arr3.at[-i]);
// // }

// // arr3.pop(1900328);
// // console.log(arr3);

// arr3.pop();
// console.log(arr3);

// //////////////// Day - 02

// const arr = [76, 3, 53, 32, 34, 98,11];

// let result = arr.sort((a,b) => (a-b)
// )


///////// from RICR GitHub

const ary = ["Apple", 2.5, 99, "Himacal", "a"];

console.log("With For Each");

var x = ary.forEach((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log("X = ", x);

console.log("With Map");

var x = ary.map((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log("X = ", x);

const ar2 = ["Apple", 2.5, 98, "Himacal", "a", 99];

var F = ar2.filter((item) => item !== 99);

console.log("F = ", F);

var Fi = ar2.find((item) => item === 99);

console.log("Fi = ", Fi);

var Fix = ar2.findIndex((item) => item === 99);

console.log("Fix = ", Fix);

const ar3 = [2, 5, 1, 17, 3, 9, 4, 8];

var s = ar3.sort((a, b) => b-a);

console.log("S = ", s);