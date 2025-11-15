// 5. Find Duplicate Elements

// Definition: Array me jo values repeat hoti hain unhe find karna.
// Input: [1, 2, 3, 2, 4, 5, 3]
// Expected Output: [2, 3]

let arr = [1, 2, 3, 2, 4, 5, 4, 3];
let newArr=[];


for(let i =0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            newArr.push(arr[i]);
        }
    }
}

console.log(newArr);
console.log(arr);

for(let i=0;i<newArr.length;i++)
{
let count = 0;

    for(let j=0;j<arr.length;j++)
    {
        if(newArr[i]==arr[j])
        {
            count++;
            
        }
      
    }
    console.log(newArr[i]," = ",count);
}

