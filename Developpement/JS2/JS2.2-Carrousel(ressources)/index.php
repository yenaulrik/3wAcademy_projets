<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Le Carousel</title>
    <link rel="stylesheet" href="css/normalize.min.css">
    <link rel="stylesheet" href="css/slider.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
</head>
<body>
    <h1>Sliders</h1>
    <p><a href="#" id="toolbar-toggle">Barre d'outils</a></p>
    <div class="toolbar display_none">
        <ul>  
            <li id="slider-previous"><i class="fas fa-backward"></i></li>
            <li id="slider-toggle"><i class="fas fa-pause"></i></li>
            <li id="slider-next"><i class="fas fa-forward"></i></li>
            <li id="slider-random"><i class="fas fa-random"></i></li>
        </ul>
    </div>
    <div id="slider" class="display_none">
        <img src="images/1.jpg" alt="" title="bonjour">
        <img src="images/2.jpg" alt="">
        <img src="images/3.jpg" alt="">
        <img src="images/4.jpg" alt="">
        <img src="images/5.jpg" alt="">
        <img src="images/6.jpg" alt="">
    </div>
    <div id="stars"></div>
    <script type="text/javascript" src="js/slider.js"></script>
</body>
</html>
