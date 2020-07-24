'use strict';   // Mode strict du JavaScript
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/


/* ************************************* STATS DE BASE JEU ************************************* */
const SWORD = {
    'mousse' : 1,
    'bois' : 2,
    'excalibur' : 3    
}

const ARMOR = {
    'carton' : 1,
    'acier' : 2,
    'magique' : 3
}

const DIFFICULTY_TYPE = ['easy','normal','hard']
const DIFFICULTY = {
    easy_lifeDragon : [150,200],
    easy_dmgDragon : [5,10],
    easy_lifePlayer : [200,250],
    easy_dmgPlayer : [10,20],
    
    normal_lifeDragon : [200,250],
    normal_dmgDragon : [15,20],
    normal_lifePlayer : [200,250],
    normal_dmgPlayer : [30,40],
    
    hard_lifeDragon : [250,300],
    hard_dmgDragon : [30,40],
    hard_lifePlayer : [180,250],
    hard_dmgPlayer : [30,40]
}
/* **************************************** VAR DE PARTIE **************************************** */
var tour = 0;

function random(min, max) {
    let cal = Math.random() * (max - min) + min;
  return cal.toFixed(2)
}

function afficher(id , place , element ){
    id.insertAdjacentHTML(place, element);
}

var lifeStart = {
    'lifePlayer' : undefined,
    'lifeDragon' : undefined
}

var game = {
    'sword' : undefined,
    'armor' : undefined,
    'difficulty' : undefined,
    'lifePlayer' : undefined,
    'lifeDragon' : undefined,
    'dmgPlayer' : undefined,
    'dmgDragon' : undefined
}

var curentLevel = [{
    'lifePlayer' : undefined,
    'lifeDragon' : undefined,
    'dmgDragon' : undefined,
    'dmgPlayer' : undefined
}]

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/


const ask = ['difficulty', 'armor', 'sword' ]
function startAsk(ask){
    let rep = undefined;
    
    switch (ask) {
        case 'difficulty':
            do{
                rep = prompt('Veuillez choisir la difficulté : 1.) Easy / 2.) Normal / 3.) Hard (Numéro ou mot pour choisir)')
                if(isNaN(rep))
                {
                    rep = rep.toLowerCase()
                }
                switch (rep) {
                    case '1' :
                        game.difficulty = DIFFICULTY_TYPE[0]
                        break;
                    case '2' :
                        game.difficulty = DIFFICULTY_TYPE[1]
                        break;
                    case '3' :
                        game.difficulty = DIFFICULTY_TYPE[2]
                        break;
                        case 'easy' :
                        game.difficulty = DIFFICULTY_TYPE[0]
                        break;
                    case 'normal' :
                        game.difficulty = DIFFICULTY_TYPE[1]
                        break;
                    case 'hard' :
                        game.difficulty = DIFFICULTY_TYPE[2]
                        break;
                    default: 
                        rep = undefined
                        break;
                }
            }while(rep == undefined)
            console.log('difficulté choisie')
            break;
        case 'armor':
            do{
                // 'carton'
                // 'acier' 
                // 'magique' 
                rep = prompt('Veuillez choisir votre Armure : 1.) carton / 2.) acier / 3.) magique (Numéro ou mot pour choisir)')
                if(isNaN(rep))
                {
                    rep = rep.toLowerCase()
                }
                switch (rep) {
                    case '1' :
                        game.armor = ARMOR.carton
                        break;
                    case '2' :
                        game.armor = ARMOR.acier
                        break;
                    case '3' :
                        game.armor = ARMOR.magique
                        break;
                        case 'carton' :
                        game.armor = ARMOR.carton
                        break;
                    case 'acier' :
                        game.armor = ARMOR.acier
                        break;
                    case 'magique' :
                        game.armor = ARMOR.magique
                        break;
                    default: 
                        rep = undefined
                        break;
                }
            }while(rep == undefined)
            console.log('Armure choisie')
            break;
        case 'sword':
            do{
                // 'mousse'
                // 'bois'
                // 'excalibur'
                rep = prompt('Veuillez choisir votre Arme : 1.) mousse / 2.) bois / 3.) excalibur (Numéro ou mot pour choisir)')
                if(isNaN(rep))
                {
                    rep = rep.toLowerCase()
                }
                switch (rep) {
                    case '1' :
                        game.sword = SWORD.mousse
                        break;
                    case '2' :
                        game.sword = SWORD.bois
                        break;
                    case '3' :
                        game.sword = SWORD.excalibur
                        break;
                        case 'mousse' :
                        game.sword = SWORD.mousse
                        break;
                    case 'bois' :
                        game.sword = SWORD.bois
                        break;
                    case 'excalibur' :
                        game.sword = SWORD.excalibur
                        break;
                    default: 
                        rep = undefined
                        break;
                }
            }while(rep == undefined)
            console.log('Arme choisie')
            break;
    }
}
// function game(sword, armor, difficulty)
function SetDifficulty(diff){
    switch (diff) {
        case 'easy':
            game.lifeDragon = parseInt(random(DIFFICULTY.easy_lifeDragon[0],DIFFICULTY.easy_lifeDragon[1]))
            game.dmgDragon = DIFFICULTY.easy_dmgDragon
            game.lifePlayer = parseInt(random(DIFFICULTY.easy_lifePlayer[0],DIFFICULTY.easy_lifePlayer[1]))
            game.dmgPlayer = DIFFICULTY.easy_dmgPlayer
            lifeStart.lifeDragon = game.lifeDragon
            lifeStart.lifePlayer = game.lifePlayer
            break;
        case 'normal':
            game.lifeDragon = parseInt(random(DIFFICULTY.normal_lifeDragon[0],DIFFICULTY.normal_lifeDragon[1]))
            game.dmgDragon = DIFFICULTY.normal_dmgDragon
            game.lifePlayer = parseInt(random(DIFFICULTY.normal_lifePlayer[0],DIFFICULTY.normal_lifePlayer[1]))
            game.dmgPlayer = DIFFICULTY.normal_dmgPlayer
            lifeStart.lifeDragon = game.lifeDragon
            lifeStart.lifePlayer = game.lifePlayer
            break;
        case 'hard':
            game.lifeDragon = parseInt(random(DIFFICULTY.hard_lifeDragon[0],DIFFICULTY.hard_lifeDragon[1]))
            game.dmgDragon = DIFFICULTY.hard_dmgDragon
            game.lifePlayer = parseInt(random(DIFFICULTY.hard_lifePlayer[0],DIFFICULTY.hard_lifePlayer[1]))
            game.dmgPlayer = DIFFICULTY.hard_dmgPlayer
            lifeStart.lifeDragon = game.lifeDragon
            lifeStart.lifePlayer = game.lifePlayer
            break;
    }
}

function tape(i){
    if(random(1,10)<= 5 ){ //le chevalier tape
        let playerDmg = parseInt(random(game.dmgPlayer[0] , game.dmgPlayer[1]) + game.sword)
        let dragLife = game.lifeDragon - playerDmg
        
        if(curentLevel[i] == undefined){
                curentLevel.push({
                    'lifeDragon' : dragLife ,
                    'dmgPlayer' : playerDmg ,
                    'lifePlayer' : game.lifePlayer
                })
        }else{
                curentLevel[i].dmgPlayer = playerDmg
                curentLevel[i].lifeDragon = dragLife
                curentLevel[i].lifePlayer = game.lifePlayer
        }
        game.lifeDragon = dragLife
        console.log('le Hero tape : ' + playerDmg + ' dégats ' + ' Dragon pv : ' + dragLife )
            
            
    }else{ //le dragon tape
    let DragDmg = parseInt(random(game.dmgDragon[0],game.dmgDragon[1]) - game.armor)
    let PlayerLife = game.lifePlayer - DragDmg
    
        if(curentLevel[i] == undefined){
            curentLevel.push({
                'lifePlayer' : PlayerLife ,
                'dmgDragon' : DragDmg ,
                'lifeDragon' : game.lifeDragon
            })
        }else{
            curentLevel[i].dmgDragon = DragDmg
            curentLevel[i].lifePlayer = PlayerLife
            curentLevel[i].lifeDragon = game.lifeDragon
        }
    
    game.lifePlayer = PlayerLife
    console.log('le dragon tape : ' + DragDmg + ' dégats ' + ' hero pv : ' + PlayerLife )
}
}

// Etape du curentLevel[]
// Enregistrement des actions dans curentLevel[]
//RAND dmgDragon & dmgPlayer à chaque round

// Start et boucle des tours curentLevel[tour] jusqu'à fin

function starGame(){
    let continu = true
    while(continu){
        
        if(game.lifePlayer > 0){
            continu = true
        
            tape(tour)
            console.log('tour numéro' + tour)
            console.log(curentLevel[tour])
            console.log('-----------------')
            tour++
            
        }else if(game.lifeDragon > 0){
            continu = true 
            tape(tour)
            console.log('tour numéro' + tour)
            console.log(curentLevel[tour])
            console.log('-----------------')
            tour++
        }
        if(game.lifePlayer <= 0){
            continu = false
        }else if(game.lifeDragon <= 0){
            continu = false 
        }
    }
    
}
/* ************************************** Affichage *************************************** */
/* **************************************   START   *************************************** */

var starting = ['#affiche','afterend','']

starting[2] = '<figure><img src="images/knight.png" alt="Chevalier"><figcaption>124 PV</figcaption></figure><figure><img src="images/dragon.png" alt="Dragon"><figcaption>135 PV</figcaption></figure>'


function Content_Start(){
    let y = '';
        y += '<li class="game-state"><figure><img src="images/knight.png" alt="Chevalier"><figcaption>'
        y += lifeStart.lifePlayer
        y += ' PV</figcaption></figure><figure><img src="images/dragon.png" alt="Dragon"><figcaption>'
        y += lifeStart.lifeDragon
        y += ' PV</figcaption></figure></li>'
        
    return y
}
function Content_tours_By_ID(id){
        
        let y = '';
        let imageKnight, imageDragon;
        
        if(curentLevel[id].lifePlayer < 80){
            imageKnight = 'knight-wounded'
        }else{
            imageKnight = 'knight'
        }
        if(curentLevel[id].lifeDragon < 80){
            imageDragon = 'dragon-wounded'
        }else{
            imageDragon = 'dragon'
        }

        if(!isNaN(curentLevel[id].dmgPlayer)){
            y += '<li class="round-log player-attacks"><h2 class="subtitle">Tour n°'
            y += id + 1
            y += '</h2><img src="images/'
            y += 'knight-winner'
            y += '.png" alt="'
            y += 'Chevalier'
            y += '"><p>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez '
            y += curentLevel[id].dmgPlayer
        }else{
            y += '<li class="round-log dragon-attacks"><h2 class="subtitle">Tour n°'
            y += id + 1
            y += '</h2><img src="images/'
            y += 'dragon-winner'
            y += '.png" alt="'
            y += 'Dragon'
            y += '"><p>Le dragon prend l\'initiative, vous attaque et vous inflige '
            y += curentLevel[id].dmgDragon
        }
        y += ' points de dommage !</p></li>'
        y += '<li class="game-state"><figure><img src="images/' + imageKnight + '.png" alt="Chevalier"><figcaption>'
        y += curentLevel[id].lifePlayer
        y += ' PV</figcaption></figure><figure><img src="images/' + imageDragon + '.png" alt="Dragon"><figcaption>'
        y += curentLevel[id].lifeDragon
        y += ' PV</figcaption></figure></li>'
        
        y += '<div id="affiche' + (id +1) + '"></div>'
   return y
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

//afficher(id , place , element )
    // beforebegin
    // afterbegin
    // beforeend
    // afterend
    
startAsk(ask[0])
startAsk(ask[1])
startAsk(ask[2])

SetDifficulty(game.difficulty)

console.log(game)

starGame()

// AFFICHAGE

    let query_id = '.game-state'
    let place = document.querySelector(query_id)
    afficher(place , 'afterbegin' , Content_Start() )

for( let i = 0 ; i < curentLevel.length ; i++){
    let query_id = '#affiche' + i
    let place = document.querySelector(query_id)
    afficher(place , 'afterend' , Content_tours_By_ID(i) )
}

