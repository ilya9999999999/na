const add = document.createElement("li") 
add.classList.add("buyer__item")
let gds_list = document.querySelector(".gds_list")


let ddd = document.createElement("h1")
let text = document.createTextNode("computer")
ddd.appendChild(text)
let ddr = document.createElement("img")
ddr.src = "img/8.webp"
ddr.style.width="200px"
let ddo = document.createElement("p")
let chek = document.createTextNode("450.999$")
ddo.appendChild(chek)
let firstLi = document.querySelectorAll(".gds_li")[0]
const btn = document.createElement("button")
const text_btn = document.createTextNode("shoot")
btn.appendChild(text_btn)
btn.setAttribute("onclick","shoot()")
function tovar(){
    console.log("test")
    gds_list.appendChild(add)
    add.appendChild(ddd)
    add.appendChild(ddr)
    add.appendChild(ddo)
    add.appendChild(btn)
   firstLi.classList.add("ubrat")
}


function shoot() {
btn.parentNode.remove()
firstLi.classList.remove("ubrat")
}