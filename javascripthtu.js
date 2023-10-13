function setDate() {
var myDate = new Date();
    var hrs = myDate.getHours();

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();
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


var greet;
    if (hrs >= 0 && <= 4){
        greet = 'Its Early Morning';}
   else if (hrs > 4  && <= 12){
        greet = 'Good Morning';}
    else if (hrs > 12 && hrs <= 15){
        greet = 'Good Afternoon';}
    else if (hrs > 15 && hrs <= 20){
        greet = 'Good Evening';}
    else if (hrs > 20 && hrs <= 24){
        greet = 'Good Night';}
else{
greet = 'Something went wrong!';
}
var dis = '<b>' + greet + '</b>';
    document.getElementById('lblGreetings').innerHTML = dis;

setInterval(setDate, 1000);
}
