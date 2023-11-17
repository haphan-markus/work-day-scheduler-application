var currentDay = document.getElementById("currentDay");
var textAreaEl = document.querySelectorAll('textarea'); // Query to select all textarea elements that are used to store the input value
var textBtn = document.querySelectorAll('button'); // Query to select all buttons on the interface - from 9AM to 5PM
var textBtnArrEl = []; // Turn all elements in textBtn into an array of button object
var savetoLocalStorageEl = document.getElementById('save-localstorage');

currentDay.innerHTML = dayjs().format("dddd, MMMM D") + nth(dayjs()) + " " + dayjs().format("YYYY");

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

textBtn.forEach(function(elem){
    var value = document.getElementById(elem.id);
    textBtnArrEl.push(value);
})
console.log(textBtnArrEl);

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

textBtnArrEl.forEach(function(event){
    document.getElementById(event.id).addEventListener('click',function(){
        for (let i = 0; i < textAreaEl.length;i++){
            let text = document.getElementById(textAreaEl[i].id).value;
            eventSchedule[i][1] = text;
        }
        localStorage.setItem("eventSchedule", JSON.stringify(eventSchedule));
        setTime(savetoLocalStorageEl);
    })
})

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

function setTime(i){
    var timeLeft = 1;
    i.setAttribute('class','show');
    setInterval(function(){
        timeLeft--;
        if (timeLeft === 0){
            clearInterval();
            i.setAttribute('class','hide');
        }
    },1000);
}