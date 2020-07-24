<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css"/>
    <link href="../../M03/M03 - Green Office/fontAwesome/css/all.css" rel="stylesheet">
    <title>Document</title>
        <?php
            $nomPage = array ('mutualise', 'didie','cloud','contact');
            $i = 0;
            if(isset($_GET['nom'])){
            foreach($nomPage as $elem){
                if($_GET['nom'] == $elem){
                    echo '<style> .' . $elem . '{ color : grey ; }' .
                    ' .' . $elem . '+ span{ color : #f98d9c ; }'
                    .'</style>' ;
                }
                $i++;
            }} ?>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php?nom=main"><img src="img/logo.png"></img></a></li>
                <li><a href="mutualise.php?nom=mutualise"><i class="fas fa-users mutualise"></i><span>Serveur Mutualisé</span></a></li>
                <li><a href="didie.php?nom=didie"><i class="fas fa-user didie"></i><span>Serveur Dédié</span></a></li>
                <li><a href="cloud.php?nom=cloud"><i class="fas fa-cloud cloud"></i><span>Solution "Cloud"</span></a></li>
                <li><a href="contact.php?nom=contact"><i class="fas fa-envelope contact"></i><span>Contact</span></a></li>
            </ul>
        </nav>
            
        </style>
        <?php if(!isset($_GET['nom']) || $_GET['nom'] == 'main' ){
                echo'
                <section>
                    <h1>L\'hébergement à prix libre</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam noutamus parum claram, anteposuerit litterarum formas
                    humanitatis per seacula quarta decima et quinta decima. Eodem
                    modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                    in futurum.</p>
                </section>
                ';} ?>
        <form>
            <input type="text" placeholder="QUE RECHERCHEZ VOUS ?" name=""/>
            <input type="submit" value="Submit"/>
        </form>
    </header>
    
    