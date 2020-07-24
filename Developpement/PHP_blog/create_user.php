<?php 

     if(isset($_GET['user']) && isset($_GET['email']) && isset($_GET['password']) ){
        echo ' en avant !';



        $first_name = htmlspecialchars($_GET['first_name']) ;
        $last_name = htmlspecialchars($_GET['last_name']) ;
        $check = isset($_GET['check']);

        include './Database.class.php';
        
        if(isset($_GET['first_name']) && isset($_GET['last_name']) && isset($_GET['check'])){
            $sql3 = "INSERT INTO `blog_author` (`id`, `first_name`, `last_name`) VALUES (NULL, :first_name, :last_name)";
                                 
        
        //---------
        $query_update = $pdo->prepare($sql3);
        $query_update->execute(array(   ':first_name' => $first_name,
                                        ':last_name' => $last_name
                                    ));

        


        $sql3 = "SELECT * FROM `blog_author` WHERE `first_name`= :first_name AND `last_name` = :last_name";
        
        
        //---------
        $query_author = $pdo->prepare($sql3);
        $query_author->execute(array(   ':first_name' => $first_name,
                                        ':last_name' => $last_name
                                    ));
        $result = $query_author->fetch();    
        $author_id = $result['id'];                                                 
        }






// si box checked => chercher l'iD généré dans la bdd pour le metre dans id_author de user













        $user = htmlspecialchars($_GET['user']);
        $password = htmlspecialchars($_GET['password']);
        $email = htmlspecialchars($_GET['email']);
        $id_to_set = NULL;
        if(isset($author_id)){
            $id_to_set = $author_id;
        }

        $today = date_create('now')->format('Y-m-d H:i:s');
        echo $today;
        $sql3 = "INSERT INTO `user` (`id`, `user_name`, `password`, `user_created_at`, `avatar`, `email`, `as_admin`, `author_id`) VALUES (NULL, :user, :password, :today, 'aze', :email, '0', :id)";
            
        include 'bdd.php';
        //---------
        $query_update = $pdo->prepare($sql3);
        $query_update->execute(array(   ':user' => $user,
                                        ':password' => $password,
                                        ':email' => $email,
                                        ':today' => $today,
                                        ':id' => $id_to_set
                                    ));
        
        
        
        header('Location: index.php');
    }else{
       
        
       // include 'create_user.phtml';
    }
