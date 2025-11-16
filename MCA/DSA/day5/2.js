// Q2. Find the sum of even digits and odd digits separately

// 👉 Input: num = 54873
// 👉 Output:
// Even sum = 12 (4 + 8)
// Odd sum = 15 (5 + 7 + 3)

// 🧩 Hint: Use % 2 == 0 for even digits.

let num = 54873;
let evenSum = 0;
let oddSum = 0;


while(num>0)
{
    let digit = num%10;

    if(digit%2==0)
    {
        evenSum += digit;
    }
    else{
        oddSum += digit;
    }

    num = Math.floor(num/10);
}

console.log(evenSum);
console.log(oddSum);


