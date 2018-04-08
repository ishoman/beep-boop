// Business Logic
var beepBoop = function(input, reverse) {
  var beepBoopArray = [];
  for (var index = 0; index <= input; index++) {
    beepBoopArray.push(index);
  }
  var outputArray = [];
  for (var index = 0; index < beepBoopArray.length; index++) {
    if (beepBoopArray[index] % 3 === 0 && beepBoopArray[index] !== 0) {
      outputArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (beepBoopArray[index].toString().split("").includes("1")) {
      outputArray.push(" " + "Boop!");
    } else if (beepBoopArray[index].toString().split("").includes("0")) {
      outputArray.push(" " + "Beep!");
    } else {
      outputArray.push(" " + beepBoopArray[index])
    }
  }
  if (reverse === "No") {
    return outputArray;
  } else if (reverse === "Yes") {
    return outputArray.reverse();
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var reverse = $("#reverse").val();
    var output = beepBoop(input, reverse);
    $("#result").text(output);
  });
});
