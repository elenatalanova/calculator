// Business Logic:

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

$(document).ready(function() {
  $("form#substract").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#substract1").val());
  const number2 = parseInt($("#substract2").val());
  const result = substract(number1, number2);
  $("#output2").text(result);
  });
});

$(document).ready(function() {
  $("form#multiply").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#multiply1").val());
  const number2 = parseInt($("#multiply2").val());
  const result = multiply(number1, number2);
  $("#output3").text(result);
  });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#divide1").val());
  const number2 = parseInt($("#divide2").val());
  const result = divide(number1, number2);
  $("#output4").text(result);
  });
});

