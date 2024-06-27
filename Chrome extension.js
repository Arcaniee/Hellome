let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
console.log(localStorage.clear())
inputBtn.addEventListener( "click", function(){
    myLeads.push(inputEl.value)
   inputEl.value = ""
   Leads()
})
function Leads(){
    let listItems = ""
for(i=0 ; i<myLeads.length; i++){
 //  listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
 listItems +=`
<li>
 <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
  </a>
 </li>`
//  console.log(listItems)
//    const l = document.createElement("li")
//    l.textContent =  myLeads[i]
//    ulEl.append(l)
// 
}
ulEl.innerHTML = listItems
}

