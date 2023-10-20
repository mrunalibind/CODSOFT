document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector("input[type='text']");
    let firstOperand = "";
    let operator = "";
    let waitingForSecondOperand = false;
  
    document.getElementById("btns").addEventListener("click", function (e) {
      const clickedButton = e.target;
      const buttonValue = clickedButton.innerText;
  
      if (!isNaN(buttonValue)) {
        if (waitingForSecondOperand) {
          display.value = buttonValue;
          waitingForSecondOperand = false;
        } else {
          display.value = display.value === "0" ? buttonValue : display.value + buttonValue;
        }
      } else if (buttonValue === "+" || buttonValue === "-") {
        operator = buttonValue;
        firstOperand = display.value;
        waitingForSecondOperand = true;
      } else if (buttonValue === "=") {
        if (operator && firstOperand) {
          display.value = calculate(firstOperand, operator, display.value);
          firstOperand = display.value;
          operator = "";
          waitingForSecondOperand = true;
        }
      }
    });
  
    function calculate(num1, operator, num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (operator) {
        case "+":
          return (num1 + num2).toString();
        case "-":
          return (num1 - num2).toString();
        default:
          return num2.toString();
      }
    }
  });
  