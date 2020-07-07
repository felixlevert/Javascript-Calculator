import { calculator } from '../Calculation/Calculator.js';
import { display } from '../Utility/DOMDisplay.js';

export class OperationButton {
  constructor(value) {
    this.value = value;
  }

  operationButtonHandler() {
    if (
      !calculator.currentNumber &&
      !calculator.lastButtonOperator &&
      !calculator.lastButtonEqual
    ) {
      return;
    }
    if (!calculator.lastButtonOperator && !calculator.lastButtonEqual) {
      calculator.setValues();
      const result = calculator.calculate();
      if (result || result === 0) {
        display.overwriteDisplay(result);
      }
    }
    calculator.operator = this.value;
    calculator.lastButtonOperator = true;
    calculator.lastButtonEqual = false;
    calculator.currentNumber = '';
  }
}
