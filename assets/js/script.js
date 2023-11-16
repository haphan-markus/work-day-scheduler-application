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

var textAreaEl = document.querySelectorAll('textarea'); // Query to select all textarea elements that are used to store the input value

textAreaEl.forEach(function(elem){
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

var textBtn = document.querySelectorAll('button'); // Query to select all buttons on the interface - from 9AM to 5PM
// console.log(textBtn);

var textBtnArr = []; // Turn all elements in textBtn into an array of button object
textBtn.forEach(function(elem){
    var value = document.getElementById(elem.id);
    textBtnArr.push(value);
})
console.log(textBtnArr);


// var btn9 = document.getElementById(textBtnArr[0].id);
// var content = JSON.parse(window.localStorage.getItem("workEvent9AM"));
// document.getElementById(textAreaEl[0].id).value = content
// if (document.getElementById(textAreaEl[0].id).value != content) {
//     ;
// }
// console.log("1" + document.getElementById(textAreaEl[0].id).value);
// console.log("2" + JSON.parse(window.localStorage.getItem("workEvent9AM")));

// btn9.addEventListener('click',function(){
//     console.log(textAreaEl[0].id);
//     let text = document.getElementById(textAreaEl[0].id).value;
//     console.log(text);
//     var workEvent9AM = [];
//     workEvent9AM.push(text);
//     window.localStorage.setItem("workEvent9AM",JSON.stringify(workEvent9AM));
    
// })
// document.getElementById(textAreaEl[0].id).value = JSON.parse(window.localStorage.getItem("workEvent9AM"));
// console.log("Detail: " + JSON.parse(window.localStorage.getItem("workEvent9AM")));
var eventSchedule = JSON.parse(window.localStorage.getItem("eventSchedule")) || [
    ['Event9AM',''],
    ['Event10AM',''],
    ['Event11AM',''],
    ['Event12PM',''],
    ['Event13PM',''],
    ['Event14PM',''],
    ['Event15PM',''],
    ['Event16PM',''],
    ['Event17PM','']
];
for (let i = 0; i < textAreaEl.length;i++) {
    document.getElementById(textAreaEl[i].id).value = eventSchedule[i][1];
}

textBtnArr.forEach(function(event){
    document.getElementById(event.id).addEventListener('click',function(){
        // var eventSchedule = JSON.parse(localStorage.getItem("eventSchedule"));
        for (let i = 0; i < textAreaEl.length;i++){
            let text = document.getElementById(textAreaEl[i].id).value;
            eventSchedule[i][1] = text;
        }
        localStorage.setItem("eventSchedule", JSON.stringify(eventSchedule));
    })
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
// When the button is submitted, the text in textareaEl will be stored into workEvent
// textBtnArr.forEach(function(i){
//     i.addEventListener("submit",function(){
//         let value = parseInt(i.id);
//         textAreaEl.forEach(function(j){
//             if (value === parseInt(j.id)){
//                 j.innerText
//             }
//         })
//     })
// })
// https://stackoverflow.com/questions/29504447/keep-textarea-contents-after-navigating-away-from-page

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

