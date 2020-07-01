class DOMDisplay {
  constructor() {
    this.display = document.getElementById('number-display');
  }

  clearDisplay() {
    this.display.textContent = '';
  }

  zeroDisplay() {
    this.display.textContent = '0';
  }

  writeToDisplay(content) {
    this.display.textContent += content;
  }

  overwriteDisplay(content) {
    this.display.textContent = content;
  }
}

export const display = new DOMDisplay();
