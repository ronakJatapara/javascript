// Q3. Count how many digits are divisible by 3 in a number

// 👉 Input: num = 936152
// 👉 Output: 3 digits divisible by 3

// 🧩 Hint: digit % 3 == 0Q3. Count how many digits are divisible by 3 in a number

// 👉 Input: num = 936152
// 👉 Output: 3 digits divisible by 3

// 🧩 Hint: digit % 3 == 0

let num = 936152;
let count = 0;

while(num>0)
{
    let digit = num%10;

    if(digit%3==0)
    {
        count++
    }

    num = Math.floor(num/10);
}

console.log(count);
