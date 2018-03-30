// Business Logic
var beepBoop = function(input) {
  if (input === 0) {
    return "Beep!"
  }
};





// User Interface Logic
$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    console.log(input);
    var output = beepBoop(input);
    $("#result").text(beepBoop);
  });
});
