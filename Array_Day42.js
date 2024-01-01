  
  n = 5;
  m = [1, 2, 3, 1, 5];
  // let res = m.filter((value, i) => m.indexOf(value) !== i);
  // console.log(res);
  let res = new Set(m);
  var arr = Array.from(res);
  
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--; // Decrement i to account for the removed element
    }
  }
  
  console.log(arr);