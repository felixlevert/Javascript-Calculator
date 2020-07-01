export const mathOperations = {
  operationsBank: {
    '+': (a, c) => a + c,
    '-': (a, c) => a - c,
    'X': (a, c) => a * c,
    '/': (a, c) => a / c,
  },

  applyOperator(operator, values) {
    if (!operator) {
      return null;
    }
    if (operator in this.operationsBank) {
      return values.reduce(this.operationsBank[operator]);
    } else {
      throw new Error("This operator doesn't exist!");
    }
  },
};
