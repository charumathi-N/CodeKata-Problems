// Given 2 numbers N,K followed by N elements print all the elements lesser than K in sorted order.If the elements could not be found print -1
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 5 3
// 1 2 1 4 1
// OUTPUT
// 1 1 1 2


let n = userInput[0].split(" ").map(Number);
let m = userInput[1].split(" ").map(Number);
const res = m.filter((value,i)=>value<n[1]);
console.log(res.sort().toString().replace(/,/g," "));
