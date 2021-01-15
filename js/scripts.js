//Business Logic
function totalValue(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

function Javascript() {
  return "Javascript"
}

function Csharp() {
  return "Csharp"
}

function Ruby() {
  return "Ruby"
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
    event.preventDefault();
    const number1 = parseInt($("#beach").val());
    const number2 = parseInt($("#sample1").val());
    const number3 = parseInt($("#sample2").val());
    const number4 = parseInt($("#sample3").val());
    const number5 = parseInt($("#sample4").val());
    const total = totalValue (number1, number2, number3, number4, number5)
    let result;
    if (total >= "7") {
      result = (Ruby);

    } else if (totalValue === "6") {
      result = (Csharp);
    // } else {
    //   result = (Javascript);
    }
    $("#quiz-result").text(result);
  });
});

// Coding languages returned will either be  : Javescript, C#, or Ruby