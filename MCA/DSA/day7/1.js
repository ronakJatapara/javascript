let num = 135;
let check = num;
let count = 0;

while(num>0)
{
    count++;
    num = Math.floor(num/10);
}
num = check;
    let sum = 0;

while(num>0)
{
    let lastDigit = num%10;
    let power = Math.pow(lastDigit,count);
    count--;
    sum += power;
    
    num = Math.floor(num/10); 
}

if(check == sum)
{
    console.log(check+" is Disarium Number");
}
else{
    console.log(check+ "is not Disarium Number");
}

