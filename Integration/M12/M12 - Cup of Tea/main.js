'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
//HOVER LINKS OPACITY

let lien_nav_header = document.querySelectorAll('.menu li a')
let index_tea_article = document.querySelectorAll('.tea article img')
let footer_vertical_links = document.querySelectorAll('.container-credit a')

//BOUTONS

let index_bouton_marron = document.querySelectorAll('.product article a')
let thes_bouton_marron = document.querySelectorAll('.thes article a')

//ARTICLES SCALE + SHADOW

let index_product_article = document.querySelectorAll('.product article')
let thes_article = document.querySelectorAll('.thes article')

//------- Select details
let details_champs_select = document.getElementById('selection')
let details_select;
let details_prix = document.getElementById('prix_details')
//------- LISTE DES THES

let page_details = document.querySelector('.details')
let details_change_img = document.querySelector('.img_details img')
let details_change_h2 = document.querySelector('.details h2')
let details_change_h3 = document.querySelector('.details h3')
class thes{
	  constructor(nom_complet,image,type){
		this.image = image;
		this.nom_complet = nom_complet;
		this.type = type;
	  }
	}
	
	let london = new thes("Blue of London","img/product/product3_big.jpg","Thé noir");
	let lords = new thes("Thé des Lords","img/product/product6_big.jpg","Thé noir");
	let vahines = new thes("Thé des Vahinés","img/product/product7_big.jpg","Thé noir");
	
	let hammam = new thes("Thé du hammam","img/product/product1_big.jpg","Thé vert");
	let vive_le_the = new thes("Vive le thé","img/product/product4_big.jpg","Thé vert");
	let alizes = new thes("Thé des Alizés","img/product/product5_big.jpg","Thé vert");
	
	let vive_les_fetes = new thes("Vive les fêtes","img/product/product8_big.jpg","Oolong");
	let oranger = new thes("Fleur d'oranger Oolong","img/product/product9_big.jpg","Oolong");
	let agrumes = new thes("Oolong 7 agrumes","img/product/product10_big.jpg","Oolong");
	
	let songes = new thes("Thé des songes blanc","img/product/product11_big.jpg","Thé blanc");
	let bai = new thes("Bai mu dan","img/product/product12_big.jpg","Thé blanc");
	let auguilles = new thes("Auguilles d'argent","img/product/product13_big.jpg","Thé blanc");
	
	let verveine = new thes("Rooibos à la verveine","img/product/product14_big.jpg","Rooibos");
	let passion = new thes("Spicy Passion","img/product/product15_big.jpg","Rooibos");
	let amants = new thes("Rooibos des amants","img/product/product16_big.jpg","Rooibos");
	
	let herbo = new thes("Infusion Herboriste","img/product/product2.jpg","Infusion");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function change_contenu_page_details(){
    let valeur = page_details.id

    if(valeur == 'london'){
        details_change_img.src = london.image
        details_change_h2.textContent = london.nom_complet
        details_change_h3.textContent = london.type
    }else if(valeur == 'lords'){
        details_change_img.src = lords.image
        details_change_h2.textContent = lords.nom_complet
        details_change_h3.textContent = lords.type
    }else if(valeur == 'vahines'){
        details_change_img.src = vahines.image
        details_change_h2.textContent = vahines.nom_complet
        details_change_h3.textContent = vahines.type
    }else if(valeur == 'hammam'){
        details_change_img.src = hammam.image
        details_change_h2.textContent = hammam.nom_complet
        details_change_h3.textContent = hammam.type
    }else if(valeur == 'vive_le_the'){
        details_change_img.src = vive_le_the.image
        details_change_h2.textContent = vive_le_the.nom_complet
        details_change_h3.textContent = vive_le_the.type
    }else if(valeur == 'alizes'){
        details_change_img.src = alizes.image
        details_change_h2.textContent = alizes.nom_complet
        details_change_h3.textContent = alizes.type
    }else if(valeur == 'vive_les_fetes'){
        details_change_img.src = vive_les_fetes.image
        details_change_h2.textContent = vive_les_fetes.nom_complet
        details_change_h3.textContent = vive_les_fetes.type
    }else if(valeur == 'oranger'){
        details_change_img.src = oranger.image
        details_change_h2.textContent = oranger.nom_complet
        details_change_h3.textContent = oranger.type
    }else if(valeur == 'agrumes'){
        details_change_img.src = agrumes.image
        details_change_h2.textContent = agrumes.nom_complet
        details_change_h3.textContent = agrumes.type
    }else if(valeur == 'songes'){
        details_change_img.src = songes.image
        details_change_h2.textContent = songes.nom_complet
        details_change_h3.textContent = songes.type
    }else if(valeur == 'bai'){
        details_change_img.src = bai.image
        details_change_h2.textContent = bai.nom_complet
        details_change_h3.textContent = bai.type
    }else if(valeur == 'auguilles'){
        details_change_img.src = auguilles.image
        details_change_h2.textContent = auguilles.nom_complet
        details_change_h3.textContent = auguilles.type
    }else if(valeur == 'verveine'){
        details_change_img.src = verveine.image
        details_change_h2.textContent = verveine.nom_complet
        details_change_h3.textContent = verveine.type
    }else if(valeur == 'passion'){
        details_change_img.src = passion.image
        details_change_h2.textContent = passion.nom_complet
        details_change_h3.textContent = passion.type
    }else if(valeur == 'amants'){
        details_change_img.src = amants.image
        details_change_h2.textContent = amants.nom_complet
        details_change_h3.textContent = amants.type
    }else if(valeur == 'herbo'){
        details_change_img.src = herbo.image
        details_change_h2.textContent = herbo.nom_complet
        details_change_h3.textContent = herbo.type
    }
}

function change_prix(){
    details_select = document.getElementById('selection').selectedIndex
    if(details_select == 0){
        details_prix.textContent = '9,00€'
    }else if(details_select == 1){
        details_prix.textContent = '40,00€'
    }else if(details_select == 2){
        details_prix.textContent = '75,00€'
    }
}



function start(){
        if(page_details){
            change_contenu_page_details()
        }
        
    //HOVER LINKS
        for(let i = 0 ; i < lien_nav_header.length ; i++){
            lien_nav_header[i].classList.add('link_zoom')
        }
        for(let i = 0 ; i < index_tea_article.length ; i++){
            index_tea_article[i].classList.add('link_zoom')
        }
        for(let i = 0 ; i < footer_vertical_links.length ; i++){
            footer_vertical_links[i].classList.add('link_zoom')
        }
        
    //BOUTONS
        for(let i = 0 ; i < index_bouton_marron.length ; i++){
            index_bouton_marron[i].classList.add('bouton_marron')
        }
        for(let i = 0 ; i < thes_bouton_marron.length ; i++){
            thes_bouton_marron[i].classList.add('bouton_marron')
        }
    
    //ARTICLES SCALE + SHADOW
        for(let i = 0 ; i < index_product_article.length ; i++){
            index_product_article[i].classList.add('article_zoom')
        }
        for(let i = 0 ; i < thes_article.length ; i++){
            thes_article[i].classList.add('article_zoom')
        }
        
    // CHANGEMENT PRIX AVEC LES OPTIONS SELECT > DETAILS   
        if(details_champs_select){
        details_champs_select.addEventListener('click', change_prix)
        }
        
window.clearTimeout(timerID)
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/



document.addEventListener('DOMContentLoaded', function(){
    
let timerID = window.setInterval(start, 500);


})



