const clap = new Audio('clap.wav');
const hihat = new Audio('hihat.wav');
const kick = new Audio('kick.wav');
const openHat = new Audio('openhat.wav');
const boom = new Audio('boom.wav');
const ride = new Audio('ride.wav');
const snare = new Audio('snare.wav');
const tom = new Audio('tom.wav');
const tink = new Audio('tink.wav');

const clapAKey = document.body

clapAKey.addEventListener('keypress', (board) => {
    if (board.code =="KeyA") {
    clap.load(), clap.play()
    } else if (board.code =="KeyS") {
        hihat.load(), hihat.play()
    } else if (board.code =="KeyD") {
        kick.load(), kick.play()
    } else if (board.code =="KeyF") {
        openHat.load(), openHat.play()
    } else if (board.code =="KeyG") {
        boom.load(), boom.play()
    } else if (board.code =="KeyH") {
        ride.load(), ride.play()
    } else if (board.code =="KeyJ") {
        snare.load(), snare.play()
    } else if (board.code =="KeyK") {
        tom.load(),tom.play()
    } else if (board.code =="KeyL"){
        tink.load(), tink.play()
    } else {
        return false
    }
})
const clapA = document.getElementById("clapA");
    clapA.addEventListener('click', ()=>{
    clap.play();
    })
const hihatS = document.getElementById('hiHatS');
    hihatS.addEventListener('click', ()=>{
    hihat.play();
    })
const kickD = document.getElementById("kickD");
    kickD.addEventListener('click', ()=>{
    kick.play();
    })
const openHatF = document.getElementById("openHatF");
    openHatF.addEventListener('click', ()=>{
    openHat.play();
    })
const boomG = document.getElementById("boomG");
    boomG.addEventListener('click', ()=>{
    boom.play();
    })
const rideH = document.getElementById("rideH");
    rideH.addEventListener('click', ()=>{
    ride.play();
    })
const snareJ = document.getElementById("snareJ");
    snareJ.addEventListener('click', ()=>{
    snare.play();
    })
const tomK = document.getElementById("tomK");
    tomK.addEventListener('click', ()=>{
    tom.play();
    })
const tinkL = document.getElementById("tinkL");
    tinkL.addEventListener('click', ()=>{
    tink.play();
    })