<?php

/*Manipulation d'un fichier csv*/
// Nom du fichier à manip
define('FILE_CSV', 'task.csv');

//////// Functions //////////
// 1 - loadData
function loadData() {
    // ouvrir le fichier
    $handle = fopen(FILE_CSV, 'a+');
    
    // Tableau qui va stocker mes données
    $datas = [];
    
    while(true) {
        
        // On récupère une ligne du fichier (en commencant par la 1ère ligne)
        $data = fgetcsv($handle);
        
        // Test de sortie
        /*if($data === false)*/
        if(!$data) {
            // Forcer la sortie de la boucle
            break;
        }
        
        // Ajout d'une donnée à mon tableau
        array_push($datas, $data);
    }
    
    // Renvoyer le tableau qui contient nos données
    return $datas;
}

// 2 - saveData
function add(){
    
    $newData = [$_POST['title'], $_POST['content'], $_POST['date'] ];

    switch($_POST['criticity']){
        case '1' : array_push($newData, 'priority-low');
        break;
        case '2' : array_push($newData, 'priority-medium');
        break;
        case '2' : array_push($newData, 'priority-hight');
        break;
        default : array_push($newData, 'priority-hight');
        break;
    }
    return $newData;
}
// 3 - saveDatas
function saveDatas(array $data) {
    $datas = loadData();

    array_push($datas, $data);
    $handle = fopen(FILE_CSV, 'w');

    foreach ($datas as $fields) {
        if(is_array($fields)){
            fputcsv($handle, $fields);
        }
    }
    
    fclose($handle);

}

// 4 - addData


// 5 - removeData

if(isset($_POST['indexes']) && is_array($_POST['indexes'])){
    $newData = removeData($_POST['indexes']);
}

function removeData(array $itemsRemoved) {
    // Current datas
    $datas = loadData();
    
    // New Datas
    $newDatas = $_POST['indexes'];
    
    foreach($datas as $key => $data) {
        
        if(!in_array($key, $itemsRemoved)) {
            array_push($newDatas, $data);
        }
    }

    $handle = fopen(FILE_CSV, 'w');

    foreach ($newDatas as $fields) {
        if(is_array($fields)){
            fputcsv($handle, $fields);
        }
    }
    
    fclose($handle);
}

