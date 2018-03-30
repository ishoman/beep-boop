// Business Logic
var beepBoop = function(input) {
  if (input === 0) {
    return "Beep!";
  } else if (input === 1) {
    return "Boop!";
  } else if (input % 3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that."
  }

};





// User Interface Logic
$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();

  });
});
