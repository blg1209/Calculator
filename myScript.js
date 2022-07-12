let buttons = document.querySelectorAll("button");
let display = document.getElementById("display")
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
        console.log(updateDisplay(button))
    }
    if(button.classList.contains('operand')){
        console.log(appendNum(button))
        console.log(updateDisplay(button))
    }
    if(button.classList.contains('clear')){
        console.log(clear())
        console.log(deleteScreen())
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
        updateDisplay(button); 
        
    }  })  })

// gets the value of the number from event listener above and assigns it
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
// returns the value of the operator, +, -, *, /
function getOperator(op){
    operator = op.value;
    return operator
    }
// computes the values when 2 numbers and an operator are pressed
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
        case "=":
            num1 = total;
            num2 = "";
    }
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

function deleteScreen (){
    return display.innerHTML = "0"
}


//display uses getElementByID instead of querySelect. This allows to update
function updateDisplay(btn){
    if(btn.value === "="){
        return display.innerHTML = total;
    }
    else{
        return display.innerHTML = btn.value;
    }
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
*/