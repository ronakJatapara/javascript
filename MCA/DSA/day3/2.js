// Question:
// Find the sum of digits of number 123456789.

// Expected Output:
// 45

let number = 123456;
let sum = 0;


while(number>0)
{
    let digit = number%10;
    sum+=digit;
    number = Math.floor(number/10);
}

console.log(sum);





