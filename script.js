const past = document.getElementById('past');
const present = document.getElementById('present');
const future = document.getElementById('future');
const timeBlock = document.getElementsByClassName('time-block');


let dailyTimer = $('#currentDay').text(moment().format('LLLL'));

//want timer to automatically color code based on time of day

// declare  function eventTimer()

// get current hours
// let currentTime = moment().hours()

// loop over times

// inside loop, check to see if we've moved past time

function eventTimer() {

    var currentTime = moment().hours();
    //console.log(currentTime)

    $('.time-block').each(function() {
        let hourBlock = parseInt($(this).attr('id'));
        //console.log(hour)
        if (hourBlock < currentTime) {
            $(this).addClass("past");
        
        } else if (hourBlock === currentTime) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        };
    });
};

eventTimer();
//console.log(eventTimer)

//save new event to local storage
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener('click', () => {
    let newTask = document.getElementById('To-Do').value;
    localStorage.setItem('newTask', newTask);

    let taskFromStore = localStorage.getItem('newTask');
    //console.log(taskFromStore)
    alert('Your new task has been added to your daily schedule.')
});

