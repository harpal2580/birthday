const openBtn = document.getElementById("openBtn")
const openSection = document.getElementById("openSection")
const gallery = document.getElementById("gallerySection")

const envelope = document.getElementById("envelope")
const cardPage = document.getElementById("cardPage")

const cakeBtn = document.getElementById("cakeBtn")
const cakePage = document.getElementById("cakePage")

const flame = document.getElementById("flame")

const finalMessage = document.getElementById("finalMessage")

const music = document.getElementById("music")

const envelopeContainer = document.getElementById("envelopeContainer")

const swiper = new Swiper(".mySwiper",{

grabCursor:true,
effect:"cards",

on:{
reachEnd:function(){

setTimeout(()=>{

envelopeContainer.classList.add("show")

},1000)

}
}

})

/* OPEN CARD */

openBtn.onclick=()=>{

music.play()

anime({
targets:'.circleBtn',
scale:[1,1.3],
rotate:5,
duration:400,
direction:'alternate'
})

setTimeout(()=>{

openSection.style.display="none"
gallery.style.display="block"

new Swiper(".mySwiper",{effect:"cards",grabCursor:true})

},600)

}

/* SWIPE UP ENVELOPE */

let startY=0

envelope.addEventListener("touchstart",e=>{
startY=e.touches[0].clientY
})

envelope.addEventListener("touchend",e=>{

let endY=e.changedTouches[0].clientY

if(startY-endY>80){

document.querySelector(".envelopeFlap").style.transform="rotateX(180deg)"

setTimeout(()=>{

gallery.style.display="none"
cardPage.style.display="flex"

},700)

}

})

/* CAKE PAGE */

cakeBtn.onclick=()=>{

cardPage.style.display="none"
cakePage.style.display="block"

startVoice()

}

/* VOICE RECOGNITION */

function startVoice(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recog = new SpeechRecognition()

recog.onresult=(e)=>{

let text=e.results[0][0].transcript.toLowerCase()

if(text.includes("happy birthday")){

flame.style.display="none"

celebrate()

setTimeout(showMessage,3000)

}

}

recog.start()

}

/* FIREWORK */

function celebrate(){

confetti({particleCount:150,spread:100})

}

/* FINAL MESSAGE */

function showMessage(){

cakePage.style.display="none"

finalMessage.style.display="block"

let text=`I know I am not with you right now,
but I always want to keep you close to me.

Maybe not today,
but when we meet again,
we will celebrate your birthday just like this.`

let i=0

function type(){

if(i<text.length){

finalMessage.innerHTML+=text.charAt(i)

i++

setTimeout(type,40)

}

}

type()

}
