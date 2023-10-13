var myDate = new Date();
    var hrs = myDate.getHours();

    
//Need to determine the constant of some id functions.
//No html function can be used directly in JavaScript
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
function setDate() {
  //The "new Date" method helps to get the current time from the device
  const now = new Date();
  //Now the information of sec, min, hours has to be received from the device
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();
  //As a result, time will always be two characters long
  if (hrs < 10) {
    hours.innerHTML = '0' + hrs;
  } else {
    hours.innerHTML = hrs;
  }

  if (secs < 10) {
    seconds.innerHTML = '0' + secs;
  } else {
    seconds.innerHTML = secs;
  }

  if (mins < 10) {
    minutes.innerHTML = '0' + mins;
  } else {
    minutes.innerHTML = mins;
  }
  month.innerHTML = monthName[mm];
  day.innerHTML = dd;
  year.innerHTML = yyyy;
}

var greet;
    if (hrs >= 0 && <= 4)
        greet = 'Its Early Morning';
   else if (hrs < 12 && >= 4)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 15)
        greet = 'Good Afternoon';
    else if (hrs >= 18 && hrs <= 20)
        greet = 'Good Evening';
    else if (hrs >= 20 && hrs <= 24)
        greet = 'Good Night';


    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>';

setInterval(setDate, 1000);
