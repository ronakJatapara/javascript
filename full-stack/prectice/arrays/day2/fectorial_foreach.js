function num(arr)
{
    let mul=1;

      arr.forEach((ele,ind) => {

        mul*=ele;
      });

      console.log(mul);

}
num([1,2,3,4,5])