<?php

function translate(){
    
    $dico = [
        'soleil' => 'sun',
        'chat' => 'cat',
        'chien' => 'dog'
        ];
    
    $lang = $_POST['lang'];
    $word = $_POST['word'];
    $result;
    
    if(in_array($word , $dico)){
        $result = $dico[$word];
    }else{
        $result = $word . ' n\'est pas dans le dictionnaire ';
    }
    
    return $result;
    
    
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Translator</title>
</head>
<body>
    <form action="index.php" method='post'>
        <input type="text" name="word">
        <select name="lang">
            <option value="fr">Français vers Anglais</option>
            <option value="en">Anglais vers Français</option>
        </select>
        <button type="submit">Translate</button>
    </form>
    <?php echo translate() ?>
</body>
</html>