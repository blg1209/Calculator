let buttons = document.querySelectorAll("button");
let display = document.getElementById("display")
let firstNum = "";
let secondNum = "";
let operator = "";
let secondOperator = "";
let displayValue = 0;
let toggleSign = "";
let total = "";

window.addEventListener("keydown", function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`)
    key.click()
})

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(button.classList.contains('operator')){
        console.log(getOperator(button));
        // if 2nd opertor is entered then sum total, update screen, assign total to first num and clear 2nd operator
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
        clear()
        updateScreen()
    }
    if(button.classList.contains('del')){
        displayValue = displayValue.toString().slice(0,-1)
        updateScreen()
    }
    if(button.classList.contains('percent')){
        displayValue = displayValue/100;
        updateScreen()
    }
    if(button.classList.contains('decimal')){
        appendNum(button);
        updateScreen()
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
// +total.toFixed(2) converts the string into an int and then rounds to 2 digits
function compute (num1, num2, operator){
    switch(operator){
        case "+":
            total = parseFloat(num1) + parseFloat(num2);
            total = +total.toFixed(2);
            displayValue = total;
            return total;
        case "-":
            total = parseFloat(num1) - parseFloat(num2);
            total = +total.toFixed(2);
            displayValue = total;
            return total;
        case "*":
            total = parseFloat(num1) * parseFloat(num2);
            total = +total.toFixed(2);
            displayValue = total;
            return total;
        case "/":
            if(secondNum === "0"){
                displayValue = "l0l"
                break
            }
            else{
            total = parseFloat(num1) / parseFloat(num2);
            total = +total.toFixed(2);
            displayValue = total;
            return total;
            }
        case "=":
            num1 = total;
            displayValue = num1;
            num2 = "";
    }
}
function updateScreen(){
    display.innerHTML = displayValue.toString().substring(0, 9);
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