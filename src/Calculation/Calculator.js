import { mathOperations } from './MathOperations.js';

class Calculator {
  constructor() {
    this.currentNumber = null;
    this.values = [0, 0];
    this.operator = undefined;
    this.lastButtonOperator = false;
    this.lastButtonEqual = false;
  }

  reset() {
    this.currentNumber = null;
    this.lastButtonOperator = false;
    this.values = [0, 0];
    this.operator = undefined;
    this.lastButtonOperator = false;
    this.lastButtonEqual = false;
  }

  setValues() {
    this.values.shift();
    this.values.push(parseFloat(this.currentNumber));
  }

  calculate() {
    const result = mathOperations.applyOperator(this.operator, this.values);
    if (result || result === 0) {
      this.values.shift();
      this.values.push(result);
      return result;
    }
  }
}

export const calculator = new Calculator();
