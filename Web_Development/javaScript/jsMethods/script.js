const str = "Vishal Kumar";
console.log(str.charAt(5));
console.log(str.at(5));


const arr = [10, 20, 30, 14, 12, 123, 124];
console.log(arr[3]);
console.log(arr.at(3));


const str2 = str.slice(2,9);
console.log(str2);

const str_sub = str.substring(4,10);
console.log(str_sub);

const str_trim = str.trim(2,6);
console.log(str_trim);

const str_Upper = str.toUpperCase(str);
console.log(str_Upper);

const str_Lower = str.toLowerCase(str);
console.log(str_Lower);

const str_include = str.includes("isha");
console.log(str_include);

const str_end = str.endsWith("ar");
console.log(str_end);

const str_start = str.startsWith("visha")
console.log(str_start);

const str_replace = str.replace("a","i");
console.log(str_replace);

const str_replaceAll = str.replaceAll("a","i");
console.log(str_replaceAll);

const str_Repeat = str.repeat((5));
console.log(str_Repeat);

const str_index = str.indexOf("a");
console.log(str_index);

const str_lastindex = str.lastIndexOf(str);
console.log(str_lastindex);


const marks = "83.6";
const fee = "22000";

console.log(Number.parseInt(fee));
console.log(Number.parseFloat(marks));
console.log(Number.isInteger(marks));
console.log(Number.isFinite(marks));
console.log(Number.isSafeInteger(marks));
console.log(Number.isSafeInteger(fee));

// To get random number

const a = Math.random();
console.log(a);

const b = Math.random












