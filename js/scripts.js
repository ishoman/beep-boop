// Business Logic
// Main Function
var beepBoop = function(input) {
  debugger;
  var beepBoopArray = [];
  for (var index = 0; index <= input; index++) {
    beepBoopArray.push(index);
  }
  var outputArray = [];
  for (var index = 0; index <= beepBoopArray.length; index++) {
    if (beepBoopArray[index] % 3 === 0 && beepBoopArray[index] !== 0) {
      outputArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (beepBoopArray.includes(1)) {
      outputArray.push(" " + "Boop!");
    } else if (beepBoopArray.includes(0)) {
      outputArray.push(" " + "Beep!");
    } else {
      outputArray.push(" " + beepBoopArray[index])
    }
    return outputArray;
  }
};
// Function that Reverses the Output



// User Interface Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = beepBoop(input);
    $("#result").text(output);
  });

  $("form#numberInputReverse").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = beepBoopReverse(input);
    $("#result").text(output);
  });
});
