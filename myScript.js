let buttons = document.querySelectorAll("button");
let firstNum = "";
let secondNum = "";
let operator = "";
let secondOperator = "";
let displayValue = 0;
let total = null;

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(button.classList.contains('operator')){
        console.log(getOperator(button))
    }
    if(button.classList.contains('operand')){
        console.log(appendNum(button))
    }
    if(button.classList.contains('clear')){
        console.log('Working Clear')
    }
    if(button.classList.contains('sign')){
        console.log('Working Sign')
    }
    if(button.classList.contains('percent')){
        console.log('Working Percent')
    }
    if(button.classList.contains('decimal')){
        console.log('Working Decimal')
    }
    if(button.classList.contains('equal')){
        console.log(compute(firstNum, secondNum, operator))
    }  })  })

// gets the value on the button
function appendNum(num){
    if(operator === ""){
    firstNum += num.value;
    return firstNum;
    }
    else{
        secondNum += num.value;
        return secondNum;
    }
}
function getOperator(op){
    operator = op.value;
    return operator
    }

function compute (num1, num2, operator){
    switch(operator){
        case "+":
            total = parseInt(num1) + parseInt(num2);
            return total;
        case "-":
            total = parseInt(num1) - parseInt(num2);
            return total;
        case "*":
            total = parseInt(num1) * parseInt(num2);
            return total;
        case "/":
            total = parseInt(num1) / parseInt(num2);
            return total;

    }
}
function clear(){
firstNum = "";
secondNum = "";
operator = "";
secondOperator = "";
displayValue = 0;
total = null;
}

function deleteScreen (){}



function updateDisplay(){}

/*
Does the same thing as buttons.forEach
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(buttons[i].classList.contains('operand')) {
            test()
        }
    })
}
*/