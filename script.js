// Set the date we're counting down to
var countDownDate = new Date("jan 1, 2025 18:40:25").getTime();
var countDownDate1 = new Date("aug 11,2024 13:00:25").getTime();
console.log(countDownDate1);
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var distance1 = now - countDownDate1;
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor(
    (distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML =
    days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
