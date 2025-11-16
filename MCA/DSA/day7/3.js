// Q13. Check “Harshad Number” (N divisible by sum of digits)

// 👉 Input: num = 18
// 👉 sum = 1+8 = 9 → 18%9 == 0 ✅

let num = 18;
let check = num;
let sum = 0;

while(num>0)
{
    let lastDigit = num%10;
    sum += lastDigit;
    num = Math.floor(num/10);
}

if(check%sum==0)
{
    console.log(check+" is Harshad Number"); 
}
else{
    console.log(check+" is not Harshad Number");
}
