

/*************************************************************************************************/
/* ***************************************** VARIABLES ***************************************** */
/*************************************************************************************************/
console.log('chargement des pages ok')


let $bouton_admin = $('#bouton_admin')
let $header = $('header .container')
let $content = $('.content')

/*************************************************************************************************/
/* ***************************************   FONCTIONS   *************************************** */
/*************************************************************************************************/

/* ************** ACCUEIL **************/



/* *********** PANNEAU ADMIN **********/
function getForm(htmlForm){
    console.log('lancement getForm')
    let p = document.createElement('p')
    p.innerHTML(htmlForm)
    p.appendTo($header)
    
}

function show_menu_admin(){
    $bouton_admin.off()
    $.get('admin_conectionform.php', function(data, status){ 
        $header.append(data)
    $('#formulaire_admin').slideDown("slow");
  });
  
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

$(function(){
    
    $bouton_admin.on('click', show_menu_admin)
   
})