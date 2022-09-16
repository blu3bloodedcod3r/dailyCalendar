const past = document.getElementsByClassName('past');
const future = document.getElementsByClassName('future');

var dailyTimer = moment().format('LLLL');
$('#currentDay').text(dailyTimer);

//want timer to automatically color code based on time of day
for (var i=0; i < dailyTimer; i++) {
    dailyTimer++;
    if (dailyTimer <= now) {
         return past.classList.add('past')
    } else (dailyTimer => now) {
        return future.classList.add('future')
    }
}

//moment().isBefore(dailyTimer) = $(".past")

// want to locally save event in calendar
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener('click', (itemToDo) => {

    var itemToDo = JSON.parse(localStorage.getItem('textArea'));
    itemToDo.push('textArea')
    localStorage.setItem("textArea", textArea)
})

