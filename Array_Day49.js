// Given a number N and an array of N elements, find the length of the longest repeating sequence of the elements.If no such sequence is found print -1
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 8
// 1 2 2 2 3 4 5 6
// OUTPUT
// 3

let n = userInput[0];
let m = userInput[1].split(" ").map(Number);
const duplicates = [];
for (let i = 0; i < m.length; i++) {
  for (let j = i + 1; j < m.length; j++) {
    if (m[i] === m[j] && !duplicates.includes(m[i])) {
      duplicates.push(m[i]);
    }
  }
}
let occurrences={};
for(let i=0;i<duplicates.length;i++)
{
  for (const element of m) {
      occurrences[element] = (occurrences[element] || 0) + 1;
  }
}
let maxKey = null;
  let maxValue = Number.NEGATIVE_INFINITY;

  for (const [key, value] of Object.entries(occurrences)) {
      if (value > maxValue) {
          maxKey = key;
          maxValue = value;
      }
  }

if(maxValue=="-Infinity"){
    console.log("-1");
}
else{
    console.log(maxValue);
}
