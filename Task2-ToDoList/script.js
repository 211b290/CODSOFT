let inputBox = document.getElementById("form2");
// console.log(inputBox)
let listContainer = document.getElementById("list-group")
// console.log(listContainer)
let btn = document.getElementById("bu")
// console.log(bu)
btn.addEventListener('click',function(e){
  if(inputBox.value === ''){
    e.preventDefault()
    alert("Task Bar Empty")
  }
  else{
    e.preventDefault()
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00D7"
    li.appendChild(span)
  }
  inputBox.value = '';
  local()
})

listContainer.addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    local()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    local()
  }
}, false)

function local(){
  localStorage.setItem("data",listContainer.innerHTML)
}
function display(){
  listContainer.innerHTML = localStorage.getItem("data")
}
display()