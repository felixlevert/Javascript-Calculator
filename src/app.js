import { DOMConnect } from './Utility/DOMConnect.js';

//Initializes the app by first connecting all button elements to event listeners.

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
