let btn_switch = false
const buy_box = document.getElementById("btn_buy")
let moneyBox = document.querySelector(".box_chek")
let checkBox = document.querySelector(".chek").innerHTML
checkBox = checkBox.replace(".","")
checkBox = parseInt(checkBox)
let bank = 0
console.log(checkBox)
function buy(){
if(!btn_switch) {
    buy_box.innerHTML="в корзине";
    btn_switch = true
    bank = bank + checkBox
}

else{
    buy_box.innerHTML="не дорого";
    btn_switch = false
    bank = bank - checkBox
}
moneyBox.innerHTML = bank + "$"
}
// const btnSetLightTheme = document.querySelector('.btn_theme_toggler');
// btnSetLightTheme.addEventListener('click', function(){
//     document.querySelector('body').style.filter = 'invert(0.8)';

// })

