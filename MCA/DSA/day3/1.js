// 🔹 Q2

// Question:
// Count the digits of number 987654321 using while loop.

// Expected Output:
// 9


let number = 944444;
let count = 0;


while(number>0)
{
   number = Math.floor(number/10);
   count++;
}

console.log(count);
