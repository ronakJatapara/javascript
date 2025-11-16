// Find the difference between the sum of even and odd digits

// 👉 Input: num = 785463
// 👉 Output: Difference = 3

// 🧩 Logic:
// sumEven - sumOdd


let num = 785463;
let oddSum = 0;
let evenSum = 0;
let dif = 0;
while(num > 0 )
{
    let LastDigit = num%10;

    if(LastDigit%2==0)
    {
        evenSum += LastDigit;
    }
    else{
        oddSum += LastDigit;
    }

    num = Math.floor(num/10);
}

dif = Math.abs(evenSum-oddSum);
console.log(dif);


// if(evenSum>oddSum)
// {
//     dif = evenSum - oddSum
//     console.log("difference between evensumm and oddsum = "+dif);

// }
// else{
//     dif = oddSum - evenSum
//     console.log("difference between oddsumm and evensum = "+dif);

// }



