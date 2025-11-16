// 🔹 setInterval() Questions

// Q3. 1 સેકન્ડ마다 "Hello every second" print કરો, 5 વખત પછી stop કરો.
// 🟢 Expected Output:

// Hello every second
// Hello every second
// Hello every second
// Hello every second
// Hello every second
// Interval cleared

let count = 0;
let interval = setInterval(()=>{
    count++;
    console.log("Hello every second");

    if(count==5)
    {
        clearInterval(interval);
        console.log("interval cleared");
        
    }

    
     
},1000)