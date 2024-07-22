let num=[1,2,3,4,5];
let mul=1;



function fact(arr)
{
        let NewArray=arr.map((ele,ind)=>{
            return mul*=ele;
        })
           return NewArray
}
console.log(fact(num));