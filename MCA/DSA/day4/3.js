// 🧮 Q6. Sum of Digits Until Single Digit Remains

// Example:
// Input: 9875 → 9+8+7+5=29 → 2+9=11 → 1+1=2

// 👉 Use nested while loops and if conditions.



let num = 9875;
let sum = 0;



while(num>0)
{
   let count = 0;
   let digit = num%10;
   sum = sum+digit
   num = Math.floor(num/10);


   while(sum>0)
   {
       let sumDigit = sum%10;
       sum = Math.floor(sum/10);
       count++; 
   }

   console.log(count);
   

    
}




// while(sum>0)
// {
//     let sumDigit = sum%10;

// }


