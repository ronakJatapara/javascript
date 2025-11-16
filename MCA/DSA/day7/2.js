// Q12. Find the smallest and largest digit in the number

// 👉 Input: num = 749326
// 👉 Output: min = 2, max = 9

let num = 749326;
let min = Infinity;
let max = -Infinity;

while(num>0)
{
    let lastDigit = num%10;
    if(lastDigit<min)
    {
        min = lastDigit;
    }

    if(lastDigit>max)
    {
        max = lastDigit;
    }
    num = Math.floor(num/10);
}

console.log(min);
console.log(max);

