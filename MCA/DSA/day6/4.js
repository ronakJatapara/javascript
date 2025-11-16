    
// These require deep understanding + nested loops + compound operators:

// Q11. Check whether number is “Disarium Number”

// 👉 135 → (1¹ + 3² + 5³ = 135) ✅
// 🧩 Hint:
// Count digits first, then use powers with positions.



let num = 135;
let temp = num;
let count = 0;


while(num>0)
{
    
    count++;
    num=Math.floor(num/10);
}
temp = num;
let sum = 0;

while(num>0)
{
 
    let lastDigit = num%10;
   let  power = Math.pow(lastDigit,count)
    // console.log(power);
    sum += power;
    count--;
    num = Math.floor(num/10);

    // console.log(count);
}

console.log(sum);



