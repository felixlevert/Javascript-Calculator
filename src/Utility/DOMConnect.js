import { NumberButton } from '../Buttons/NumberButton.js';
import { OperationButton } from '../Buttons/OperationButton.js';
import { clearButton } from '../Buttons/ClearButton.js';
import { equalButton } from '../Buttons/EqualButton.js';

export class DOMConnect {
  constructor(id, type) {
    this.button = document.getElementById(id);
    this.value = this.button.textContent;
    if (type === 'number') {
      const btn = new NumberButton(this.value);
      this.button.addEventListener('click', btn.numberButtonHandler.bind(this));
    } else if (type === 'operation') {
      const btn = new OperationButton(this.value);
      this.button.addEventListener('click', btn.operationButtonHandler.bind(this));
    } else if (type === 'clear') {
      this.button.addEventListener('click', clearButton.clearButtonHandler);
    } else if (type === 'equal') {
      this.button.addEventListener('click', equalButton.equalButtonHandler);
    }
  }
}
