const past = document.getElementsByClassName('past');
const future = document.getElementsByClassName('future');
let task = document.getElementById('To-Do')

let dailyTimer = moment().format('LLLL');
$('#currentDay').text(dailyTimer);

//want timer to automatically color code based on time of day
for (var i=0; i < dailyTimer; i++) {
    dailyTimer++;
    document.querySelectorAll('input[text]').innerHTML = task;
    if (task <= dailyTimer) {
        task.addClass("past");
        past.classList.add('past')
    } else if (task >= dailyTimer) {
        task.addClass("future");
        future.classList.add('future')
    };
};

// want to locally save event in calendar
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener('click', () => {
    document.querySelectorAll('name[To-Do]').innerHTML = task
    let itemToDo = JSON.parse(localStorage.getItem('name[To-Do]'));
    if(task) {
        itemToDo = [];
    }
    itemToDo.push('task')
    localStorage.setItem("task", JSON.stringify(task));
    alert('Your new task has been added to your daily schedule.')
    console.log(task)
});




