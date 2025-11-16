//  5. Find Second Largest Digit in a Number

// Question:
// Input: 764532
// Output: 2nd Largest = 6

// 🔹 Hint:

// Use % to get digits one by one

// Track max and secondMax

// Compare each digit

let num = 764532;
let max = -Infinity;
let secondMax = -Infinity;

while(num>0)
{
    let lastDigit = num%10;

    if(lastDigit>max)
    {
        max = lastDigit;
    }

    if(lastDigit<max && lastDigit>secondMax)   
    {
        secondMax = lastDigit;
    }
    num = Math.floor(num/10);
}

console.log("last digit = ",max);
console.log("second digit = ",secondMax);

