let num=[1,2,3,4,5,6,7,8,9,10];

function numbers(arr)
{

    let NewArray=arr.filter((ele,ind)=>{
        return ele%2==0;
        
        
    })
    return NewArray;
    function newfunction (arr2)
    {
       let even=arr2.map((ele,ind)=>{
        return ele*ele;
       })
       return even;
    }
    newfunction(NewArray)


}
console.log(numbers(num));