// ⭐ Hard Level (1 Question)
// 5️⃣ Find the second largest number using only loops + conditions

// Input: [10, 25, 3, 40, 22]
// Output: 25
// ✔️ No sort
// ✔️ No functions
// ✔️ Only 1 loop or 2 loops allowed

let arr=[10, 25, 3, 40, 22];
let max = -Infinity;
let secondMax = -Infinity;


for(let i = 0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        secondMax = max;
        max = arr[i];
    }
      
    if(arr[i]>secondMax && arr[i]<max)
    {
       secondMax = arr[i];
    }

    // secondmax < max && secondmax>arr[i]

   

}

console.log(max);
console.log("second ",secondMax);

