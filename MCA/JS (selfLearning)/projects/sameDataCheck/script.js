
function check()
{
    let arr1 = [];
    let arr2 = [];

    for(let i=1;i<=5;i++)
    {
        let name = document.getElementById("inp"+i).value;
        arr1.push(name);
    }

     for(let i=6;i<=10;i++)
    {
        let designation = document.getElementById("inp"+i).value;
        arr2.push(designation);
    }

    
    for(let i=0;i<arr2.length;i++)
    {
        for(let j=i+1;j<arr2.length;j++)
        {
            if(arr2[i]==arr2[j])
            {
                  document.getElementById("output").innerHTML += "<p>" + arr2[i] + " :- " + i + " , " + arr1[i] ;
                  document.getElementById("output").innerHTML += "<p>" + arr2[i] + " :-  " + j + " , " + arr1[j] ; 
            }
        }
    }

    

}







    
