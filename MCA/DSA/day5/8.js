// Q8. Check whether a number is “Spy Number”

// 👉 Definition: Sum of digits == Product of digits
// 👉 Example: 1124 → sum=8, product=8 ✅

// 🧩 Output: Spy Number


let num = 1124;
let sum = 0;
let mul = 1;

while(num>0)
{
    let lastDigit = num%10;
    num = Math.floor(num/10);

    sum += lastDigit;
    mul *= lastDigit;
}

if(sum == mul)
{
    console.log("yes");
}
else{
    console.log("no");
    
}
