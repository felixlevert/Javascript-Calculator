import { calculator } from '../Calculation/Calculator.js';
import { display } from '../Utility/DOMDisplay.js';

class EqualButton {
  equalButtonHandler() {
    if (!calculator.lastButtonOperator) {
      calculator.setValues();
      const result = calculator.calculate();
      if (result || result === 0) {
        display.overwriteDisplay(result);
      }
    }
    calculator.lastButtonEqual = true;
  }
}

export const equalButton = new EqualButton();
