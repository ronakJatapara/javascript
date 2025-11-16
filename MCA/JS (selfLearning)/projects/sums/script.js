let price = +prompt("enter the price");
let copy = price;
let mrp = document.getElementById("mrp").innerText = "MRP:- "+price;
let qty = document.getElementById("main").innerText=1;

 if(price==0)
 {
         document.getElementById("mrp").innerText="no items found";
         document.getElementById("main").innerText=0;

 }

 function allRemove()
 {
         price = 0;
         qty = 0;
         document.getElementById("main").innerText=0;
         document.getElementById("mrp").innerText="no items found";  
 }

function plus()
{
         price+=copy;
         document.getElementById("mrp").innerText="MRP:-"+price;
         qty++; 
         document.getElementById("main").innerText=qty;

         if(price==0)
         {
          qty = 0;
          alert("do not increase");
         }   
}

function minus()
{
     if(price==copy)
     {
        alert("do not decrement the price");
     }
     else{
        price-=copy;
        document.getElementById("mrp").innerText="MRP:- "+price;
        qty--;
        document.getElementById("main").innerText=qty;
     }
}

function deleteData()
{
     allRemove();
}
