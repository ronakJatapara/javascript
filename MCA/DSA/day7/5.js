// Q15. Find “Super Digit” using while loop only

// 👉 Input: 9875 → 9+8+7+5=29 → 2+9=11 → 1+1=2
// 👉 Output: 2

let num = 9875;


while(num>9)
{
    let sum = 0;
    while(num>0)
    {
        let lastDigit = num%10;
        sum+=lastDigit;
        num = Math.floor(num/10);
    }
    num = sum;
}

console.log(num);
