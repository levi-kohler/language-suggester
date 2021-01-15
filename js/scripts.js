function totalValue () {
  return
}

$(document).ready(function() {
  const fun = confirm ("Do you like to have fun? Click OK for yes or Cancel for no.");

  if (fun) {
    $('#coder').show();
  } else {
    $('#not-a-coder').show();
  }
  
  $("quiz").submit(function(event){
    event.preventDefault
    let color = $("#color").val();

    function favColor(color) {
      if(color === "#000000" || color === "#0000ff"){
      return "Javascript";
      } else {
        return "";
      }
    }
  });
});

// Coding languages returned will either be  : Javescript, C#, or Ruby