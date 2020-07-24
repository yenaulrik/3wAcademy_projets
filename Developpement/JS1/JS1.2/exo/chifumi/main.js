function playGame(){
    let number = Math.floor((Math.random() * 3));
    console.log('number = ' + number)
    
    const HAND = ['ciseaux', 'papier' ,'pierre'];
    let computerHand = number
    console.log('computerHand = ' + computerHand + ' : ' + HAND[computerHand] )
    
    let playerHand;
    let score = '';
    
    alert('Bienvenue dans le jeu CHIFUMI !')
    console.log('game start')
    //Choix du joueur vérifié & mis en minuscules
    do{
    playerHand = prompt('Entrez une main, qui peut être Pierre, Papier, Ciseaux').toLowerCase();
        console.log(playerHand)
        if(playerHand == HAND[0] || playerHand  == HAND[1] || playerHand == HAND[2] ){
            playerHand = HAND.indexOf(playerHand)
            console.log('playerHand true')
            console.log(playerHand)
        }else{
            playerHand = undefined 
            console.log('playerHand false')
        }
    }while(playerHand == undefined) //tant que playerHand ne correspond pas à l'une des solutions => boucle
    
    console.log('setVar terminé ;')
    console.log('computerHand = ' + playerHand + ' : ' + HAND[playerHand] )
    console.log('computerHand = ' + computerHand + ' : ' + HAND[computerHand] )
    console.log('--------' + score + ' / premier switch : ' + playerHand + ' / deuxieme switch : ' + computerHand)
    switch (playerHand) {
        case 0: //ciseaux
                    console.log(score)
            score += 'Les ciseaux '
            switch (computerHand) {
                case 0: //ciseaux
                    score += 'choquent les ciseaux ! Egalité !'
                    console.log(score)
                    break;
                case 1: //papier
                    score += 'coupent le papier ! Vous gagnez !'
                    console.log(score)
                    break;
                case 2: //pierre
                    score += 'se font écraser par la pierre ! Perdu !'
                    console.log(score)
                    break;
                }
        break;
    
        case 1: //papier
                    console.log(score)
            score += 'Le papier '
            switch (computerHand) {
                case 0: //ciseaux
                    score += 'est coupé par les ciseaux ! Perdu !'
                    console.log(score)
                    break;
                case 1: //papier
                    score += 'chiffonne le papier ! Egalité !'
                    console.log(score)
                    break;
                case 2: //pierre
                    score += 'enroule la pierre ! Gagné !'
                    console.log(score)
                    break;
                }
        break;
    
        case 2: //pierre
                    console.log(score)
            score += 'La pierre '
            switch (computerHand) {
                case 0: //ciseaux
                    score += 'casse les ciseaux! Gagné !'
                    console.log(score)
                    break;
                case 1: //papier
                    score += 'se fait enrouler par le papier ! Perdu !'
                    console.log(score)
                    break;
                case 2: //pierre
                    score += "s'éclate contre l'autre pierre ! Egalité !"
                    console.log(score)
                    break;
            }
        break;
    }
    alert(score);
}

do{
    playGame()
}while(confirm('Voulez-vous rejouer ?'))



