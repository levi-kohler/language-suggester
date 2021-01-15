//Business Logic
function totalValue(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

//UI Logic
$(document).ready(function() {
  const fun = confirm ("Do you like to have fun? Click OK for yes or Cancel for no.");

  if (fun) {
    $('#coder').show();
  } else {
    $('#not-a-coder').show();
  }
  
  $("form#quiz").submit(function(event){
    event.preventDefault
    let number1 = parseInt($("#beach").val());
    let number2 = parseInt($("#sample1").val());
    let number3 = parseInt($("#sample2").val());
    let number4 = parseInt($("#sample3").val());
    let number5 = parseInt($("#sample4").val());
    let total = totalValue (number1, number2, number3, number4, number5)
    let result;
    if (total >= "10") {
      result = (Javascript);
    } else if (totalValue >= "5") {
      result = (Csharp);
    } else {
      result = (Ruby);
    }
    $("#quiz-result").text(result);
  });
});

// Coding languages returned will either be  : Javescript, C#, or Ruby