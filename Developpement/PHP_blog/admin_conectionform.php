<?php
session_start();

//if $post user == user/bdd || $post user == mail/bdd && post pass == pass bdd
//session define
if(isset($_POST['user']) && isset($_POST['password'])){
        
        $post_user = $_POST['user'];
        $post_password = $_POST['password'];
        //echo '<p>OUVERTURE BDD :: pseudo entré : ' . $post_user . 'pass entrée : ' . $post_password . '</p>';
        $sql = "SELECT `password`,`user_name`,`email`,`as_admin`,`author_id` FROM `blog_user`";
        
        include './Database.class.php';
    //---------
        $query = $pdo->query($sql);
        
        $result = $query->fetchAll(); 
        foreach($result as $user){
            //echo '<p>FOREACH :: nom : ' . $user['user_name'] . ' pass : ' . $user['password'] . '</p>';
            if(htmlspecialchars($_POST['user']) == $user['user_name'] && htmlspecialchars($_POST['password']) == $user['password']){
                $_SESSION['user'] = $user['user_name'];
                $_SESSION['connected'] = true;
                $_SESSION['id_author'] = $user['author_id'];
                if($user['as_admin'] == 1){
                    $_SESSION['admin'] = true;
                }else{
                    $_SESSION['admin'] = false;
                }
                //header('Location: index.php');
                header('Location: admin.php');
            break;
            }else{
                header('Location: index.php');
            }
        }
}else{
    include 'admin_conectionform.phtml';
}

