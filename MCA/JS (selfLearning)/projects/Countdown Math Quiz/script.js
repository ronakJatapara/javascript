
let generateValue;
let generateSign;



function num1()
{
    let selectSign = document.getElementById("selectSign").value;

    let num1= Math.floor(Math.random()*10);
    document.getElementById("num1").innerHTML=num1;

    let num2= Math.floor(Math.random()*10);
    document.getElementById("num2").innerHTML=num2;
    


   generateValue = { num1, num2};
   generateSign = selectSign;

}


function check()
{
    if(!generateSign || !generateValue)
    {
      document.getElementById("ans").innerHTML="error"
        // return;   
    }
    else{
      document.getElementById("ans").innerHTML=" "

    }
   
    let firstValue = generateValue.num1;
    let secondValue = generateValue.num2;
    let signValue = generateSign;
    let yAns = document.getElementById("yAns").value;
    let total;

    


    switch(signValue)
    {
        case "+":
            
            setTimeout(()=>{
                total = firstValue+secondValue;
                document.getElementById("opAns").innerHTML= total;
            if(yAns!=total)
            {
                document.getElementById("ans").innerHTML="wrong";
                
            }
            else{
            document.getElementById("ans").innerHTML="correct";

                
            }
            },5000)

            
            break;

            
            
    }
    // console.log(typeof(firstValue));



    
               
                
            

   

    
}





