let num1=8
let num2=2
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2
let sum = document.getElementById("sum-el")

function add(){
    console.log(num1 + num2)
    let result = num1 + num2
   sum.textContent= "sum:" + result
}
function sub(){
    console.log(num1 - num2)
    sum.textContent=num1 - num2
}
function mul(){
    console.log(num1 * num2)
    sum.textContent=num1 * num2
}
function div(){
    console.log(num1 / num2)
    sum.textContent=num1/num2
}
