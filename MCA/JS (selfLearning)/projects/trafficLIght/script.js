
let red = document.getElementById("red")
let orange = document.getElementById("yellow")
let green = document.getElementById("green")




function main()
{
     
    let redLightSecond = 15;
    let redCircle = false;
    let interval1 = setInterval(()=>{

    document.getElementById("circle").innerHTML=redLightSecond;

 
             document.getElementById("red").style.backgroundColor="red";
             document.getElementById("red").style.boxShadow="0 0 40px red, inset 0 0 25px #ff4d4d";

             document.getElementById("yellow").style.background="black";  
             document.getElementById("yellow").style.boxShadow="none";

             document.getElementById("green").style.background="black";  
             document.getElementById("green").style.boxShadow="none";
            document.getElementById("circle").style.border="3px solid red";
            document.getElementById("circle").style.color="red";
           
            
            if(redCircle==false)
            {
                    document.getElementById("circle").style.backgroundColor = "red";
            }
            else{
                    document.getElementById("circle").style.backgroundColor = "white";
            }

            redCircle = !redCircle


    redLightSecond--;
    
    if(redLightSecond==0)
    {
        clearInterval(interval1);
        yellowFun();
        
    }
    },1000)
     

}


function yellowFun()
{
     
    let yellowLightSecond = 10;
    let yellowCircle = false;
    let interval2 = setInterval(()=>{
    document.getElementById("circle").innerHTML=yellowLightSecond;

  
             document.getElementById("red").style.backgroundColor="black";
             document.getElementById("red").style.boxShadow="none";

             document.getElementById("yellow").style.background="yellow";  
             document.getElementById("yellow").style.boxShadow="0 0 40px yellow, inset 0 0 25px #ffff99";

             document.getElementById("green").style.background="black";  
             document.getElementById("green").style.boxShadow="none";

            document.getElementById("circle").style.border="3px solid yellow";
            document.getElementById("circle").style.color="yellow";

    yellowLightSecond--;

    if(yellowCircle==false)
    {
        document.getElementById("circle").style.backgroundColor = "yellow";    
    }
    else{
        document.getElementById("circle").style.backgroundColor = "white";
    }

    yellowCircle = !yellowCircle

    
    
    if(yellowLightSecond==0)
    {
        clearInterval(interval2);
        yellowLightSecond = 10;
        greenFun();
    }
         

    },1000)
     

}


function greenFun()
{
     
    let greenLightSecond = 5;
    let greenCircle = false;
    let interval3 = setInterval(()=>{
    document.getElementById("circle").innerHTML=greenLightSecond;

  
             document.getElementById("red").style.backgroundColor="black";
             document.getElementById("red").style.boxShadow="none";

             document.getElementById("yellow").style.background="black";  
             document.getElementById("yellow").style.boxShadow="none";

             document.getElementById("green").style.background="green";  
             document.getElementById("green").style.boxShadow="0 0 40px green, inset 0 0 25px #66ff66";

                document.getElementById("circle").style.border="3px solid green";
            document.getElementById("circle").style.color="green";

    greenLightSecond--;

    if(greenCircle==false)
    {
       document.getElementById("circle").style.backgroundColor = "green";
    }
    else{
       document.getElementById("circle").style.backgroundColor = "white";
    }

    greenCircle = !greenCircle

    
    
    if(greenLightSecond==0)
    {
        clearInterval(interval3);
        main();
    }
         

    },1000)
     

}

main()
// if(redLightSecond==0)
//          {
//             clearInterval(interval1);
//             console.log("time over");
            
//          }




// let count = 0;
// let interval = setInterval(()=>{
//     count++;
//     console.log("Hello every second");

//     if(count==5)
//     {
//         clearInterval(interval);
//         console.log("interval cleared");
        
//     }

    
     
// },1000)
