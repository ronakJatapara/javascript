// 4. Reverse Array (Without reverse())

// Definition: Array ke elements ka order ulta karna.
// Input: [1, 2, 3, 4, 5]
// Expected Output: [5, 4, 3, 2, 1]

// with array method //



let arr = [1,2,3,4,5];
let newArr = [];

for(let i = 0;i<=arr.length;i++)
{

   newArr.push(arr.pop());
   i=0;
    
    
}

console.log(newArr);










