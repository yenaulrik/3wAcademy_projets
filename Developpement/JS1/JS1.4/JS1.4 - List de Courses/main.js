// Enoncé

// Gérer une liste de courses en affichant les informations dans la console du navigateur web.
// Détails

//     La liste de courses est stockée dans une seule variable.
//     Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
//     Les fonctionnalités de gestion de la liste de courses sont :
//         Ajouter un produit par son nom
//         Supprimer un produit ayant un nom spécifique
//         Supprimer tous les produits
//         Afficher la taille et le contenu de la liste
//     Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
//     Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
//     Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations

let listCourses = [
    'Banane',
    'orange',
    'Conserve',
    'olives'
    ]
    
    console.log(listCourses)

// // FONTCIONS de modification du tableau :

// GetList(tableau) => affiche tout le tableau (taille) (numero + article)
// AddListEnd(tableau, String 'article') => ajoute un article à la fin du tableau 
// AddListTop(tableau, String 'article') => ajoute un article au début du tableau
// DeleteListName(tableau, String 'article') => supprime l'article précis
// DeleteListId(tableau, int id)  => supprime l'article à l'ID précis
// ClearList(tableau) => vide entièrement le tableau

function GetList(tableau){
    console.log('Liste des Courses : ' + tableau.length + ' éléments présents')
    for(let i = 0 ; i < tableau.length ; i++){
        console.log( i+1 + ' : ' + tableau[i])
    }
}
function ClearList(tableau){
    let tabLength = tableau.length
    tableau.splice(0 , tabLength)
    console.log('Le Tableau a été entièrement vidé !')
}

function AddListEnd(tableau, article){
   tableau =  tableau.push(article)
   console.log(article + ' à été ajouté à la fin du tableau !')
}
function AddListTop(tableau, article){
    tableau =  tableau.unshift(article)
    console.log(article + ' à été ajouté au début du tableau !')
}

function DeleteListName(tableau, name){
    console.log( name + ' a été supprimé de la liste id : ' + (tableau.indexOf(name) +1))
    tableau.splice(tableau.indexOf(name) , 1)
}

function DeleteListId(tableau, id){
    console.log(tableau[id - 1] + ' à la position : ' + id + ' a été supprimé')
    tableau.splice(id - 1 , 1)
}

// // FONTCIONS de modification du tableau :

// GetList(tableau) => affiche tout le tableau (taille) (numero + article)
// AddListEnd(tableau, String 'article') => ajoute un article à la fin du tableau 
// AddListTop(tableau, String 'article') => ajoute un article au début du tableau
// DeleteListName(tableau, String 'article') => supprime l'article précis
// DeleteListId(tableau, int id)  => supprime l'article à l'ID précis
// ClearList(tableau) => vide entièrement le tableau


GetList(listCourses)
AddListEnd(listCourses, 'Artichaux')
GetList(listCourses)
AddListTop(listCourses, 'Radis')
GetList(listCourses)
DeleteListName(listCourses, 'Radis')
GetList(listCourses)
DeleteListId(listCourses, 4)
GetList(listCourses)
ClearList(listCourses)
GetList(listCourses)
