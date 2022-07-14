let buttons = document.querySelectorAll("button");
let display = document.getElementById("display")
let firstNum = "";
let secondNum = "";
let operator = "";
let secondOperator = "";
let displayValue = 0;
let total = "";

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(button.classList.contains('operator')){
        console.log(getOperator(button));
        if(secondOperator){
            compute(firstNum, secondNum, operator);
            updateScreen()
            firstNum = total;
            secondNum = "";
            operator = secondOperator;
            secondOperator = "";
        }
        else{
            updateScreen()
        }
    }
    if(button.classList.contains('operand')){
        console.log(appendNum(button))
        updateScreen()
    }
    if(button.classList.contains('clear')){
        console.log(clear())
        updateScreen()
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
        compute(firstNum, secondNum, operator)
        updateScreen()
        
    }  })  })

// gets the value of the number from event listener above and assigns it
function appendNum(num){
    if(operator === ""){
    firstNum += num.value;
    // assign num to displayValue which is used to update display
    displayValue = firstNum
    return firstNum;
    }
    else{
        secondNum += num.value;
        // assign num to displayValue which is used to update display
        displayValue = secondNum;
        return secondNum;
    }
}
// returns the value of the operator, +, -, *, /
function getOperator(op){
    if(!operator){
        operator = op.value;
        return operator;
    }
    if((!secondOperator) && (operator)){
        secondOperator = op.value;
    return secondOperator;
    }
}
// computes the values when 2 numbers and an operator are pressed
function compute (num1, num2, operator){
    switch(operator){
        case "+":
            total = parseInt(num1) + parseInt(num2);
            displayValue = total;
            return total;
        case "-":
            total = parseInt(num1) - parseInt(num2);
            displayValue = total;
            return total;
        case "*":
            total = parseInt(num1) * parseInt(num2);
            displayValue = total;
            return total;
        case "/":
            total = parseInt(num1) / parseInt(num2);
            displayValue = total;
            return total;
        case "=":
            num1 = total;
            displayValue = num1;
            num2 = "";
    }
}
function updateScreen(){
    display.innerHTML = displayValue;
}

// When the clear button is clicked it deletes and resets all values
function clear(){
firstNum = "";
secondNum = "";
operator = "";
secondOperator = "";
displayValue = 0;
total = null;
}

/*
Does the same thing as buttons.forEach
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(buttons[i].classList.contains('operand')) {
            test()
        }
    })
}

//display uses getElementByID instead of querySelect. This allows to update
function updateDisplay(btn){
    if(btn.value === "="){
        return display.innerHTML = total;
    }
    else if(!operator){
        return display.innerHTML = firstNum;
    }
    else if((operator) && (!secondNum)){
        return display.innerHTML = secondNum
    }
    else{
        return display.innerHTML = btn.value;
    }
    display.innerHTML = displayValue;
}

function deleteScreen (){
    return display.innerHTML = "0"
}
*/