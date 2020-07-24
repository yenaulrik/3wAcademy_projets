<?php 
session_start();
if($_SESSION['connected']){
    //arrivé sur la page et chargement des articles
    if(isset($_GET['id_post'])){
        $id_post = $_GET['id_post'];
        //SI ADMIN 1
        $sq2 = "SELECT `id`,`first_name`,`last_name` FROM `blog_author`";
        $sql = "SELECT blog_post.id ,`title`,`post_content`,DATE_FORMAT(`post_created_at`, '%d/%m/%Y %Hh%i') AS `date`,`first_name`,`last_name`,`author_id`
        FROM `blog_post`
        INNER JOIN blog_author ON blog_author.id = blog_post.author_id
        WHERE blog_post.id = :id_post";

    include 'bdd.php';
    //---------
    $query = $pdo->prepare($sql);
    $query->execute(array(':id_post' => $id_post));
    $result = $query->fetch(); 
    
    $query2 = $pdo->query($sq2);
    $result_author = $query2->fetchAll(); 

    // Chargement de l'article à éditer

    //affichage dans le formulaire .phtml 
    include 'admin.phtml';

    

    //si le formulaire renvoie des infos valides les enregistrer

    //retourner admin.php
    //header('Location: admin.php');
    // INSERT INTO `post` (`id`, `title`, `post_content`, `post_created_at`, `category_id`, `user_id`, `author_id`) VALUES (NULL, 'qsd', 'qsd', '2019-12-10 00:00:00', '1', '1', '1');
    }else if(isset($_GET['content']) && isset($_GET['title']) && isset($_GET['author']) ){
        echo ' en avant !';
        $content = htmlspecialchars($_GET['content']);
        $title = htmlspecialchars($_GET['title']);
        $author = htmlspecialchars($_GET['author']);
        $id_post = htmlspecialchars($_GET['id']);
    

        $sql3 = "UPDATE `blog_post` SET `title` = :title , `post_content` = :post_content , `author_id` = :author_id WHERE id= :id ";
            
        include 'bdd.php';
        //---------
        $query_update = $pdo->prepare($sql3);
        $query_update->execute(array(   ':title' => $title,
                                        ':post_content' => $content,
                                        ':author_id' => $author,
                                        ':id' => $id_post
                                    ));
        header('Location: admin.php');


    }else if(isset($_GET['delete'])){
        
        $id = $_GET['delete'];
        $sql4 = "DELETE FROM `blog_post` WHERE `blog_post`.`id` = :id";
            
        include 'bdd.php';
        //---------
        $query_delete = $pdo->prepare($sql4);
        $query_delete->execute(array( ':id' => $id ));
        header('Location: admin.php');
    }


    //DELETE FROM `post` WHERE `post`.`id` = 1

}//else{header('Location: index.php');}