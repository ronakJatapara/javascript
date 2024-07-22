let obj={
    name:"ronak",
    Number:8792297844,
    age:20

}

obj.greeting=function(){
    console.log("hello ronak");
}
obj.greeting2=function(){
    console.log(`hello sir,${this.name}`);
}
console.log(obj.greeting());
console.log(obj.greeting2());
