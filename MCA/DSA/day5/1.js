// 🧮 Q6. Sum of Digits Until Single Digit Remains

// Example:
// Input: 9875 → 9+8+7+5=29 → 2+9=11 → 1+1=2

// 👉 Use nested while loops and if conditions.


let num = 9875;

while(num>9)
{
    let sum = 0;
    while(num>0)
    {
        let digit = num%10;
        sum += digit;
        num = Math.floor(num/10);
    }

    num = sum;
}

console.log(num);
