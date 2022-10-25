let num1 = 8
let num2 = 2
let result = 0
let resultel = document.getElementById("result")
function add(){
    result = num1+num2
    resultel.textContent = "Sum: " + result
}
function subtract(){
    result = num1-num2
    resultel.textContent = "Subraction: " + result
}
function divide(){
    result = num1/num2
    resultel.textContent = "Division: " + result
}
function mul(){
    result = num1*num2
    resultel.textContent = "Multiplication: " + result
}
