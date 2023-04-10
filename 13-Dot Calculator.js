//-------Dot Calculator------//

// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.


//? Solution-1
function dotCalculator (equation) {
    var result ="";
    equation = (equation+"").replace(/\s/g, ''); // \s = space
    ["+","-","*","//"].map((op)=>{
        if(equation.includes(op)){
            result = ".".repeat(equation.split(op).map(item => item.length).reduce(operations[op]));
        }
    });
    return result;
}

var operations = {
    "+" : function (operand1, operand2) {
        return operand1 + operand2;
    },
    "-" : function (operand1, operand2) {
        if(operand2 > operand1) return 0;
        return operand1 - operand2;
    },
    "*" : function (operand1, operand2) {
        return operand1 * operand2;
    },
    "//" : function (operand1, operand2) {
        return operand1 / operand2;
    }
};

//? Solution-2

function dotCalculator (equation) {
  
    let [ a, op, b ] = equation.split(' ');
    
    return '.'.repeat(eval(a.length + op[0] + b.length));
    
  }