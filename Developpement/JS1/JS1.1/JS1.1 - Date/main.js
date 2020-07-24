alert('Affichage de la date / eng methode');

let day, month, year, date,dateString;


let dayList = [ "Dimanche","Lundi" , "Mardi" ,"Mercredi","Jeudi" , "Vendredi" , "Samedi"];
let monthList = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
// on demande la date jour par jour
day = prompt("entrez le numéro du jour");
month = prompt("entrez le numéro du mois") - 1;
year = prompt("entrez l'année");

date = new Date(year ,month ,day);
dateString = (`Nous sommes le ${dayList[date.getDay()]} ${date.getDate()} du mois de ${monthList[date.getMonth()]} ${date.getFullYear()}`);
console.log("Date complète en anglais" +date);
console.log(dateString);
document.write(dateString)



/*Version Courte*/
var dateShort = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(dateShort.toLocaleDateString('fr-FR', options))