<div class="container">
    <h2><i class="fas fa-cogs"></i>  Panneau d'Edition</h2>
    <div class="jumbotron">
    <?php foreach($result as $post):?>
        
        


        <div class="list-group">
            <a href="edit_post.php?id_post=<?= $post['id'];?>" class="list-group-item list-group-item-action flex-column align-items-start ">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><?= $post['title'] ?></h5>
                    <small>Article écrit par : <?= $post['first_name'] ?> <?= $post['last_name'] ?> le <?= $post['date']  ?></small>
                </div>
                <p class="mb-1"><?= substr($post['post_content'], 0, 50); ?>[...]</p>
                <small>le <?= $post['date']  ?></small>
            </a>
        </div>



    <!--        <h3 class="display-4"><= //$post['title'] ?></h3>
            <p class="lead">Article écrit par : <= //$post['first_name'] ?> <= //$post['last_name'] ?> le <= //$post['date']  ?></p>
        <hr class="my-4">
            <p><= //substr($post['post_content'], 0, 50); ?>[...]</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="edit_post.php?id_post=<= //$post['id'];?>" role="button">Modifier</a>
            </p>
    -->    
    <?php endforeach;?>
    <a href="add_post.php?mode=edit"><button type="button" class="btn btn-success btn-lg">Nouveau Post</button></a>
    </div>
</div>


