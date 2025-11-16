// Basic While Loop DSA Questions (No Nested While)

// Count digits in a number
// 👉 Input: 12345
// 👉 Output: 5
// (Hint: number ko 10 se divide karte jao, count++ karte jao)

let num = 12345;
let rev,count=0;

while(num!=0)
{
    let lastDigit = num%10;
    rev = rev*10+lastDigit;
    num = Math.floor(num/10);
    count++;
}

console.log("count = "+count);
