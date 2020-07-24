<?php

include 'bdd.php';

$pdo = new Database();

    
    $sql = "SELECT blog_post.id,`title`,`post_content`, DATE_FORMAT(`post_created_at`, '%d/%m/%Y %Hh%i') AS `date`,`first_name`,`last_name`
            FROM `blog_post`
            INNER JOIN blog_author ON blog_author.id = blog_post.author_id
            ORDER BY `post_created_at` DESC";




//---------
        $query = $pdo->query($sql);
        $result = $query->fetchAll(); 
   
include 'show_post.phtml';
