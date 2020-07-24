'use strict';
// V1
/*
 * Boucle comptant de 1 à 10 inclus.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(let counter1 = 1; counter1 <= 10; counter1++)
{
    document.write('<p>Le compteur vaut <strong>' + counter1 + '</strong>.</p>');
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 20.


// V2
// Equivalent à la partie initalisation de la boucle.
let counter2 = 1;


/*
 * Boucle comptant de 1 à 10 inclus.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(; counter2 <= 10;)
{
    document.write('<p>Le compteur vaut <strong>' + counter2 + '</strong>.</p>');

    // Equivalent à la partie mise à jour de la boucle.
    counter2++;
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 23.

// V3
/*
 * Boucle comptant de 20 à 1 inclus.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(let counter = 20; counter >= 1; counter--)
{
    document.write('<p>Le compteur vaut <strong>' + counter + '</strong>.</p>');
}

// Sans cette boucle il aurait fallu écrire manuellement dix fois la ligne 20.

// V4
// Déclaration de deux variables.
var numbers = [ 10, 20, 30, 40, 50 ];


document.write('<h2>Première variante</h2>');

/*
 * Boucle affichant tous les éléments d'un tableau.
 *
 *
 * La structure de contrôle for possède trois parties :
 *
 * for(INITIALISATION; COMPARAISON; MISE A JOUR)
 * {
 *     // ...
 * }
 */
for(let index = 0; index < 5; index++)
{
    document.write('<p>' + numbers[index] + '</p>');
}

// V5 length
document.write('<h2>Deuxième variante</h2>');

/*
 * Le problème de la boucle du dessus c'est qu'elle est STATIQUE :
 * qu'arrive-t'il si le tableau dispose de plus ou de moins de 5 éléments ?
 *
 * Il faut rendre la comparaison de la boucle DYNAMIQUE, en se basant sur la longueur du tableau.
 *
 * Les tableaux étant de la classe Array, ils possèdent une propriété length :
 * http://devdocs.io/javascript/global_objects/array/length
 */
for(let index = 0; index < numbers.length; index++)
{
    document.write('<p>' + numbers[index] + '</p>');
}