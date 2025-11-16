// 🧮 Level 3: Hardest (Multi-condition + Math + Logic)
// Q7. Find product of all digits except 0

// 👉 Input: num = 1023405
// 👉 Output: 120 (1×2×3×4×5)

// 🧩 Hint:


let num = 1023405;
let fact = 1;

while(num>0)
{
    let lastDigit = num%10;
    num = Math.floor(num/10);

    if(lastDigit==0)
    {
        continue;
    }
    else{
        fact*=lastDigit;
    }
}

console.log(fact);
