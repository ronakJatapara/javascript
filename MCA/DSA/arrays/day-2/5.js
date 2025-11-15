// 5. Find Duplicate Elements

// Definition: Array me jo values repeat hoti hain unhe find karna.
// Input: [1, 2, 3, 2, 4, 5, 3]
// Expected Output: [2, 3]



// method 2 //

let arr = [1, 2, 3, 2, 4, 5, 3,4,4,4];

for(let i=0;i<arr.length;i++)
{
    let visited = false;
    for(let j=0;j<i;j++)
    {
        if(arr[i]==arr[j])
        {
            visited = true;
            break;
            
        }
    }

    if(visited == true)
    {
        continue;
    }

    let count = 1;

    for(let k = i+1;k<arr.length;k++)
    {
        if(arr[i]==arr[k])
        {
            count++;
        }
    }

    if(count>1)
    {
    console.log(arr[i]," = ",count);

    }
    
}