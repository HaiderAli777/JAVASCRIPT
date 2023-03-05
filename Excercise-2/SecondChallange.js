//
// Find Pairs
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//sum of pair shoul be equal to 10
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === 10) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }
}
*/

//Find Duplicate
/*
const arr = [1, 2, 3, 11, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let counter = 0;
for (let i = 0; i < arr.length; i++) {
  counter = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      counter++;
    }
  }
  if (counter === 2) console.log(`These are Are Duplicate Element ${arr[i]}`);
}
*/

//Find Unique
/*
const arr = [1, 2, 3, 11, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let counter = 0;
for (let i = 0; i < arr.length; i++) {
  counter = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      counter++;
    }
  }
  if (counter === 1) console.log(`These are Unique Element ${arr[i]}`);
}
*/

// Find Intersection of Two Array
/*
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const arr2 = [1, 2, 23, 211, 23, 24, 25, 26, 27, 28, 0, 12, 13];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      console.log(`${arr1[i]}`);
    }
  }
}
*/

//Reverse An Aray

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length / 2; i++) {
  let n = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = n;
}
console.log(arr);
*/

//Alternate Elememt
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = arr.length / 2 === 0 ? 0 : 1;
console.log(m);

for (let i = 0; i < arr.length - m; i++) {
  var n = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = n;
  i++;
}
console.log(arr);
