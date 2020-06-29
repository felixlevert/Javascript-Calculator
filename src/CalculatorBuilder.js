import { Button } from './Button.js';

export class CalculatorBuilder {
    constructor(type) {
        this.type = type;
        
        const buttons = document.querySelectorAll(`.${type}-btn`);
        for (const button of buttons) {
            new Button(button.id, this.type);
        }
    }

    
}