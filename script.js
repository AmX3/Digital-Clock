var daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function updateTime() {
    //Setting up my variables
    var present = new Date();
    var hour = present.getHours();
    var minute = present.getMinutes();
    var second = present.getSeconds();
    var midday = hour < 12 ? "AM" : "PM";
    var day = present.getDay();
    var date = present.getDate();
    var mon = present.getMonth();
    var year = present.getFullYear();

    //adding leading 0s in front of hrs and minutes
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    //change to Morning, Afternoon and Night based on the time
    document.getElementById("timeOfDay");
    if (hour < 12) {
        timeOfDay.innerHTML = "Good Morning!";
    } else if (hour > 12 && hour < 18) {
        timeOfDay.innerHTML = "Good Afternoon!";
    } else {
        timeOfDay.innerHTML = "Good Night!";
    }

    //syncing it to the document
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("am/pm").innerHTML = midday;
    document.getElementById("day").innerHTML = daysOfTheWeek[day];
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month[mon];
    document.getElementById("year").innerHTML = year;
}

//print time and date once,
updateTime();
setInterval(function () {
    updateTime();
}, 1000);

//changing the appearance of the digitalClock
function toggleButton() {
    var digitalClock = document.querySelector(".digital-clock");
    var face = document.querySelector(".face");
    digitalClock.classList.toggle("dark-mode");
    face.classList.toggle("dark-mode");
}
