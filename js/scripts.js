// Business Logic
var beepBoop = function(input) {
  var inputArray = input.toString().split("");
  if (input % 3 === 0 && input !== 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (input % 3 !== 0) {
    for (var index = 0; index < inputArray.length; index ++)
      // var indexValue = parseInt(inputArray[i]);
      // if
    return "Boop!";
  } else if (input === 0){
    return "Beep!";
  }

};





// User Interface Logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = beepBoop(input);
    $("#result").text(output);
  });
});
