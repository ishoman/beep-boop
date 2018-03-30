// Business Logic
var beepBoop = function(input) {
  // var inputArray = input.toString().split("");
  // console.log(inputArray);
  if (input % 3 === 0 && input !== 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (input === 1) {
    return "Boop!";
  } else if (input === 0){
    return "Beep!";
  }

};





// User Interface Logic
$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();

  });
});
