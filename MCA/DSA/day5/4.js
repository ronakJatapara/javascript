// ⚙️ Level 2: Very Hard (Nested logic + Compound conditions)
// Q4. Check whether a number is "Strong Number"

// 👉 Example: 145 → (1! + 4! + 5!) = 145 ✅
// 👉 Output: “Strong Number”

let num = 145;
let newNum = num;
let sum = 0;

while(num>0)
{
    let fact = 1;
    let digit = num%10;

    num = Math.floor(num/10);
     
    while(digit > 0)
    {
        fact *= digit;
        digit--;
    }

    sum += fact;
          
}
    
if(newNum == sum)
{
    console.log("Strong Number");
}
else{
    console.log("Not a Strong Number");
}
