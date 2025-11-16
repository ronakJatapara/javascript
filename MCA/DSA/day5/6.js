// Q6. Check whether number is Palindrome or not (without string)

// 👉 Input: num = 1221
// 👉 Output: Palindrome ✅
                                                    // METHOD ONE USING CONCATE //
// let num = 221;
// let newNum = num;
// let revNumber = "";

// while(num>0)
// {
//     let lastDigit = num%10;
//     rev = (lastDigit*10)/10;
//     num = Math.floor(num/10);
//     revNumber += lastDigit;


// }

// revNumber = +revNumber;
// if(newNum == revNumber)
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
    
// }    



                                                    // METHOD ONE WITHOU CONCATE //

let num = 1221;
let newNum = num;
let rev = 0;

while(num>0)
{
    let lastDigit = num%10;
    rev = rev*10+lastDigit;
    num = Math.floor(num/10);
}

if(newNum == rev)
{
    console.log("yes");
}
else{
    console.log("no");
    
}










