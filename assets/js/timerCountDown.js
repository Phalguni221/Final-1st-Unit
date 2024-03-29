
// Set the date we're counting down to
var countDownDate = new Date(Date.now() + 122000).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((distance % (1000 * 60 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s" ;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time's Up!";
  }
}, 1000);

// window.setTimeout(function() {
//   window.location.href = 'game.html';
// }, 115000);

// var timeoutHandle = window.setTimeout(...);

// window.clearTimeout(timeoutHandle);

// timeoutHandle = window.setTimeout(...);