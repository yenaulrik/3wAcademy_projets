<?php
include 'utilities.php';


if($_POST['date'] && $_POST['title'] && $_POST['content'] && $_POST['criticity'] ){
    
    $newData = add();
    var_dump($newData);
    saveDatas($newData);
    header("Location: index.php"); 
    exit;
}else{
    echo '<script>alert("Vous devez remplir tous les champs !")</script>';
    /* header("Location: index.php"); */
    exit;
}

/*  */
