const cc=document.getElementById("computer-choice")
const uc=document.getElementById("user-choice")
const r = document.getElementById("result")
const PossibleChoices= document.querySelectorAll("button")
let userchoice 
let computerChoice 
PossibleChoices.forEach(PossibleChoice => PossibleChoice.addEventListener("click", (er) =>{
    userChoice = er.target.id
    uc.innerHTML= userChoice
    generateComputerChoice()
    result()
}))
function generateComputerChoice(){ 
    const randomNumber = Math.floor(Math.random() * 3+1)
    console.log(randomNumber)
    if(randomNumber === 1){
        computerChoice = "Rock" 
    }
    else if(randomNumber === 2){
        computerChoice = "Paper"
    }
    else if(randomNumber === 3) {
        computerChoice = "Scissors"
    }
    cc.innerHTML= computerChoice

}
   function result(){
    if(userChoice === computerChoice){
        r.innerHTML= "It's a tie!"
}
if(userChoice === "Rock" && computerChoice === "Paper"){
    r.innerHTML= "You Lost!"
}
else if(userChoice === "Rock" && computerChoice === "Scissors"){
    r.innerHTML= "Congrats! You Won"
}
else if(userChoice === "Paper" && computerChoice === "Scissors"){
    r.innerHTML= "You Lost!"
}
else if(userChoice === "Paper" && computerChoice=== "Rock"){
    r.innerHTML= "Congrats! You Won"
}
else if(userChoice === "Scissors" && computerChoice === "Rock"){
    r.innerHTML= "You Lost!"
}
else if(userChoice === "Scissors" && computerChoice=== "Paper"){
    r.innerHTML= "Congrats! You Won"
}
}
