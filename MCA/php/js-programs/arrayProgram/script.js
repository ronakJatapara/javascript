
function data()
{
    let arr1 = [];
    let arr2 = [];
    let i;
    let j;
    

         for( let i=1;i<=5;i++)
         {
             let name = document.getElementById("val" + i).value;
             arr1.push(name);
         }
    
         for(let j=6;j<=10;j++)
         {
             let designation = document.getElementById("val"+j).value;
             arr2.push(designation);
         }
    
         document.getElementById("ans").innerHTML =" ";

         for(let k=0;k<arr2.length;k++)
         {
             let visited = false;

             for(let l=0;l<k;l++)
             {
                 if(arr2[k] == arr2[l])
                 {
                  visited = true;
                  break;   
                 }
             }

             if(visited==true)
             {
                 continue;
             }

             let count=1;
             for(let m=k+1;m<arr2.length;m++)
             {
                  if(arr2[k]==arr2[m])
                  {
                     count++;
                  }
             }
        
             if(count>1)
             {
                 for (let x = 0; x < arr1.length; x++) 
                 {
                   if(arr2[x] == arr2[k])
                   {
                        document.getElementById("ans").innerHTML +="Name: "+ arr1[x]+ "  " + x +" " + arr2[x]+"<br>";
                      
                   }
                 }

            
             } 
        
         }

    
    


    

}