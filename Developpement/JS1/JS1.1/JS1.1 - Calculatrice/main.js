alert('Affichage de la date');

let day, month, year, date;


day = ["Lundi" , "Mardi" ,"Mercredi","Jeudi" , "Vendredi" , "Samedi" , "Dimanche"];
// on demande la date jour par jour
day = prompt("entrez le numéro du jour");
month = prompt("entrez le numéro du mois")
year = prompt("entrez l'année");

date = new Date(year,day,month);
console.log(day[0]);

//on associe les jours a la date

//on affiche