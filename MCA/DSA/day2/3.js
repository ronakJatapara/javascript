// 7️⃣ Reverse a Number

// Definition: Ek number ko reverse karo using while loop.
// Expected Output (Example, Number=1234):

// 4321


let num = 1234;
let rev = 0
let number = "";

while(num!=0)
{
    let digit = num%10;
    rev = (10*digit)/10;
    num = Math.floor(num / 10);
    
    number += rev;
}

console.log(parseInt(number));
console.log(typeof(parseInt(number)));







//   let digit = num%10;
//     rev = rev*10+digit;
//     num = Math.floor(num/10)

