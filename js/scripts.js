function add(number1, number2, number3) {
  return number1 + number2 +number3;
}

$(document).ready(function() {
  const fun = confirm ("Do you like to have fun? Click OK for yes or Cancel for no.");

  if (fun) {
    $('#coder').show();
  } else {
    $('#not-a-coder').show();
  }
  
  $("form#quiz").submit(function(event){
    event.preventDefault

  });
});

// Coding languages returned will either be  : Javescript, C#, or Ruby