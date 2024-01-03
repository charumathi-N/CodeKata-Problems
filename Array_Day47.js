const num = 5;
const n= [5, 1, 7, 11, 16, 19];
//   const m = n.reverse();
let m = n.sort(function(a,b){return a-b});
let res = [...m].reverse();
let arr=[];
for(let i=0;i<res.length/2;i++)
{
   if(res[i]!=m[i])
   {
   arr.push(res[i]);
   arr.push(m[i]);
   }
   else{
       arr.push(res[i]);
   }
}
console.log(arr.toString().replace(/,/g," "));