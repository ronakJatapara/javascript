// 4️⃣ Count how many positive and negative numbers are in the array

// Input: [5, -3, 2, -1, -7, 8]
// Output:
// Positive = 3
// Negative = 3
// ✔️ Use loop + if/else


let arr = [5, -3, 2, -1, -7, 8];
let positive = 0;
let nagative = 0;

for(let i =0;i<arr.length;i++)
{
    if(arr[i]>0)
    {
        positive++;
    }
    else{
        nagative++;
    }
    
}

console.log(positive);
console.log(nagative);

