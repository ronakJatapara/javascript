// 🔹 Q4

// Question:
// Check whether number 153 is Armstrong or not (use while loop only).

// Expected Output:
// Armstrong Number

let num = 153;
let newNum = num;
let sum = 0;
let check = false;


while(num!=0)
{
    let cube;

    let digit = num%10;
    cube = digit*digit*digit;
    sum += cube;    // or // sum+=Math.pow(digit,3)
    num = Math.floor(num/10);


    if(sum==newNum)
    {
        check = true
    }
}

if(check)
{
    console.log("yes");
    
}
else{
    console.log("no");
    
}





