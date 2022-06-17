let sound = new Audio('./sound/novyiy-god-novogodniy-boy-kurantov-28708.mp3');

export let deadline = 'December 31 2022 23:59:59 GMT+02:00'
// export let deadlineTest = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 5 * 1000); // test

export function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

export function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var stopbtn = document.getElementById('stop__btn');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            sound.play();
            clearInterval(timeinterval);
        }
    }

    stopbtn.addEventListener('click', () => {
        console.log('click-stop')
        clearInterval(timeinterval);
    })

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}


