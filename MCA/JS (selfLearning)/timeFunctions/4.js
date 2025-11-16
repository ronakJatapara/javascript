// Q4. Print today’s date (1–31) and day name (Sunday–Saturday).
// 🟢 Expected Output:

// Date: 5  
// Day: Sunday


let days = new Date();
let weekDays = ["sunday","monday","tuesDay","wendesday","thursday","friday","saturday"];

let day = days.getDay();
let weekDay = weekDays[day];

console.log(day);
console.log(weekDay);

