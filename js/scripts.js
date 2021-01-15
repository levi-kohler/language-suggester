$(document).ready(function() {
  const fun = confirm ("Do you like to have fun? Click OK for yes or Cancel for no.");

  if (fun) {
    $("#coder").show();
  } else {
    ("#not-a-coder").show();
  }
});