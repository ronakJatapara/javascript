// Find the first and last digit of a number
// 👉 Input: 4521
// 👉 Output: First = 4, Last = 1

let num = 4521;
let rev = 0;
let num2 = num;
let last = false;

// without array //

while(num!=0)
{
    let lastDigit = num%10;
    last = lastDigit
    num = Math.floor(num/10);

    if(last == true)
    {
        // last = true;
        break;
    }
    
}
console.log("lastDigit = "+last);


while(num2!=0)
{
    let lastDigit = num2%10;
    rev = rev*10+lastDigit;
    num2 = Math.floor(num2/10); 
    first = lastDigit;
 
     
    }
    console.log( "first digit = "+first);

// without array //







