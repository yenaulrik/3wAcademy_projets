// Déclaration d'une variable.
var firstName;
var lastName;
var nomEntier;
/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */
firstName = window.prompt('Comment vous appelez-vous ?');
lastName = prompt('Ton nom maintenant ?');
// Affichage du contenu de la variable dans un paragraphe HTML.
nomEntier = firstName + " " + lastName;

document.write('<p>' + nomEntier + '</p>');