/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function updateList() {
    // Ajout / sup cadre vert
    this.classList.toggle('selected')
    // Liste de photos selectionnées
    let photosListSelected = document.querySelectorAll('li.selected')
    // Mise à jour du nombre de photos selectionnées, sur la dans le p
    tagPhotosSelected.textContent = photosListSelected.length
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
const photos = document.querySelectorAll('#photos-list li')
const tagPhotosSelected = document.querySelector('p span')

document.addEventListener('DOMContentLoaded', function(){
    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener('click', updateList)
    }
})