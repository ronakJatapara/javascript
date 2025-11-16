// ⚖️ Q4. Count Even and Odd Digits in a Number

// Example:
// Input: 2345 → Even = 2, Odd = 2

// 👉 Use while, %, /, if–else conditions.


let num = 2345;
let evenCount = 0;
let oddCount = 0;

while(num>0)
{
    let digit = num%10;

    if(digit%2==0)
    {
        evenCount++;
    }
    else{
        oddCount++;
    }

    num = Math.floor(num/10);
}
console.log("even number = "+ +evenCount);
console.log("odd number = "+ +oddCount);

