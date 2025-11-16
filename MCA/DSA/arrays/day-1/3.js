//     ⭐ Medium Level (2 Questions)
// 3️⃣ Find the largest number in the array (without max method)

// Input: [12, 4, 8, 20, 9]
// Output: 20
// ✔️ Only loop + comparison operators

let arr=[12, 4, 8, 20, 9];
let max = -Infinity;

for(let i = 0; i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max = arr[i];
    }
}

console.log(max);
