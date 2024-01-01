// Given 2 numbers N and K followed by N elements, find the Kth smallest element.If the element cannot be found then print -1
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 5 2
// 1 1 2 4 5
// OUTPUT
// 2

let n = [5,2].filter(value => value !== 0);
m = [1, 1, 2 ,4, 5];
// let res = m.filter((value, i) => m.indexOf(value) !== i);
// console.log(res);
let res = new Set(m);
var arr = Array.from(res);
let res1 = arr.filter((value,i)=>value!=0)
let num = res1.sort();
if(num.includes(n[1]))
{
    console.log(n[1]);
}
else
{
    console.log(-1);
}
