

function light()
{
   document.body.style.backgroundColor="white";
   document.getElementById("img1").style.backgroundColor="white"
   document.getElementById("img2").style.backgroundColor="white"
   document.getElementById("img2").style.display="block"
   document.getElementById("img1").style.display="none"



   
}
function dark()
{
   document.body.style.backgroundColor="black";
   document.getElementById("img2").style.backgroundColor="white"
   document.getElementById("img1").style.backgroundColor="white"
   document.getElementById("img2").style.display="none"
   document.getElementById("img1").style.display="block"

}

dark()