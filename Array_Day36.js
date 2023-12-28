// Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
// Sample Testcase :
// INPUT
// 6 2
// 1 2 3 5 7 8
// OUTPUT
// 0

// Solution:

  n= [6,2];
  m= [1,2,3,5,,8];
  let count=0;
  let k= n[1];
  const result = m.filter(number => number === k);
  console.log(result.length-1);