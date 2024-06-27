let A =document.getElementById("a")
let countEl = document.getElementById("count-el")
let count=0
console.log(A)



function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " -  "
    A.textContent += countStr
    console.log(count)
    countEl.textContent=0
    count=0
} 

// save()
