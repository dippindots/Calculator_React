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
    if (state.current === null) {
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
    if (!state.operator && buttonName !== "=") {
      return {
        result: state.current,
        operator: buttonName,
        current: null
      };
    } else {
      var num1;
      var num2;
      switch (state.operator) {
        case "+":
          if (state.current) {
            num1 = parseFloat(state.result);
            num2 = parseFloat(state.current);
            var addResult = (num1 + num2).toString();
            return {
              result: addResult,
              current: null,
              operator: null
            };
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
            var minusResult = (num1 - num2).toString();
            return {
              result: minusResult,
              current: null,
              operator: null
            };
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
            var multiResult = (num1 * num2).toString();
            return {
              result: multiResult,
              current: null,
              operator: null
            };
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
            var divtiResult = (num1 / num2).toString();
            return {
              result: divtiResult,
              current: null,
              operator: null
            };
          } else {
            return {
              operator: buttonName
            };
          }
          break;
        default:
          break;
      }
    }
  }

  function isNumeric(text) {
    if (isNaN(text)) {
      return false;
    } else return true;
  }
}
