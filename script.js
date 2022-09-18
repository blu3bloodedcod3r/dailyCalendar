const past = document.getElementsByClassName('past');
const future = document.getElementsByClassName('future');
const timeBlock = document.getElementsByClassName('time-block');

let dailyTimer = moment().format('LLLL');
let currentTime = $('#currentDay').text(dailyTimer);
let newTask =document.getElementById('To-Do').value;
console.log(newTask)

//want timer to automatically color code based on time of day

function eventTimer (e) {
    e.preventDefault();
    if (currentTime <= dailyTimer) {
        task.addClass("past");
        past.classList.add('past')
    } else if (currentTime >= dailyTimer) {
        task.addClass("future");
        future.classList.add('future')
    };
    //console.log(newTask)
};
console.log(eventTimer)

//save new event to local storage
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener('click', () => {
    //document.querySelectorAll('task').innerHTML = task
    let itemToDo = JSON.parse(localStorage.getItem('newTask'));
    if(newTask) {
        itemToDo = [];
    }
    itemToDo.push('newTask')
    localStorage.setItem("newTask", JSON.stringify(newTask));
    alert('Your new task has been added to your daily schedule.')
    console.log(newTask)
});
