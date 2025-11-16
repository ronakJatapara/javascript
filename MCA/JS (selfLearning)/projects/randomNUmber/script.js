let attempt = 3;
document.getElementById("try").innerHTML="You have attepmts:- " +attempt;


function numberGenerate()
{
    attempt--;
    let num = document.getElementById("num").value;
    
    let randomNumber = Math.floor(Math.random()*10);
    document.getElementById("numGen").innerHTML=randomNumber;

   
   if (/^[A-Z]/.test(num)) {
    document.getElementById("text").innerHTML = "Only numbers allowed";
    document.getElementById("numGen").innerHTML = "";
   }
   else if(/^[a-z]/.test(num))
   {
     document.getElementById("text").innerHTML = "you dont use lowercase";
    document.getElementById("numGen").innerHTML = "";
   }
   else if(/^[@!#$%^&*()_+:',.]/.test(num))
   {
    document.getElementById("text").innerHTML = "you cant use symbol";
    document.getElementById("numGen").innerHTML = "";
   }
    else if(num<0 || num>10)
    {
        document.getElementById("text").innerHTML="please check the number";
        document.getElementById("numGen").innerHTML="";
    }
   else if(num != randomNumber)
   {
    document.getElementById("text").innerHTML = "number not matched";
   
    document.getElementById("try").innerHTML=attempt
    // document.getElementById("numGen").innerHTML = "";
   }
   else{
    
       document.getElementById("text").innerHTML = "congratulation your number matched";  
   }


   if(num==randomNumber)
   {
    document.getElementById("text").innerHTML = "🎉 Congratulations! Your number matched.";
    attempt=3
   }
   else{
      if(attempt<=0)
      {
        document.getElementById("text").innerHTML = "⛔ Game over! No attempts left.";
        attempt=3   
      }
      else if(attempt<=0 )
      {
        attempt=3;
      }

      
   }

   
    
    
}

    
