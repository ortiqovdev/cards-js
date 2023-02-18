let btnUzcard = document.querySelector("#uzcard")
let btnHumo = document.querySelector("#humoc")
let btnMaster = document.querySelector("#mcard")
let btnVisa = document.querySelector("#visac")

let bgUzcard = document.querySelector("#plastik-uzcard")
let bgHumo = document.querySelector("#plastik-humo")
let bgMaster = document.querySelector("#plastik-master")
let bgVisa = document.querySelector("#plastik-visa")

// card number
let cardNumber1 = document.querySelector('#cardnumber1')
let cardNumber2 = document.querySelector('#cardnumber2')
let cardNumber3 = document.querySelector('#cardnumber3')
let cardNumber4 = document.querySelector('#cardnumber4')
let cardNumberInput = document.querySelector('#cardNumberinput')




if(cardNumberInput.value < 16 ){
    cardNumberInput.addEventListener('input', function () {
        cardNumber1.textContent = this.value;
        cardNumber2.textContent = this.value;
        cardNumber3.textContent = this.value;
        cardNumber4.textContent = this.value;
    })
}else{
    alert('xatolik')
}

// card date
let cardMuddat1 = document.querySelector('#card-muddat1') 
let cardMuddat2 = document.querySelector('#card-muddat2') 
let cardMuddat3 = document.querySelector('#card-muddat3') 
let cardMuddat4 = document.querySelector('#card-muddat4') 
let cardDateinput = document.querySelector('#cardDateinput')


cardDateinput.addEventListener('input', function () {
    let arrlen = this.value.length
    let arr = this.value
    if(arrlen == 4){
        arr = arr.split("")
        arr = `${arr[0]}${arr[1]} / ${arr[2]}${arr[3]}` 
        console.log(arr);
    }
    console.log(arr);


    cardMuddat1.textContent = arr;
    cardMuddat2.textContent = arr;
    cardMuddat3.textContent = arr;
    cardMuddat4.textContent = arr;

});

// card name
let cardName1 = document.querySelector('#card-holder1')
let cardName2 = document.querySelector('#card-holder2')
let cardName3 = document.querySelector('#card-holder3')
let cardName4 = document.querySelector('#card-holder4')
let cardNameInput = document.querySelector('#cardNameInput')

cardNameInput.addEventListener('input', function () {
    cardName1.textContent = this.value;
    cardName2.textContent = this.value;
    cardName3.textContent = this.value;
    cardName4.textContent = this.value;
});


//  card logos
btnUzcard.onclick = () => {
    bgUzcard.style.display = "block"
    bgHumo.style.display = "none"
    bgMaster.style.display = "none"
    bgVisa.style.display = "none"
}
btnHumo.onclick = () => {
    bgUzcard.style.display = "none"
    bgHumo.style.display = "block"
    bgMaster.style.display = "none"
    bgVisa.style.display = "none"
}
btnMaster.onclick = () => {
    bgUzcard.style.display = "none"
    bgHumo.style.display = "none"
    bgMaster.style.display = "block"
    bgVisa.style.display = "none"
}
btnVisa.onclick = () => {
    bgUzcard.style.display = "none"
    bgHumo.style.display = "none"
    bgMaster.style.display = "none"
    bgVisa.style.display = "block"
}

let btn = document.querySelector('#btn')
btn.onclick = ()=>{
confirm('Kartangizda xato yo`qligiga ishonchingiz komilmi?')
      
}
