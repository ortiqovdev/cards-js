let btnUzcard = document.querySelector("#uzcard")
let btnHumo = document.querySelector("#humoc")
let btnMaster = document.querySelector("#mcard")
let btnVisa = document.querySelector("#visac")

let bgUzcard = document.querySelector("#plastik-uzcard")
let bgHumo = document.querySelector("#plastik-humo")
let bgMaster = document.querySelector("#plastik-master")
let bgVisa = document.querySelector("#plastik-visa")


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