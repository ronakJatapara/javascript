// 💡 Q5. Find Maximum Digit in a Number

// Example:
// Input: 5938 → Output: 9

// 👉 Use while, %, /, > operator.


let num = 5938;
let max = -Infinity;

while(num>0)
{
    let digit = num%10;

    if(max<digit)
    {
        max = digit;
    }
    num = Math.floor(num/10);
}

console.log(max);
