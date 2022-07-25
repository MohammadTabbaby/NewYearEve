const daysEL = document.getElementById("days");
const HoursEL = document.getElementById("Hours");
const MinutesEL = document.getElementById("Minutes");
const SecondsEL = document.getElementById("Seconds");

const newyear = "01 Jan" + (new Date().getFullYear() + 1);


function count() {

    const newyearDate = new Date(newyear);
    const CurrentDate = new Date();
    const TotalSeconds = Math.trunc((newyearDate - CurrentDate) / 1000);

    const days = Math.trunc(TotalSeconds / 3600 / 24);
    const hours = Math.trunc(TotalSeconds / 3600) % 24;
    const minutes = Math.trunc(TotalSeconds / 60) % 60;
    const seconds = Math.trunc(TotalSeconds) % 60;
    //console.log(days, hours, minutes, seconds);

    daysEL.innerHTML = days;
    HoursEL.innerHTML = addzeros(hours);
    MinutesEL.innerHTML = addzeros(minutes);
    SecondsEL.innerHTML = addzeros(seconds);

}
function addzeros(time) {
    return time < 10 ? (`0${time}`) : time;
}


setInterval(count, 1000);
