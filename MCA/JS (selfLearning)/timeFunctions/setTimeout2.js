// Q2. setTimeout નો ઉપયોગ કરીને "Time's up!" 3 સેકન્ડ પછી print કરો, પરંતુ તેને cancel પણ કરો.
// 🟢 Expected Output:

// Timeout cancelled


let timer = setTimeout(()=>{
   console.log("time's up");
   
},3000);

clearTimeout(timer);
console.log("time is over");
