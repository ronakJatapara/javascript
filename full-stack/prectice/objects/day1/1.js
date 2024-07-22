let sym= Symbol("rwr1");
let FirstObj={
    Name:"Ronak",
    "Full Name":"Ronak jatapara",
    Age :20,
    [sym]:"red and white",
    Address : "Botad",
    Email: "ronak@google.com"
}
console.log(typeof FirstObj.Name);   // this is right but not 100%
console.log(typeof FirstObj.Age);
// console.log(FirstObj.Fullname);  // object ne aa rite access kari sakase nahi tethi
console.log(FirstObj["Full Name"]); // aetle object ne aavi rite access karvu vadhare saru rehase

console.log( typeof FirstObj[sym]);


FirstObj.Email="ronakjatapara123456@gmail.com";
  console.log(FirstObj);
//   Object.freeze(FirstObj);
// FirstObj.Email="ronakjatapara654321@gmail.com";





