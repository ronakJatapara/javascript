// find how many zero in 6 digit number 


//////// method 1 ////////

// let num = 100000;
// let rem,div,count=0;


// while(num!=0)
// {
//     div = num/10;
//     rem = num%10;
//     num=div;

//     if(rem == 0)
//     {
//         count++;
//     }
// }

// console.log("count = ",count);

//////// method 1 ////////


let num = 100000;
let rev,count=0;

while(num!=0)
{
    let lastDigit = num%10;
    rev = rev*10+lastDigit;
    num = Math.floor(num/10);

    if(lastDigit == 0)
    {
        count++;
    }
}

console.log(count);
