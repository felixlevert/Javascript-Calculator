 import { CalculatorBuilder } from './CalculatorBuilder';

class App {
    static init() {
        const numberButtons = new CalculatorButtons('number');
        const opButtons = new CalculatorButtons('op');
        const clearButton = new CalculatorButtons('clear');
    }
}

App.init();