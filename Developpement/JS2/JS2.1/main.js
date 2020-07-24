let boutton = document.querySelector('#toggle-rectangle')
let rectangle = document.querySelector('.rectangle')

boutton.onclick = function(){
    rectangle.classList.toggle('visible');
}

rectangle.onmouseover = function(){ // ouaip :)
    this.classList.toggle('important')
}

rectangle.ondblclick = function(){
    this.classList.toggle('good')
    this.classList.toggle('important')
    // KO, a cause de la multiplicite de class, regarde au fur et a mesure le nom et l'ordre de tes class
    // Il y a un ordre de priorité
}


rectangle.onmouseout = function(){
    this.classList.remove('important', 'good') // better
}
// Des switchs?? ha non pas ici, nullement besoin
// oula
// T'as de la chance je peux pas t'envoyé de gif furioso


// Le but ultime étant de faire le moins de ligne de code possible

