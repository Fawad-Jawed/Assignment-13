// // Answer 1
var currentDate = new Date()
document.write(currentDate)

// // Answer 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
alert(months[currentMonth]);

// // Answer 3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"]
var currentDate = new Date()
var currentDay = currentDate.getDay()
alert("Today is " + days[currentDay])

document.write("<br>")
document.write("<br>")

// // Answer 4
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
    document.write("It's Fun day");
} else {
    document.write("It's a weekday");
}

document.write("<br>")
document.write("<br>")

// // Answer 5
var currentDate = new Date();
var currentDay = currentDate.getDate();
if (currentDay < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

document.write("<br>")
document.write("<br>")

// // // Answer 6
var jan1_1970 = new Date(1970, 0, 1);
var midnight_jan1_1970 = jan1_1970.setHours(0, 0, 0, 0);
var currentDate = new Date();
var minutes_since_midnight = (currentDate - midnight_jan1_1970) / 60000;
document.write("Current Date: " + currentDate)
document.write("<br>")
document.write("Elapsed minutes since January 1, 1970: " + minutes_since_midnight);

document.write("<br>")
document.write("<br>")

// // Answer 7
var currentDate = new Date();
var time = currentDate.getTime
if (time <= 12) {
    document.write("Its AM")
}else{
    document.write("Its PM")
}

document.write("<br>")
document.write("<br>")

// // Answer 8
var laterDate = new Date(2020, 11, 31);
document.write("Later Date: "+laterDate);

// // Answer 9
var ramadanStart = new Date(2024, 2, 11);
var now = new Date();
var diffInMilliseconds = now - ramadanStart;
var daysPassed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassed);

document.write("<br>")
document.write("<br>")

// // Answer 10
var referenceDate = new Date("January 1, 2015 00:00:00");
var currentDate = new Date();
var elapsedSeconds = Math.floor((currentDate - referenceDate) / 1000);
document.write("Seconds elapsed since the beginning of 2015: " + elapsedSeconds);

document.write("<br>")
document.write("<br>")

// // Answer 11
var hours = now.getHours();
var now = new Date();
now.setHours(hours + 1);
document.write("Updated date and time: "  + now ) 

document.write("<br>")
document.write("<br>")

// // Answer 12
var now = new Date();
now.setFullYear(now.getFullYear() - 100);
document.write("Backed to 100 years: "+now);

document.write("<br>")
document.write("<br>")

// // Answer 13
const age = prompt("What is your age?");
const birthYear = new Date().getFullYear() - age;
document.write("Your birth year is: " + birthYear)

document.write("<br>")
document.write("<br>")

// // Answer 14
var customerName = "Fawad";
var currentMonth = "April";
var unitsConsumed = 140;
var chargesPerUnit = 20;

var netAmountPayable = unitsConsumed * chargesPerUnit;

var latePaymentSurcharge = 200;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write(
    "<h1>K-Electric Bill</h1>" 
    + `Customer Name:  <b>${customerName}</b>`
    + `<br>Current Month:  <b>${currentMonth}</b>`
    + `<br>Number of units: <b>${unitsConsumed}</b>`
    + `<br>Charges per unit: <b>${chargesPerUnit}</b>`
    + `<br><br>Net Amount Payable (within Due Date): <b>${netAmountPayable.toFixed(2)}</b>`
    + `<br>Late Payment Surcharge: <b>${latePaymentSurcharge.toFixed(2)}</b>`
    + `<br>Gross Amount Payable (after Due Date): <b>${grossAmountPayable.toFixed(2)}</b>`
)