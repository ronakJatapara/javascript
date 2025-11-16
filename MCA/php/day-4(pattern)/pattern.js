


for(let i = 1; i <= 5; i++)
{      
    // first space 
       let row = "";
       for(let j = 4; j >= i; j--)
       {
        row+= "*";
       }
    // first space 
       

       for(let k = 1;k<=i;k++)
       {
        row+=k;
       }

       for(let l = i-1;l>=1;l--)
       {
        row+=l;
       }

       for(let m=4;m>=i;m--)
       {
        row+="*";
       }
       console.log(row);
       
}

for(let i=4;i>=1;i--)
{
    let row = "";
    for(let k=1;k<=5-i;k++)
    {
        row+="*";
    }
    for(let j=1;j<=i;j++)
    {
        row+=j;
    }
    for(let l=i-1;l>=1;l--)
    {
        row+=l;
    }
    for(let m=1;m<=5-i;m++)
    {
        row+="*";
    }
   
    console.log(row);
    
}