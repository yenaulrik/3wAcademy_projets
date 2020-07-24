<?php 
session_start();
if($_SESSION['connected']){
   
    if(isset($_POST['content']) && isset($_POST['title']) && isset($_POST['author']) ){
        echo ' en avant !';

        $content = htmlspecialchars($_POST['content']);
        $title = htmlspecialchars($_POST['title']);
        $author = htmlspecialchars($_POST['author']);
        
        $today = date_create('now')->format('Y-m-d H:i:s');
        echo $today;
        $sql3 = "INSERT INTO `blog_post` (`id`, `title`, `post_content`, `post_created_at`, `category_id`, `user_id`, `author_id`) VALUES (NULL, :title, :content, :today, '1', '2', :author)";
            
        include './Database.class.php';
        //---------
        $query_update = $pdo->prepare($sql3);
        $query_update->execute(array(   ':title' => $title,
                                        ':content' => $content,
                                        ':author' => $author,
                                        ':today' => $today
                                    ));
        header('Location: admin.php');


    }else{
        include 'bdd.php';
        $sq2 = "SELECT `id`,`first_name`,`last_name` FROM `blog_author`";
        $query2 = $pdo->query($sq2);
        $result_author = $query2->fetchAll(); 
        
        include 'admin.phtml';

    }




}else{header('Location: index.php');}