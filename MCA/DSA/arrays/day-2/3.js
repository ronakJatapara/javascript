// 4. Reverse Array (Without reverse())

// Definition: Array ke elements ka order ulta karna.
// Input: [1, 2, 3, 4, 5]
// Expected Output: [5, 4, 3, 2, 1]

// without array method //


let arr = [1,2,3,4,6];
let left = 0;
let right = arr.length-1;

for(let i = left;i<right;i++)
{
   
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

    left++;
    right--;
    
    
}

console.log(arr);

