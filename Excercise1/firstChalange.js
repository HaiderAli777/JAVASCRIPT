//Reverse the number
/*
let num = 1234;
let newnum = 0;
let n = 0;
while (num > 0) {
  n = Math.trunc(num % 10);
  console.log(n);
  newnum = newnum * 10 + n;

  num = Math.trunc(num / 10);
}
console.log(newnum);
*/

//Sum The Number
/*
let num = 1234;
let newnum = 0;
let n = 0;
while (num > 0) {
  n = Math.trunc(num % 10);
  console.log(n);
  newnum = newnum + n;

  num = Math.trunc(num / 10);
}
console.log(newnum);
*/

//Palidrome Task
/*
let num = 131;
let oldnum = num;
let newnum = 0;
let n = 0;
while (num > 0) {
  n = Math.trunc(num % 10);
  console.log(n);
  newnum = newnum * 10 + n;

  num = Math.trunc(num / 10);
}

console.log(newnum === oldnum ? "It is Palidrome " : "It is not plaidroem");
*/

//Number Guesser
/*
let n = Math.trunc(Math.random() * 10 + 1);
console.log(n);
let counter = 1;

while (counter) {
  input = Math.trunc(prompt("Enter The number"));

  if (input > n) {
    console.log("The Number is greater");
  }
  if (input < n) {
    console.log("The Number is smaller");
  }
  if (input == n) {
    console.log("The Number is equal You Win ");
    counter = 0;
  }
}
*/
//  input = Math.trunc(prompt("Enter The number"));

// Reverese String
/*
let str = "ABCDEF";
let ch = "";
console.log(str.length);
for (let i = 5; i >= 0; i--) {
  ch = ch + str[i];
}
console.log(ch);
*/

//Task of Fibnonancie
/*
let n = 6;
let res = 0;
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
do {
  res = n1 + n2;
  if (res < 6) {
    console.log(res);
  }
  n1 = n2;
  n2 = res;
} while (res < 6);
*/
