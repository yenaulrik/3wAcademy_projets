// Déclaration d'une variable.
let firstVariable;
firstVariable = 'Bonjour tout le monde !';

const FIRST_CONSTANT = 'Ceci est une constante !';

// Affectation d'une valeur à la variable.

// Affichage du contenu de la variable directement dans la page HTML.
document.write(firstVariable);
document.write(FIRST_CONSTANT);
// Déclaration d'une constante et affectation immédiate d'une valeur.

// La ligne de code ci-dessous est une erreur car on NE PEUT PAS modifier une constante.
// FIRST_CONSTANT = 'Modification de la constante';


// Affichage du contenu de la constante directement dans la page HTML.


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
 
 
 var question = false;
 
 if(!question){
     let vraie = true ; // ici on accede à vraie
     question = vraie ;
 }
 
 // ici on ne peut plus y accéder