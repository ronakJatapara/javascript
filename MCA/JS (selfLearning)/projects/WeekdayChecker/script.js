function getDay()
{

   let date = document.getElementById("date").value;

   let newDate = new Date(date);
   let weekNames = ["Sunday","Monday","Tuesday","WednesDay","Thurday","Friday","Saturday"];

   let bDate = newDate.getDay()
   let dayName = weekNames[bDate];

   document.getElementById("msg").innerHTML = dayName;
   
   if(date==="")
   {
    document.getElementById("birthDay").style.display="none";
    document.getElementById("msg").innerHTML = "please enter the date";

    
   }
   else{
    document.getElementById("birthDay").innerHTML="your day is";
   }
}
    
