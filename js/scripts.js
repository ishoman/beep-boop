// Business Logic
var beepBoop = function(input) {
// debugger;
  var beepBoopResult = "";
  var countTo = parseInt(input);
  if (input % 3 === 0 && input !== 0) {
    beepBoopResult +=  "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (input === 1) {
      beepBoopResult += "Boop!";
  } else if (input === 0){
      beepBoopResult += "Beep!";
    } else {
      for (index=0; index <= countTo; index++) {
        beepBoopResult = beepBoopResult + index + " ";
      }
    }
    return beepBoopResult;
  }

  // var inputArray = input.toString().split("");




// User Interface Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = beepBoop(input);
    $("#result").text(output);
  });
});
