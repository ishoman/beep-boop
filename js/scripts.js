// Business Logic






// User Interface Logic
$(document).ready(function( {
  $("form#numberInput").submit(function(event){
    var input = $("#input").val();
    var output = beepBoop(input);
    $("#result").text(output);
    event.preventDefault();
  });
});
