// Input Description:
// The first line contains a positive integer N, denoting the size of the array. The second line contains N positive integers, denoting the face values that appeared when the die was rolled.

// Output Description:
// Print out the singly occurring number.

// Sample Input :
// 5
// 1 1 2 5 5
// Sample Output :
// 2
// Input Description:
// The first line contains a positive integer N, denoting the size of the array. The second line contains N positive integers, denoting the face values that appeared when the die was rolled.

// Output Description:
// Print out the singly occurring number.

// Sample Input :
// 5
// 1 1 2 5 5
// Sample Output :
// 2


const arr = "1 1 2 5 5";
let res = arr.split(" ");
console.log(res);
const count = res.filter((num) => num  === '1');
console.log(count.length);

