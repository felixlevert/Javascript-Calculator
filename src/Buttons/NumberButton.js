import { calculator } from '../Calculation/Calculator.js';
import { display } from '../Utility/DOMDisplay.js';

export class NumberButton {
  constructor(value) {
    this.value = value;
  }

  numberButtonHandler() {
    if (calculator.lastButtonEqual) {
      calculator.reset();
    }
    if (calculator.currentNumber === null) {
      calculator.currentNumber = '';
      display.clearDisplay();
    }
    if (calculator.lastButtonOperator) {
      display.overwriteDisplay(this.value);
      calculator.lastButtonOperator = false;
    } else {
      display.writeToDisplay(this.value);
    }
    calculator.currentNumber += this.value;
  }
}
