<?php

include 'utilities.php';

// CSV : 0 : title, 1 : Description,

// Test si $_POST exist
    // Quelles sont les clés 'remove' ou 'title'
    
    // Traitement soit suppression soit ajout
    
// Fin Test

// Init date now
$today = date_create();


// Chargement du fichier csv
$tasks = loadData();

// inclure l'index.phtml, afin d'afficher la variable qui contient le text du fichier csv
include 'index.phtml';