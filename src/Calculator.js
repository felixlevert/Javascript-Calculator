export const calculator = {
  currentNumber: null,
  lastButtonOperator: false,
  values: [0, 0],
  operator: undefined,

  setValues() {
    if (this.operator !== '=') {
      this.values.shift();
      this.values.push(parseFloat(this.currentNumber));
    }
  },

  calculate() {
    const result = this.applyOperations(this.operator, this.values);
    if (result) {
      this.values.shift();
      this.values.push(result);
      return result;
    }
  },

  applyOperations(operator, values) {
    switch (operator) {
      case '+':
        return values.reduce((a, c) => a + c);
        // eslint-disable-next-line no-unreachable
        break;
      case '-':
        return values.reduce((a, c) => a - c);
        // eslint-disable-next-line no-unreachable
        break;
      case 'X':
        return values.reduce((a, c) => a * c);
        // eslint-disable-next-line no-unreachable
        break;
      case '/':
        return values.reduce((a, c) => a / c);
    }
  },
};
