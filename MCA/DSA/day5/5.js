// Q5. Reverse the number but skip all 0s

// 👉 Input: num = 1023040
// 👉 Output: 4321


let num = 1023040;
let rev = 0;

while(num!=0)
{
    let digit = num%10;
    num = Math.floor(num/10);
    

    if(digit==0)
    {
        continue;   
    }
    else{
        rev = rev*10+digit;    
    }    
}

console.log(rev);
