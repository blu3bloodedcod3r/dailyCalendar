const past = document.getElementsByClassName('past');
const future = document.getElementsByClassName('future');

var dailyTimer = moment().format('LLLL');
$('#currentDay').text(dailyTimer);

//want timer to automatically color code based on time of day
for (var i=0; i < dailyTimer; i++) {
    dailyTimer++;
    if (dailyTimer <= now) {
        element.addClass("past");
        past.classList.add('past')
    } else if (dailyTimer => now) {
        element.addClass("future");
        future.classList.add('future')
    };
    
// want to locally save event in calendar
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener('click', (itemToDo) => {

    var itemToDo = JSON.parse(localStorage.getItem('textArea'));
    itemToDo.push('textArea')
    localStorage.setItem("textArea", textArea)
})

