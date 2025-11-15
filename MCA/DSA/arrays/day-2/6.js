let a =10;
let b=40;
let c=30;
let max = 0;
let secondMax = 0;


if(a>max)
{
    max =a;
    secondMax = max;
    if(max<b)
    {
        max = b;
    secondMax = max;

        if(max<c)
        {
            max = c;
          secondMax = max;

        }
    }
}

if(a>secondMax && a<max)
{
    secondMax = a;
    if(b>secondMax && b<max)
    {
        secondMax = b;
        if(c>secondMax && c<max)
        {
            secondMax = c;
        }
    }

}


console.log(max);
console.log(secondMax);





/////// baki ///////    