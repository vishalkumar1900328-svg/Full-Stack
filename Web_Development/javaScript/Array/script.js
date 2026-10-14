const ar1 = [1,2,3,4,5];
let ar2 = [10,20,30,40,50];

console.log(ar1);
console.log(ar2);

ar1[0] = 20;
ar2 = 12;
//ar1 = 10;

let arr3 = ["Vishal", 302 , "Hello" , 1900328];

let i;
for(i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}

// for(var j = -1; j > -arr3.length; i--){
//     console.log(arr3.at[-i]);
// }

// arr3.pop(1900328);
// console.log(arr3);

arr3.pop();
console.log(arr3);