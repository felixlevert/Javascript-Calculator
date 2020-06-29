let prevResult = null;
let currentOperation;

export class Calculator {
  
   resultField = document.getElementById('result-field');

   calculate(opType) {
       currentOperation = opType;
   }

   executeOperation(curValue) {
       
       if (prevResult === null) {
           prevResult = curValue;
       } else {
         if (currentOperation === '+') {
            prevResult += curValue;
             this.resultField.textContent = prevResult;
             this.operationField.textContent = this.operationField.textContent + `= ${prevResult}`;
         } else if (currentOperation === '-') {
           prevResult -= curValue;
           this.resultField.textContent = prevResult;
           this.operationField.textContent = this.operationField.textContent + `= ${prevResult}`;
         } else if (currentOperation === 'X') {
           prevResult *= curValue;
           this.resultField.textContent = prevResult;
           this.operationField.textContent = this.operationField.textContent + `= ${prevResult}`;
         } else if (currentOperation === '/') {
           prevResult /= curValue;
           this.resultField.textContent = prevResult;
           this.operationField.textContent = this.operationField.textContent + `= ${prevResult}`;
         } else if (currentOperation === '=') {
           this.operationField.textContent = this.operationField.textContent + `= ${prevResult}`;
           return;
         }
       }
   }

  
}