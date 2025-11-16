let arr1=[1,2,3,21,4];
let arr2=[1,2,3,21,3];

let check = false;

    

for(let i=0;i<arr1.length && arr2.length;i++)
{
   if(arr1[i]!=arr2[i])
   {
    check=true;
    break;
   }

   
}

if(check)
{
    console.log("no");
}
else{
    console.log("yes");
    
}


    // while(arr1[i].length!=)
    // {
    //     if(arr1[i] == arr2[i])
    //     {
    //         check = true;
    //         i++;
    //     }
    // }

    // if(check==true)
    // {
    //     console.log("yes");
        
    // }
    // else{
    //     console.log("no");
        
    // }