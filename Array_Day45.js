// Input Description:
// First line contains two space separated integers M,N denoting the size of the 2d matrix . Then in the next lines are the space separated values of the matrix mat[ ] [ ] . Constraints: 1<=M,N<=50 ,0<=mat[][]<=1

// Output Description:
// The output will be the number of 0s and number of 1s, displayed separately.

// Sample Input :
// 1 3
// 1 1 1
// Sample Output :
// RAM: 0
// SITA: 3

let i = userInput[0];
let j = userInput[1].split(" ").map(Number);
let sita = j.filter((value,i)=>value===1);
let ram = j.filter((value,i)=>value===0);
 console.log("RAM: "+ram.length+"\n"+"SITA: "+sita.length);