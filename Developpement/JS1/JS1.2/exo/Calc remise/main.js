/*Énoncé

L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.
Détails

    L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
    La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
    Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
    S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
    Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.

Modifié le: jeudi 10 août 2017, 14:39

montantHT
remise oui non yes no 
si remise afficher remise à la fin 
si pas de remise de rien afficher */

let montantHT = undefined;
let isRemise = undefined;
let montantRemise;

const TVA = 20;
let tauxRemise = undefined;
let montantTTC, totalRemise, montantTVA;


while(montantHT == undefined){
    montantHT = parseFloat(prompt("Entrez votre prix", "ici"));
    if(isNaN(montantHT)){
        montantHT = undefined;
    }
}

while(isRemise == undefined){
    isRemise = prompt("Voulez vous une remise (oui / yes ou no / non")
    
    if((isRemise == 'oui') || (isRemise == 'yes')){
        isRemise = true;
        while(tauxRemise == undefined){
            tauxRemise = parseFloat(prompt("Entrez un nombre entre 0 et 50 pour votre remise : "))
            
            if((!isNaN(tauxRemise)) && (tauxRemise <= 50) && (tauxRemise > 0)){
                console.log('remise OK' + tauxRemise)
                // Calcul du monta de la remise
                montantRemise = montantHT * tauxRemise / 100
                // Maj du montanHT
                montantHT = montantHT - montantRemise;
            }else{
                tauxRemise = undefined;
            }
        }
    }else if((isRemise == 'non')||(isRemise == 'no')){
        isRemise = false;
    }else{
        isRemise = undefined;
    }
}

montantTVA = montantHT * TVA / 100;
montantTTC = montantTVA + montantHT;

/*if(isRemise){
    totalRemise = montantTTC * tauxRemise / 100;
}*/

document.write('<p>Votre Montant HT : ' + montantHT + "</p>");

if(isRemise){
    document.write('<p>Votre remise de : ' + totalRemise + "</p>");
    montantTTC -= totalRemise; 
    document.write('<p>se qui vous donne : ' + montantTTC + " TTC</p>");
}else{
    document.write('<p>Pas de remise sur votre prix</p>');
    document.write('<p>se qui vous donne : ' +  montantTTC + " TTC</p>");
}
