import { Calculator } from './Calculator.js';

export class Button {

    constructor(id, type) {
        super();
        this.id = id;
        this.resultField = document.getElementById('result-field');
        this.operationField = document.getElementById('formula-screen');
        this.button = document.getElementById(this.id);
        if (type === 'number') {
            this.connectNumberButton();
            
        } else if (type === 'op') {
            this.connectOpButton();
        } else {
            this.connectClearButton();
        }
        
    }

    removeZero() {
        const resultValue = this.resultField.textContent;
        const opChain = this.operationField.textContent;
        if (resultValue.startsWith('0')) {
           this.resultField.textContent = resultValue.substring(1);
        }

        if (opChain.startsWith('0')) {
            this.operationField.textContent = opChain.substring(1);
         }
    }

    removeDoubleOp() {
        const opChain = this.operationField.textContent;
        if (
            opChain.endsWith('+') ||
            opChain.endsWith('-') ||
            opChain.endsWith('X') ||
            opChain.endsWith('/')
            ) {
              this.operationField.textContent = opChain.substring(0, opChain.length - 1);
        }
    }

    connectNumberButton() {
        this.button.addEventListener('click', this.numberButtonHandler.bind(this));
    }

    connectOpButton() {
        this.button.addEventListener('click', this.opButtonHandler.bind(this));
    }

    connectClearButton() {
        this.button.addEventListener('click', this.clearButtonHandler.bind(this));
    }

    numberButtonHandler() {
        this.removeZero();
        const value = this.button.textContent;
        const opChain = this.operationField.textContent;
        if (
            opChain.endsWith('+') ||
            opChain.endsWith('-') ||
            opChain.endsWith('X') ||
            opChain.endsWith('/')
            ) {
                this.resultField.textContent = value;
                this.operationField.textContent = this.operationField.textContent + value;
            } else {
                    this.resultField.textContent = this.resultField.textContent + value;
                    this.operationField.textContent = this.operationField.textContent + value;
            }
    }

    opButtonHandler() {
        const opChain = this.operationField.textContent;
        if (!opChain.endsWith('+') &&
            !opChain.endsWith('-') &&
            !opChain.endsWith('X') &&
            !opChain.endsWith('/')
            ) {
        this.executeOperation(parseFloat(this.resultField.textContent));
            }
        this.removeDoubleOp();
        const value = this.button.textContent;
        if(value !== '=') {
            this.operationField.textContent = this.operationField.textContent + value;
        } 
        
        this.calculate(value);

    }

    clearButtonHandler() {
        this.resultField.textContent = '0';
        this.operationField.textContent = '0';
        prevResult = null;
        currentOperation = null;
    }

}