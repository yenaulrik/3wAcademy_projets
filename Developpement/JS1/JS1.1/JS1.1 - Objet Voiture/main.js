/*--------------------------------------*/
/*  Je sais j'ai mis de la mise en page */
/*______________________________________*/


let option = { month : '2-digit' , year : 'numeric' , day : '2-digit'}

let voiture = {
    carType : 'renault',
    carYear : 1999,
    carDate : new Date('2001-01-12').toLocaleDateString('fr-FR' , option),
    carPerson : ['Olivia', 'Vincent']
}
console.log(voiture);

document.write('<p>Une belle voiture que voici !</p><p>Model : ' + voiture.carType +'</p>' );
document.write('<p>Voiture Fabriqué en : ' + voiture.carYear + '</p>');
document.write('<p>Voiture acheté le : ' + voiture.carDate + '</p>');
document.write('<p>Personnespouvant conduire la voiture : ' + '<ul>' );

voiture.carPerson.forEach((person)=>{ 
    document.write('<li>' + person + '</li>');
})

document.write('</ul></p>');