let player = {
    name:"Thohi :",
    chips:"$1m"
}
let cards=[]
let sum = 0
let bj = false
let Alive = false
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)

let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name + " " + player.chips

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13) + 1
    if (getRandomCard === 1){
    return 11
    }else if(getRandomCard >10){
return 10
    }
    else{
return randomNum 
    }
    
}

function startgame(){
    Alive = true
    let firstcard=getRandomCard()
let secondcard=getRandomCard()
cards = [firstcard,secondcard]
sum = firstcard + secondcard
rendergame()
}
function rendergame(){
    console.log(cards)
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
      cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum:" +" "+ sum
if(sum < 21){
message ="Do you want to draw a new card?😊"
}
else if( sum === 21){
message ="Hurray! you got it🥳"
bj= true}
else if (sum > 21){
message = "Better luck next time😭"
Alive = false
}
messageEl.textContent = message
}
function newcard(){
    if (Alive === true  && bj === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    rendergame()
    }
}
