import { DOMConnect } from './Utility/DOMConnect.js';

class App {
  static init() {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
      const type = button.className.split('-')[0];
      new DOMConnect(button.id, type);
    }
  }
}

App.init();
