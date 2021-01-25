function totalValue(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

$(document).ready(function() {
  const fun = confirm ("Do you like to have fun? Click OK for yes or Cancel for no.");

  if (fun) {
    $('#coder').show();
  } else {
    $('#not-a-coder').show();
  }
  
  $("form#quiz").submit(function(event){
    event.preventDefault();
    let number1 = parseInt($("#beach").val());
    let number2 = parseInt($("#dogs").val());
    let number3 = parseInt($("#waterfalls").val());
    let number4 = parseInt($("#dessert").val());
    let number5 = parseInt($("#climate").val());
    let total = totalValue (number1, number2, number3, number4, number5)
    if (total > 5) {
      $("#ruby").fadeIn();
      $("#csharp").hide();
      $("#javascript").hide();

    } else if (total < 5) {
      $("#csharp").fadeIn();
      $("#ruby").hide();
      $("#javascript").hide();

    } else {
      $("#javascript").fadeIn();
      $("#csharp").hide();
      $("#ruby").hide();
    }
  });
});