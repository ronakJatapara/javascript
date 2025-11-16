// ⭐ Easy Level (2 Questions)
// 1️⃣ Count how many even numbers are in the array

// Input: [1, 2, 3, 4, 5, 6]
// Output: 3
// ✔️ Must use: loop + if condition

let arr = [1,2,3,4,5,6];
let Count = 0;

for(let i = 0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        Count++;
    }
}

console.log(Count);
