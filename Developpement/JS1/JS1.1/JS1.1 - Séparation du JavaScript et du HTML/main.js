/*
 * Nous sommes ici directement en JavaScript, aucune balise <script> n'est nécessaire !
 *
 * Exactement comme pour les fichiers .css de feuilles de styles
 */

document.write('<p>Bonjour tout le monde !</p>');

window.alert('Bonjour tout le monde !');

console.log('Bonjour tout le monde !');
// Déclaration d'une constante et affectation immédiate d'une valeur.
const FIRST_CONSTANT = 'Ceci est une constante !';

// La ligne de code ci-dessous est une erreur car on NE PEUT PAS modifier une constante.
// FIRST_CONSTANT = 'Modification de la constante';


// Affichage du contenu de la constante directement dans la page HTML.
document.write(FIRST_CONSTANT);


/*
 * En lisant le code d'un projet, le développeur peut se demander pourquoi telle ou telle valeur
 * obscure (un nombre à virgule compliqué par exemple) est utilisée.
 *
 * En remplaçant cette valeur par une constante avec un nom précis et clair on documente simplement
 * le code, au même titre que quand on nomme correctement une variable.
 *
 *
 * Règle d'or : on code pour des humains et pas pour des machines !
 */