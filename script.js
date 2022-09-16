var dailyTimer = moment().format('LLLL');
$('#currentDay').text(dailyTimer);

for (var i=0; i < dailyTimer; i++) {
    dailyTimer++;
}

moment().isBefore(dailyTimer) = $(".past")

// want to locally save event in calendar
function saveEvent(itemToDo) {
    var itemToDo = JSON.parse(localStorage.getItem('textArea'));
    itemToDo.push('textArea')
    localStorage.setItem("textArea", textArea)
}