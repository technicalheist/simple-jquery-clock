/**
 * @title Clock Timer
 * @author Technical Heist
 * @description : A very simple clock example using jquery
 * */

var sec = 86390;
function pad(val) {
  return val > 9 ? val : "0" + val;
}
setInterval(function() {
  $("#seconds").html(pad(++sec % 60));
  $("#minutes").html(pad(parseInt(sec / 60, 10) % 60));
  $("#hour").html(pad(parseInt(sec / 3600, 10) % 24));
}, 1000);
