// 2️⃣ Find the sum of all elements of an array

// Input: [5, 10, 15]
// Output: 30
// ✔️ Must use: loop + addition operator

let arr = [5,10,15];
let sum =0;

for(let i = 0; i<arr.length;i++)
{
    sum+=arr[i];
}

console.log(sum);
