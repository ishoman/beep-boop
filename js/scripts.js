// Business Logic
var beepBoop = function(input) {
  if (input === 0) {
    return "Beep!";
  } else if (input === 1) {
    return "Boop!";
  }
};





// User Interface Logic
$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();

  });
});
