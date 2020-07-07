import { calculator } from '../Calculation/Calculator.js';
import { display } from '../Utility/DOMDisplay.js';

class NegativeButton {
  negativeButtonHandler() {
    if (calculator.lastButtonEqual || calculator.lastButtonOperator) {
      const newNum = 0 - calculator.values[1];
      calculator.values.pop();
      calculator.values.push(newNum);
      display.overwriteDisplay(newNum);
    } else if (calculator.currentNumber) {
      calculator.currentNumber = 0 - calculator.currentNumber;
      display.overwriteDisplay(calculator.currentNumber);
    }
  }
}

export const negativeButton = new NegativeButton();
