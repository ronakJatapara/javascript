// Q14. Check “Armstrong Number” for any digit length

// 👉 Input: num = 9474
// 👉 Output: Armstrong ✅
// 🧩 Logic: sum of each digit³ = num (for 3 digits), or power by count of digits.

let num = 9474;
let check = num;
let sum = 0;

while(num>0)
{
    let lastDigit = num%10;
    sum += lastDigit*lastDigit*lastDigit*lastDigit
    num = Math.floor(num/10);  
}

if(check==sum)
{
    console.log(check+" is armstrong number");
}
else{
    console.log(check+" is not armstrong number"); 
}








