

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let images = document.querySelectorAll('#photo-list img')
let nbr = document.querySelector('#nbrPhoto')


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function checkNbr(){
    nbr.innerHTML = document.querySelectorAll(".selected").length
}

for(let i = 0 ; i < images.length ; i++){
    images[i].onmouseover = function(){
        this.classList.toggle('gris')
    }
    images[i].onmouseout = function(){
        this.classList.toggle('gris')
    }
    images[i].onclick = function(){
        this.classList.toggle('selected')
        checkNbr()
    }
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

checkNbr()


// let boutton = document.querySelector('#toggle-rectangle')
// let rectangle = document.querySelector('.rectangle')

// boutton.onclick = function(){
//     rectangle.classList.toggle('visible');
// }

// rectangle.onmouseover = function(){ // ouaip :)
//     this.classList.toggle('important')
// }

// rectangle.ondblclick = function(){
//     this.classList.toggle('good')
//     this.classList.toggle('important')
// }


// rectangle.onmouseout = function(){
//     this.classList.remove('important', 'good') // better
// }
