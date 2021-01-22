function totalValue(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

function Javascript() {
  return "Javascript! Often abbreviated as JS, Javascript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
}

function Csharp() {
  return "C#! C# (pronounced 'C-sharp') is an object-oriented programming language from Microsoft that aims to combine the computing power of C++ with the programming ease of Visual Basic. C# is based on C++ and contains features similar to those of Java. C# is designed to work with Microsoft's . Net platform."
}

function Ruby() {
  return "Ruby! Ruby is A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
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
    let result;
    if (total > 5) {
      result = (Ruby);

    } else if (total < 5) {
      result = (Csharp);
    } else {
      result = (Javascript);
    }
    $("#quiz-result").text(result);
  });
});