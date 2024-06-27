const card =[
    {
        name:"Biryani",
        img:"Imagess/biryani.jpg",
    },
    {
        name:"Naan",
        img:"Imagess/Naan.jpg",
    },
    {
        name:"cake",
        img:"Imagess/red.jpg",
    },
    {
        name:"rasmalai",
        img:"Imagess/rasmalai.jpg",
    },
    {
        name:"Thali",
        img:"Imagess/Thali.jpg",
    },
    {
        name:"Paneer",
        img:"Imagess/paneer.jpg",
    },
    {
        name:"Biryani",
        img:"Imagess/biryani.jpg",
    },
    {
        name:"Naan",
        img:"Imagess/Naan.jpg",
    },
    {
        name:"cake",
        img:"Imagess/red.jpg",
    },
    {
        name:"rasmalai",
        img:"Imagess/rasmalai.jpg",
    },
    {
        name:"Thali",
        img:"Imagess/Thali.jpg",
    },
    {
        name:"Paneer",
        img:"Imagess/paneer.jpg",
    },
]
card.sort(()=> 0.5 - Math.random())

const grid= document.querySelector("#grid")
const result = document.querySelector("#Sc")
let cardsChosen=[]
let cardsChosenId=[]
const cardsWon=[]


function createboard() {
    for(i=0;i<card.length;i++){
       const c= document.createElement("img")
c.setAttribute("src","Imagess/doggie.jpg")
c.setAttribute("data-id",i)
c.addEventListener("click", flip)
       grid.appendChild(c)
}
}
createboard()
function checkMatch(){
    const cards = document.querySelectorAll("#grid img")
    console.log(cards)
    console.log("check for Match")
    if(cardsChosenId[0] == cardsChosenId[1]){
        alert("You have clicked the same Image!")
    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert("You found a Match!")
        cards[cardsChosen[0]].setAttribute("src","Imagess/white.jpg")
        cards[cardsChosen[1]].setAttribute("src","Imagess/white.jpg")
        cards[cardsChosen[0]].removeEventListener("click",flip)
        cards[cardsChosen[1]].removeEventListener("click",flip)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[cardsChosenId[0]].setAttribute("src","Imagess/doggie.jpg")
        cards[cardsChosenId[1]].setAttribute("src","Imagess/doggie.jpg")
        alert("Sorry try again")
    }
    r.textContent=cardsWon.length
    cardsChosen = []
    cardsChosenId=[]

    if(cardsWon.length == card.length/2){
r.innerHTMl= "Congratulations! You found them all"
    }

}
function flip(){
    const cardId= this.getAttribute("data-id")
    // console.log(card[cardId].name)
    cardsChosen.push(card[cardId].name)
    cardsChosenId.push(cardId)
console.log("clicked", cardId)
console.log(cardsChosenId)
console.log(cardsChosen)
this.setAttribute("src",card[cardId].img )
if (cardsChosen.length === 2 ){
    setTimeout (checkMatch , 500)
}
}