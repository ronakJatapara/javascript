let num=[1,2,3,4,5,6,7,8,9,10];



function square(arr)
{
     let NewArray=arr.map((ele,ind)=>{
        return ele*ele;
     })
     return NewArray;

  
  

     



}
console.log(square(num));