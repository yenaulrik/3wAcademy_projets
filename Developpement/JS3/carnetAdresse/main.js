//-------------------------------------------------
//-------------------VARIABLES --------------------
//-------------------------------------------------
const $BOUTON_PLUS = document.querySelector('#bouton_plus')
const $BOUTON_TRASH = document.querySelector('#bouton_trash')
const $BOUTON_CANCEL = document.querySelector('#bouton_annuler')
const $BOUTON_SUBMIT = document.querySelector('#bouton_submit')

const $FORMULAIRE = document.querySelector('#formulaire')
const $LIST_NOM = document.querySelector('#list_noms')


const $FORM_CIVILITE = document.querySelector('#civilite')
const $FORM_NOM = document.querySelector('#nom')
const $FORM_PRENOM = document.querySelector('#prenom')
const $FORM_TEL = document.querySelector('#tel')

let carnet = [];

//-------------------------------------------------
//-------------------foncctions--------------------
//-------------------------------------------------

//TODO ; verifier le select
// .. metre les liens avec les data- pour modifier les champs

function affichageListeCranet(){
   
    if(localStorage.getItem('carnet') != null){
        loadList()
        $LIST_NOM.innerHTML = "" ;
        carnet.map( (contact, indice) => {
            let h2 = document.createElement('h2')
                h2.textContent = contact.nom
                h2.setAttribute("data-id-list", indice)
            let ul = document.createElement('ul')
                ul.classList.add('hidden')
                ul.setAttribute("data-id-list", indice)
                creerLien(h2, ul)
            let il_nom = document.createElement('li')
                il_nom.textContent = contact.civilite + ' ' + contact.nom + ' ' + contact.prenom

            let il_tel = document.createElement('li')
                il_tel.textContent = contact.tel

            let btn_edit = document.createElement('div')
                btn_edit.setAttribute("data-id-list", indice)
                btn_edit.classList.add("btn", "btn-primary", "btn-lg")
                
                btn_edit.id = 'bouton_submit'
                btn_edit.textContent = 'Editer'

            ul.appendChild(il_nom)
            ul.appendChild(il_tel)

            ul.appendChild(btn_edit)
            $LIST_NOM.appendChild(h2)
            $LIST_NOM.appendChild(ul)
        })

    }else{$LIST_NOM.innerHTML = "" ;}
}

function creerLien(titre, deffinition){
    $(titre).click( function(){
        this.classList.toggle('blue')
        deffinition.classList.toggle('hidden')
    })
    
}

function loadList(){
    let carnet = JSON.parse(localStorage.getItem('carnet'))
    
    // Check if type is realy an array
    
    console.log('localStorage => carnet', carnet)
}

function delete_list(){
    if(confirm("Voulez-vous effacer toute la liste de vos contacts ?")){
        localStorage.clear('carnet')
        /*localStorage.setItem('carnet', [])*/
        carnet = [];
        affichageListeCranet()
    }
    console.log('Suppression de la liste')
}

function showFormulaire(){
    console.log("affichage du formulaire")
    $FORMULAIRE.classList.remove('hidden')
}

function hideFormulaire(){
    console.log("retrait du formulaire")
    $FORMULAIRE.classList.add('hidden')
}

function checkFormulaire(){ //verifier le select (-_-)
    /*alert($FORM_CIVILITE.value)*/
    
  //  if( !$FORM_NOM.validity.valid || !$FORM_PRENOM.validity.valid || !$FORM_TEL.validity.valid ){
    //    alert('Veuillez remplir tous les champs correctement')
    //}else{
        saveFormulaire()
   // }
}

function saveFormulaire(){
    console.log('extraction du formulaire')
    carnet.push({
        'civilite' : $FORM_CIVILITE.value,
        'nom' : $FORM_NOM.value,
        'prenom' : $FORM_PRENOM.value,
        'tel' : $FORM_TEL.value
    })
    
    $FORM_NOM.value = ''
    $FORM_PRENOM.value = ''
    $FORM_TEL.value = ''
    
    let exportCarnet = JSON.stringify(carnet)
    console.log('formulaire => tab')
    hideFormulaire()
    console.log('exportCarnet => localStorage')
    localStorage.setItem('carnet', exportCarnet)
    affichageListeCranet()
}

//-------------------------------------------------
//-------------------   CORE   --------------------
//-------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){
    //chargement du carnet de test
    if(localStorage.getItem('carnet') != null){
        carnet.push({ 'civilite' : 'Madame',
                    'nom' : 'Jolie',
                    'prenom' : 'Julie',
                    'tel' : '0633554411'
                })
        carnet.push({ 'civilite' : 'Monsieur',
                    'nom' : 'Paulin',
                    'prenom' : 'Paul',
                    'tel' : '0633554411'
                })
        carnet.push({ 'civilite' : 'Monsieur',
                    'nom' : 'Juliennas',
                    'prenom' : 'Julien',
                    'tel' : '0633554411'
                })
        carnet.push({ 'civilite' : 'Madame',
                    'nom' : 'Aréa',
                    'prenom' : 'Oréo',
                    'tel' : '0633554411'
                })
        let exportCarnet = JSON.stringify(carnet)
        localStorage.setItem('carnet', exportCarnet)
     }
    
    affichageListeCranet()
    $BOUTON_PLUS.addEventListener('click', showFormulaire)
    $BOUTON_TRASH.addEventListener('click', delete_list)
    $BOUTON_CANCEL.addEventListener('click', hideFormulaire)
    $BOUTON_SUBMIT.addEventListener('click', checkFormulaire)
})