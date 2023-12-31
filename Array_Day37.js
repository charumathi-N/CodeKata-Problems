// Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
// Sample Testcase :
// INPUT
// XCODE
// OUTPUT
// XOE CD

n= userInput[0].split("");
let res1=[],res2=[];
for(let i in n)
{
   (i%2!==0)?res1.push(n[i]):res2.push(n[i]);
}
console.log(res2.toString(" ").replace(/,/g,"")+ " "+res1.toString(" ").replace(/,/g,""));