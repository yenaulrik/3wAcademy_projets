### Instructions Address Book
## Objectif :
On affiche la liste des personnes si il y en a, sinon on affiche juste les 2 boutons '+' et 'trash'

# Les boutons :
- '+' 	: Affiche un formulaire de création
  (titre:Mademoiselle, Madame,Monsieur/nom/prenom/tel)
- 'trash'	: Supprimer tous les contacts

# Formulaires (on n'affiche que l'un ou l'autre, jamais les 2 en même temps, sauf si il y a des contacts existants) :
	- 'Création' :	
		- Au click sur le bouton, on enregistre les champs dans un tableau json qui sera converti (stringify) pour être stocker dans le localStorage
    		- Pour chaque contact crée, on va créer un object qui va contenir un nom, prenom, titre(M., Mme. , Mlle. )
    
    	- 'Edition'	 :
		- Au click sur le bouton, on affiche le formulaire de création en dessous des détails (avec une séparation 'hr'), mais cette fois on le rempli avec les informations du contact sur lequel on a clické sur le lien 'Editer ce contact'
                 - Ces infos sont stockées dans le localStorage et converti (JSON.stringify), il va donc falloir les rendres lisibles lorsqu'on va les récupérées (JSON.parse)
                    
## Organisation des fichiers :
dépendances jquery : <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

root(racine) :
	- address-book.html ou index.html
    - dir | js :
    	- address-book.js
        - events.js
        - main.js
        - utilities.js
    - dir | css :
    	- style.css

## Steps : 
	1 - Lecture localStorage (méthodes d'accès, manipulations des informations, key->value, format de données, save, load, items)

	2 - Faire le HTML

	3 - Créer l'arborescence des fichiers

	4 - Coder les fichiers JS :
    	      A - main.js : dans $(function() {});
                		- Qui va contenir le code principale, il va donc appeler les fonctions qui inter-agissent sur les boutons (a: Add, Edit, Delete, Save)
                		- Un selecteur qui va afficher le détail du contact(infos contenu dan sle localStorage) au clic sur le lien dans la liste de contacts
              B - events.js : Actions du CRUD
               		- Qui contient les 4 fonctions du CRUD (onClickAddContact, onClickClearAddressBook, onClickEditContact, onClickSaveContact, onClickShowContactDetails)
              C - address-book.js : 4 functions (createContact(4 params : title, firstname, lastName))
               		- Créer une constante qui va nous servir à chaque fois que l'on fera appel au localStorage (ex: const DOM_STORAGE_ITEM_NAME = 'Address Book')
               		- createContact 		-> va créer l'object qui va contenir le contact
                		- loadAddressBook 		-> va charger les datas, depuis le localStorage, qu'il n'est pas vide
                		- refreshAddressBook 	-> va charger les datas, depuis le localStorage, vider le conteneur précédent, pour le remplacé par le nouveau(qui comprend les contacts que l'on vient d'ajouter)
               		- saveAddressBook		-> va sauvegarder le contact dans le localStorage (key->value)
             D - utilities.js : 2 fonctions permettant de charger ou et sauvegarder les infos du localStorage
              		- loadDataFromLocalStorage -> qui va prendre 1 param :
            		- ce paramètre sera la clé de l'élément que l'on veut récupérer (getItem(name))
                		- pour pouvoir l'utiliser (l'afficher), il faudra le désérialié (JSON.parse)
                		- saveDataFromLocalStorage -> qui va contenir 2 params :
            		- le 1er param sera la clé sous laquelle on va enregistrer nos datas = key
			- le 2nd param sera les données que l'on va enregistrer (il faut sérialiser les datas pour pouvoir les stocker JSON.stringify) = value
			- Enregistrer dans le localStorage (setItem(key, value))


== RoadMap ==
## Utilities - Done
## Main : 
	- Créer le gestionnaire d'évènements qui va écouter les différentes actions : 
    	- btn '+' : addContact(titre, nom, prenom, tel)
        - btn 'trash' : removeAddressBook()
        - lien 'showContact' : showContact() via $(this).data('index')
        - lien 'editContact' : editContact() via $(this).data('index')
        - lien 'saveContact' : saveContact() &recup info
        	-> createContact($('#nom').val(), $('#prenom').val(), ....)
            -> reload l'addressBook
            -> vérifier le mode du form : add -> .push(contact)
            							: edit -> recup l'index de l'élément modifier, pour y avoir accès dans notre addressBook et le remplacer par les nouvelles valeurs
      		-> saveAddressBook
            -> cacher le form, form-details
            -> refreshAddressBook()
        
        - refreshAddressBook() // Rafraichissement après chaque action
        
## AddressBook :
	- const ADDRESS_BOOK = 'Address-Book';
    - createContact(titre, nom, prenom, tel) // Créer un objet contact (gestion du titre)
    - loadAddressBook() :
    	- loadFromDataStorage()
        - check si vide ? créer un tableau vide
        - retourner le tableau
    - refreshAddressBook() : 
    	- get loadAddressBook()
        - vider la liste actuellement visible
        - Créer une balise <ul> : let addressBookList = $('<ul>');
        	- boucler(for) sur la variable contenant notre addressBook, pour remplir les <li> :
            	- créer un élément <a> avec l'aide du data('index', index) dans lequel on va insérer du text(nom prenom)
                - créer le <li> et lui injecter la balise <a> que l'on vient de remplir
        - ajouter la liste que l'on vient de créer dans la section $('#address-book').append(addressBookList);
    - saveAddressBook(array addressBook) :
    	- saveToLocalStorage(ADDRESS_BOOK, addressBook);

## Events : 
    - addContact(titre, nom, prenom, tel)
    - removeAddressBook()
    - showContact()
    - editContact()
    - saveContact()

Bonus : 
	- Listes des fonctions utiles JS et jQuery : 
	- address-book.js : Object, toUpperCase, Array, empty, attr, data, append
	- events.js		  : trigger('reset'), date, fadeIn, hide, val, push, fadeOut, text, show
	- main.js		  : on
	- utilities 	  : JSON.stringify, JSON.parse, window.localStorage.setItem(name, jsonData), window.localStorage.getItem(name)

Compréhension du localStorage :
https://www.grafikart.fr/tutoriels/jquery/localstorage-296
Initation à jQuery :
https://www.grafikart.fr/tutoriels/jquery/initiation-jquery-84
Ajax avec jQuery :
https://www.grafikart.fr/tutoriels/jquery/ajax-jquery-520
jQuery on() :
https://www.grafikart.fr/tutoriels/jquery/jquery-on-events-518
Afficher et cacher du contenu avec jQuery :
https://www.grafikart.fr/tutoriels/jquery/afficher-cacher-jquery-196
Formulaire de contact CSS3 :
https://www.grafikart.fr/tutoriels/html-css/contact-form-css3-230
Json :
https://www.grafikart.fr/tutoriels/jquery/json-77