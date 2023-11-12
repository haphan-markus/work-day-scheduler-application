var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMMM D") + nth(dayjs()) + " " + dayjs().format("YYYY");

var am9 = document.getElementById('09');
var am10 = document.getElementById('10');
var am11 = document.getElementById('11');
var pm12 = document.getElementById('12');
var pm1 = document.getElementById('13');
var pm2 = document.getElementById('14');
var pm3 = document.getElementById('15');
var pm4 = document.getElementById('16');
var pm5 = document.getElementById('17');

var textArea = document.querySelectorAll('textarea');

textArea.forEach(function(elem){
    let value =  parseInt(elem.id);
    console.log(value);
    let textBlock = document.getElementById(elem.id);
    if (value < parseInt(dayjs().format("HH"))) {
        textBlock.classList.add("past");
    } else if (value > parseInt(dayjs().format("HH"))){
        textBlock.classList.add("future");
    } else {
        textBlock.classList.add("present");
    }
})
console.log(textArea[0].id);

console.log(dayjs().format("HH"));
console.log(typeof(dayjs().format("HH"))); // Return as a string

// am9.classList.add("future");
// If the time is smaller than the real time, then put the class of past, present, future.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

function nth(i){
    if ((i > 3) || (i < 21)){
        return "th";
    } else {
        switch(i % 10){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}

console.log(nth(dayjs()));