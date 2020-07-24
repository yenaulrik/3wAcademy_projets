'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const ACTIVE_TOOLBAR = document.querySelector('#toolbar-toggle')
const TOOLBAR = document.querySelector('.toolbar')
const ACTIVE_SLIDER = document.querySelector('#slider')
const TAB_IMG = document.querySelectorAll('#slider img')
const button_previous = document.querySelector('#slider-previous')
const button_toggle = document.querySelector('#slider-toggle')
const button_PLAY_PAUSE = document.querySelector('#slider-toggle i')
const button_next = document.querySelector('#slider-next')
const button_random = document.querySelector('#slider-random')
const DIV_STARS = document.querySelector('#stars')

let timerID
const TAB_IMG_LENGTH = TAB_IMG.length
const TIME = 2000

let table_img

let currentSlide = 0;

let bouton = 'play';
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


console.log(TAB_IMG)


for(let i = 0 ; i < TAB_IMG_LENGTH  ; i++){
    if(i === 0){
        DIV_STARS.innerHTML += '<i class="fas fa-circle star_active"></i>'
    }else{
        DIV_STARS.innerHTML += '<i class="fas fa-circle "></i>'
    }
}

const STARS = document.querySelectorAll('#stars .fa-circle')


// set images display none
function set_display_none(){
    for( let i = 1 ; i < TAB_IMG_LENGTH ; i++){
        TAB_IMG[i].classList.toggle('display_none')
    }
    ACTIVE_SLIDER.classList.toggle('display_none')
    console.log('image chargés')
}

// play classic
 
function switch_play_pause(){
    if(bouton == 'play'){
        bouton = 'pause'
        button_PLAY_PAUSE.classList.toggle('fa-play')
        button_PLAY_PAUSE.classList.toggle('fa-pause')
        
    }else{
        bouton = 'play'
        button_PLAY_PAUSE.classList.toggle('fa-play')
        button_PLAY_PAUSE.classList.toggle('fa-pause')
        window.clearInterval(timerID);
        timerID = window.setInterval(choix, TIME);
    }
    if(timerID == undefined && bouton == 'pause'){
        timerID = window.setInterval(choix, TIME);
    }
}
 
function play(){
       if(timerID == undefined){
        timerID = window.setInterval(choix, TIME);
    } 
    console.log('-- play --')
    
    STARS[currentSlide].classList.toggle('star_active')
    TAB_IMG[currentSlide].classList.toggle('display_none')
    currentSlide = (currentSlide+1)%TAB_IMG_LENGTH;
    TAB_IMG[currentSlide].classList.toggle('display_none')
    STARS[currentSlide].classList.toggle('star_active')
}
 
function pause(){
    console.log('-- pause --')
    window.clearInterval(timerID);
}

function previous(){
    console.log('-- previous --')
    window.clearInterval(timerID);
    console.log(timerID)

    if(button_PLAY_PAUSE.classList.contains('fa-pause')){ // onverifie le bouton play
        button_PLAY_PAUSE.classList.toggle('fa-play')
        button_PLAY_PAUSE.classList.toggle('fa-pause')
        bouton = 'pause'
    }
    STARS[currentSlide].classList.toggle('star_active')
    TAB_IMG[currentSlide].classList.toggle('display_none')
    if(currentSlide === 0){
        currentSlide = TAB_IMG_LENGTH -1
    }else{
        currentSlide = (currentSlide-1)%TAB_IMG_LENGTH;
    }
    STARS[currentSlide].classList.toggle('star_active')
    TAB_IMG[currentSlide].classList.toggle('display_none')    
    
}
function next(){
    console.log('-- next --')
    console.log('-- previous --')
    window.clearInterval(timerID);
    timerID = window.clearInterval(timerID);
    console.log(timerID)

    if(button_PLAY_PAUSE.classList.contains('fa-pause')){ // onverifie le bouton play
        button_PLAY_PAUSE.classList.toggle('fa-play')
        button_PLAY_PAUSE.classList.toggle('fa-pause')
        bouton = 'pause'
    }
    STARS[currentSlide].classList.toggle('star_active')
    TAB_IMG[currentSlide].classList.toggle('display_none')
    currentSlide = (currentSlide+1)%TAB_IMG_LENGTH;
    TAB_IMG[currentSlide].classList.toggle('display_none')
    STARS[currentSlide].classList.toggle('star_active')    
}
function random(){
    console.log('-- random --')
}

function choix(){
    
    switch(bouton){
        case 'play' : play() ;
        break ;
        case 'pause' : pause() ; 
        break ;
    }
} 

timerID = window.setInterval(choix, TIME);
 
function showToolbar(){
    TOOLBAR.classList.toggle('display_none')
} 
function keyboard(e) {
    switch(event.keyCode) {
        case 39:
            next()
            break
        case 37:
            previous()
            break
        case 32:
            switch_play_pause()
            break
        default:
            console.log("Cette touche n'est dispo")
            break
    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', function(){
    set_display_none()
     ACTIVE_TOOLBAR.addEventListener('click', showToolbar)
    button_toggle.addEventListener('click', switch_play_pause)
    button_previous.addEventListener('click', previous)
    button_next.addEventListener('click', next)
    button_random.addEventListener('click', function(){bouton = 'random'})
    document.addEventListener('keyup', keyboard)
})
