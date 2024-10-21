function postfixExpression(expression) {
    let stack = [];
    
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } 
        else {
            let operand2 = stack.pop();  
            let operand1 = stack.pop();  
            
            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.floor(operand1 / operand2)); 
                    break;
                default:
                    break;
            }
        }
    }
    
    return stack.pop();
}

let input1 = "84-";
console.log(postfixExpression(input1)); 

input1 = "879-2*+";
console.log(postfixExpression(input1)); 