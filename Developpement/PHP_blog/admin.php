<?php
session_start();

if($_SESSION['connected']){

    if(isset($_GET['deco']) == 'deco'){
         $_SESSION['connected'] = false; 
         $_SESSION['admin'] = '';
         $_SESSION['user'] = '';
         header('Location: admin.php');
        } 
        
    if(isset($_GET['page']) == 'admin'){
        if($_SESSION['admin'] == '1'){
            $sql = "SELECT post.id ,`title`,`post_content`,DATE_FORMAT(`post_created_at`, '%d/%m/%Y %Hh%i') AS `date`,`first_name`,`last_name`
                FROM `blog_post`
                INNER JOIN blog_author ON blog_author.id = blog_post.author_id
                ORDER BY `post_created_at` DESC";
        include './Database.class.php';
        //---------
        $query = $pdo->query($sql);
        $result = $query->fetchAll(); 

        
        include 'admin.phtml';


        }else{

            $sql = "SELECT blog_post.id ,`title`,`post_content`,DATE_FORMAT(`post_created_at`, '%d/%m/%Y %Hh%i') AS `date`,`first_name`,`last_name`
                FROM `blog_post`
                INNER JOIN blog_author ON blog_author.id = blog_post.author_id
                WHERE blog_post.author_id = :session_user_id
                ORDER BY `post_created_at` DESC";
            include 'bdd.php';
            $query_author = $pdo->prepare($sql);
            $query_author->execute(array(   ':session_user_id' => $_SESSION['id_author']
                                        ));
            $result = $query_author->fetchAll();
        }
        include 'admin.phtml';




    }else{
        header('Location: admin.php?page=admin');    
    }





}else{header('Location: index.php');}