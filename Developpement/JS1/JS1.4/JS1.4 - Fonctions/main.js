'use strict';

/*
 * Lorsque le code devient trop long et répétitif il est possible de l'organiser en petites unités
 * que l'on appelle des fonctions, qui vont s'occuper d'une tâche précise ou de réaliser un calcul.
 */
function sayHello1()
{
    document.write('<p>Bonjour à toutes et à tous !</p>');
}

// Appel de la fonction.
sayHello1();

// Nouvel appel de la fonction.
sayHello1();





// Pour communiquer avec l'extérieur une fonction peut aussi avoir des arguments en entrée...
function sayHello2(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}

// Appel de la fonction en indiquant autant de paramètres que la fonction possède.
sayHello2('Marie', 'MAYERS');

// Nouvel appel de la fonction.
sayHello2('Ailton', 'CHRISTIAN');






// Une fonction peut aussi renvoyer une valeur en sortie.
function sayHello3()
{
    return 'Bonjour à toutes et à tous !';
}


// Déclaration d'une variable.
var message3;

// Appel de la fonction et récupération de la valeur renvoyée dans une variable intermédiaire.
message3 = sayHello3();
document.write('<h2>' + message3 + '</h2>');

// Nouvel appel de la fonction.
message3 = sayHello3();
document.write('<h4>' + message3 + '</h4>');