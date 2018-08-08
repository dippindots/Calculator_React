export default function calculate(state, buttonName) {
  if (buttonName === "C") {
    return {
      operator: null,
      current: null,
      result: 0
    };
  }

  if (isNumeric(buttonName)) {
    console.log("is number");
    if (state.current === null || state.current === "0") {
      return {
        current: buttonName
      };
    } else {
      return {
        current: state.current + buttonName
      };
    }
  } else {
    console.log("is operator");
    if (!state.operator && state.current) {
      return {
        result: state.current,
        operator: buttonName,
        current: null
      };
    } else {
      var num1;
      var num2;
      var result = state.result;
      var nextOperator = buttonName === "=" ? null : buttonName;
      switch (state.operator) {
        case "+":
          if (state.current) {
            num1 = parseFloat(state.result);
            num2 = parseFloat(state.current);
            result = (num1 + num2).toString();
          } else {
            return {
              operator: buttonName
            };
          }
          break;
        case "-":
          if (state.current) {
            num1 = parseFloat(state.result);
            num2 = parseFloat(state.current);
            result = (num1 - num2).toString();
          } else {
            return {
              operator: buttonName
            };
          }
          break;
        case "x":
          if (state.current) {
            num1 = parseFloat(state.result);
            num2 = parseFloat(state.current);
            result = (num1 * num2).toString();
          } else {
            return {
              operator: buttonName
            };
          }
          break;
        case "÷":
          if (state.current) {
            num1 = parseFloat(state.result);
            num2 = parseFloat(state.current);
            result = (num1 / num2).toString();
          } else {
            return {
              operator: buttonName
            };
          }
          break;
        default:
          break;
      }
      return {
        result: result,
        current: null,
        operator: nextOperator
      };
    }
  }

  function isNumeric(text) {
    if (isNaN(text)) {
      return false;
    } else return true;
  }
}
