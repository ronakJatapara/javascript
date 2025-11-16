// Check if a number is palindrome or not
// 👉 Input: 121
// 👉 Output: Palindrome
// 👉 Input: 123
// 👉 Output: Not Palindrome

let num = 123;
let temp = num;
let rev = 0;

while(num!=0)
{
    let lastDigit = num%10;
    rev = rev*10+lastDigit;
    num = Math.floor(num/10);

}



if(rev == temp)
{
    console.log("Palindrome");
}
else{
    console.log("not Palindrome");
    
}