// Business logic:

const add = function(number1, number2) {
  return number1 + number2;
  }

const substract = function(number1, number2) {
  return number1 - number2;
}   

const multiply = function(number1, number2) {
  return number1 * number2;
}

const divide = function(number1, number2) {
  return number1 / number2;
}

// User Interface Logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = add(number1, number2);
  $("#output").text(result);
  });
});


