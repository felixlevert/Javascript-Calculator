import { Button } from './Button.js';

class App {
  static init(type) {
    const buttons = document.querySelectorAll(`.${type}-btn`);
    for (const button of buttons) {
      new Button(button.id, type);
    }
  }
}

App.init('number');
App.init('op');
App.init('clear');
