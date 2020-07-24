<?php 
/* 
 * Class pour faire un rectangle
 * Propriétés : width / height
 * Functions :
 *      __construct() -> herite de Shape et init propriete to 0
 *      getter / setter
 *      Draw(SVGRenderer $rederer) : redefinition de la methode abstraite
 *          utilisation de renderer pour dessiner la forme
 *              ici->renderer->drawRectangle()
 *      setSize($width,$height) init des dimensions du rectangle
*/
require_once 'methodes/Ellipse.class.php';

class Circle extends Ellipse{
    public $rayon;
    
    public function __construct($color, $location, $opacity, $rayon)
    {
        $this->setRayon($rayon, "") ;
    }
    public function draw(svgRenderer $render){
        $render->drawRectangle($this->location, $this->color, $this->opacity, $this->whidth, $this->height);
    }
//SETTERS
    public function setRayon($rayon, $rayonY){
        $this->rayon = $rayon;
    }
    
//FUNCTIONS
    
    public function disHello(){
        var_dump("Coucou je suis un Cercle de Rayon $this->rayon et de hauteur $this->rayonY, couleur $this->color");
    }
}