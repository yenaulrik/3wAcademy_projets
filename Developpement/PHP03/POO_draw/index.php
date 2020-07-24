<?php 
/* 
 * Programme Starter
 * Lister les clesses dans l'ordre des dépendences
 * 
 *  Création d'une instance de notre programme
 *  Création d'une instance du moteur SVG.
 *  Démarrage du program
 *  Inclusion du template.
*/

require_once 'methodes/Point.class.php';
require_once 'methodes/Shape.class.php';
require_once 'methodes/Rectangle.class.php';

require_once 'methodes/SvgRenderer.class.php';
require_once 'methodes/Program.class.php';

//Rectangle ($color, $location, $opacity, $width, $height)

$render = new SvgRenderer();
$prog = new Programme();
$prog->run($render);


include('index.phtml');

