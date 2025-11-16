// 🔹 Q6

// Question:
// Check whether number 12321 is palindrome or not.

// Expected Output:
// Palindrome Number



let num = 121;
let newNum = num;
let rev = 0;

while(num>0)
{
    let digit = num%10;
    rev = rev*10+digit;
    num = Math.floor(num/10);
}

if(newNum==rev)
{
    console.log("Palindrome Number");
}
else{
    console.log("Not a Palindrome Number");
    
}
