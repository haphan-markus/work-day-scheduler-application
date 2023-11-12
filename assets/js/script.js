// * Display the current day at the top of the calender when a user opens the planner.
// There is a p with the id="currentDay" in the header, such as Thursday, September 5th, 2023
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMMM D") + nth(dayjs()) + " " + dayjs().format("YYYY");

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


// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page