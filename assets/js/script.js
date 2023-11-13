var am9 = document.getElementById('09');
var am9 = document.getElementById('09');
var am10 = document.getElementById('10');
var am11 = document.getElementById('11');
var pm12 = document.getElementById('12');
var pm1 = document.getElementById('13');
var pm2 = document.getElementById('14');
var pm3 = document.getElementById('15');
var pm4 = document.getElementById('16');
var pm5 = document.getElementById('17');

var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMMM D") + nth(dayjs()) + " " + dayjs().format("YYYY");

var textArea = document.querySelectorAll('textarea'); // Query to select all textareas that are used to store the input value

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

var textBtn = document.querySelectorAll('button'); // Query to select all buttons on the interface - from 9AM to 5PM
console.log(textBtn);

var textBtnArr = [];
textBtn.forEach(function(elem){
    var value = document.getElementById(elem.id);
    textBtnArr.push(value);
}) // Turn all elements in textBtn into an array of button object
console.log(textBtnArr);

var workEvent9AM = [];
var btn9 = document.getElementById(textBtnArr[0].id);
console.log(btn9);
btn9.addEventListener('click',function(){
    console.log(textArea[0].id);
    let text = document.getElementById(textArea[0].id).value;
    console.log(text);
    workEvent9AM.push(text);
    window.localStorage.setItem("workEvent9AM",JSON.stringify(workEvent9AM));
})


// var workEvent = {
//     '9AM': am9.innerHTML,
//     '10AM': am10.innerHTML,
//     '11AM': am11.innerHTML,
//     '12PM': pm12.innerHTML,
//     '13PM': pm1.innerHTML,
//     '14PM': pm2.innerHTML,
//     '15PM': pm3.innerHTML,
//     '16PM': pm4.innerHTML,
//     '17PM': pm5.innerHTML
// }
// window.localStorage.setItem("workEvent",JSON.stringify(workEvent));
// console.log(workEvent);
// When the button is submitted, the text in textarea will be stored into workEvent
// textBtnArr.forEach(function(i){
//     i.addEventListener("submit",function(){
//         let value = parseInt(i.id);
//         textArea.forEach(function(j){
//             if (value === parseInt(j.id)){
//                 j.innerText
//             }
//         })
//     })
// })


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

