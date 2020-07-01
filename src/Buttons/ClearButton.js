import { calculator } from '../Calculation/Calculator.js';
import { display } from '../Utility/DOMDisplay.js';

class ClearButton {
  clearButtonHandler() {
    display.zeroDisplay();
    calculator.reset();
  }
}

export const clearButton = new ClearButton();