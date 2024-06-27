const computerChoice=document.getElementById("computer-choice")
const userchoice=document.getElementById("user-choice")
const Result=document.getElementById("result")
const P = document.querySelectorAll("button")
let uc
let cc
P.forEach(possiblechoice => possiblechoice.addEventListener("click", (a)=>{
    uc = a.target.id
    userchoice.innerHTML = uc
    compuchoc()
    r()
}))
function compuchoc(){
   const random = Math.floor(Math.random()*3+1)
 console.log(random)
 if( random === 1){
    cc="👊"
 }
 if( random === 2){
    cc="✋"
 }
 if( random === 3){
    cc="✌"
 }
computerChoice.innerHTML= cc
}
function r(){
    if(uc === cc){
        Result.innerHTML="it's a tie!"
    }
    else if(uc === "👊" && cc === "✌"){
        Result.innerHTML="You Won!"
     }
     else if(uc ==="👊" && cc ==="✋"){
        Result.innerHTML="You Lost!"
     }
     else if(uc === "✋" && cc=== "👊"){
        Result.innerHTML="You Won!"
     }
     else if(uc ==="✋" && cc ==="✌"){
        Result.innerHTML="You Lost!"
     }
     else if(uc === "✌" && cc=== "✋"){
        Result.innerHTML="You Won!"
     }
     else if(uc ==="✌" && cc ==="👊"){
        Result.innerHTML="You Lost!"}
}