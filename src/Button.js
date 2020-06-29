import { calculator } from './Calculator.js';

export class Button {
  constructor(id, type) {
    this.id = id;
    this.numberDisplay = document.getElementById('number-display');
    this.button = document.getElementById(this.id);
    switch (type) {
      case 'number':
        this.connectNumberButton();
        break;
      case 'op':
        this.connectOpButton();
        break;
      case 'clear':
        this.connectClearButton();
    }
  }

  connectNumberButton() {
    this.button.addEventListener('click', this.numberButtonHandler.bind(this));
  }

  connectOpButton() {
    this.button.addEventListener('click', this.opButtonHandler.bind(this));
  }

  connectClearButton() {
    this.button.addEventListener('click', this.clearHandler.bind(this));
  }

  removeZero() {
    if (calculator.currentNumber === null) {
      calculator.currentNumber = '';
      this.numberDisplay.textContent = '';
    }
  }

  numberButtonHandler() {
    this.removeZero();
    const value = this.button.textContent;
    if (calculator.lastButtonOperator) {
      this.numberDisplay.textContent = value;
      calculator.lastButtonOperator = false;
    } else {
      this.numberDisplay.textContent += value;
    }
    calculator.currentNumber += value;
  }

  opButtonHandler() {
    const value = this.button.textContent;
    if (!calculator.lastButtonOperator) {
      calculator.setValues();
      const result = calculator.calculate();
      if (result) {
        this.numberDisplay.textContent = result;
      }
      calculator.lastButtonOperator = true;

      if (value !== '=') {
        calculator.operator = value;
        calculator.currentNumber = '';
      } else {
        calculator.operator = undefined;
      }
    } else {
      calculator.operator = value;
      calculator.currentNumber = '';
    }
  }

  clearHandler() {
    this.numberDisplay.textContent = '0';
    calculator.currentNumber = null;
    calculator.operator = undefined;
    calculator.values = [0, 0];
  }
}