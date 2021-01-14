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
  $("form").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "substract") {
      result = substract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});

/*$(document).ready(function() {
  $("form#calculator").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#substract1").val());
  const number2 = parseInt($("#substract2").val());
  const operator = $("input:radio[name=operator]:checked").val();
  const result = substract(number1, number2);
  $("#output2").text(result);
  });
});

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#multiply1").val());
  const number2 = parseInt($("#multiply2").val());
  const operator = $("input:radio[name=operator]:checked").val();
  const result = multiply(number1, number2);
  $("#output3").text(result);
  });
});

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#divide1").val());
  const number2 = parseInt($("#divide2").val());
  const operator = $("input:radio[name=operator]:checked").val();
  const result = divide(number1, number2);
  $("#output4").text(result);
  });
});*/