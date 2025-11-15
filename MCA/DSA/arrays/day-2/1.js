// 2. Second Largest Element (No Sort)

// Definition: Array ka doosra sabse bada number find karna.
// Input: [10, 25, 3, 40, 22]
// Expected Output: 25

let arr = [10, 25, 3, 40, 22];
let max = -Infinity;
let Second = max;

for(let i = 0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        Second = max;
        max = arr[i];
    }

    if(arr[i]>Second && arr[i]<max)
    {
        Second = arr[i];
    }
}

console.log(max);
console.log(Second);

