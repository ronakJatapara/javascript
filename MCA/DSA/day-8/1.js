// 🧩 Q1. Find the second largest digit in a number

// 👉 Input: num = 58362
// 👉 Output: Second Largest = 6
// (Hint: Track max1 and max2 in loop)

let num = 58362;
let max = -Infinity;
let sLarge = -Infinity;

while(num>0)
{
    let lastDigit = num%10;
    if(lastDigit>max)
    {
        sLarge = max;
        max = lastDigit;
    }

    else if(lastDigit<max   && lastDigit>sLarge)
    {
        sLarge = lastDigit;
    }
    num = Math.floor(num/10);
}

// console.log(max);
console.log(sLarge);



//  8 > 0  and  8 > 0