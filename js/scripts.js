// Business Logic
var beepBoop = function(input) {
  debugger;
  var containsOne = (/[1]/g.test(input))
  var containsZero = (/[0]/g.test(input))
  var beepBoopResult = "";
  var countTo = parseInt(input);
  if (input % 3 === 0 && input !== 0) {
    beepBoopResult +=  "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (containsOne === true) {
      beepBoopResult += "Boop!";
  } else if (containsZero === true && containsOne === false) {
      beepBoopResult += "Beep!";
    } else {
      for (index=0; index <= countTo; index++) {
        beepBoopResult = beepBoopResult + index + " ";
      }
    }
    return beepBoopResult;
  }



// User Interface Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var output = beepBoop(input);
    $("#result").text(output);
  });
});
