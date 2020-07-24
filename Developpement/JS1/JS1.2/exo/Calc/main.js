// Énoncé

// L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

// Les opérations mathématiques acceptées sont :

//     L'addition : a + b
//     La soustraction : a - b
//     La multiplication : a * b
//     La division : a / b
//     La puissance : a ^ b (exemple : 3 ^ 2 = 9)

// Détails

//     Il faut afficher une erreur en cas d'opération mathématique inconnue.
//     Les nombres saisis peuvent être à virgule.
//     L'utilisateur doit pouvoir autant saisir le nom de l'opération que l'opérateur correspondant : + - * / ^
//     Il faut répéter le moins de code possible, notamment le code d'affichage du résultat.

// Rappels

//     La division par zéro n'existe pas, il faut donc gérer ce cas...

let number1, number2, signe, result;

number1 = parseFloat(prompt("entrez un nombre"))
number2 = parseFloat(prompt("entrez un nombre"))
signe = prompt("entrez un signe ( /*+-^")

if(signe == 'x' || signe == '*'){
        result = number1 * number2     
    }else if(signe == '+'){
        result = number1 + number2     
    }else if(signe == '-'){
        result = number1 - number2     
    }else if(signe == '/' && number2 != 0 ){
        result = number1 / number2     
    }else if(signe == '^'){
         result = Math.pow(number1,number2)
    }else{
        alert('une erreur est survenue vous avez rentré une mauvaise réponse')
    }
    alert(result)