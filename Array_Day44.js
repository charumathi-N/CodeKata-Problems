// n organization named “JPOKS” has a well-maintained library in its own building. Librarian orders and gets books for the library very frequently. Each book which is newly arrived has its own unique serial number. The books initially are placed in descending order. The librarian want to place a new book without disturbing the descending order of books in terms of unique id. Now you must help librarian to find the right spot for placing the book.

// Input Description:
// The first line of program contains integer ‘n denoting no. of books already placed in the shelf. Next line contains n serial number of already placed books. Next line contains integer m denoting no of new books to be placed on the shelf. Next line contains m serial numbers of new book.

// Output Description:
// print the position at which it must be placed

// Sample Input :
// 7
// 95 68 62 58 55 41 30
// 2
// 45 61
// Sample Output :
// 6 4

let n1 = 7; 
  let m1 =[ 95, 68, 62, 58, 55, 41, 30]
  let n2 = 2;
  let m2 = [45,61];
  const res = [];
  for(let i of m2)
  {
      let arr=m1.filter((value,index)=>value>i)
      res.push(arr.length+1);
  }
  console.log(res.toString(" ").replace(/,/g, " "));


