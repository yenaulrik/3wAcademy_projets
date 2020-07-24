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
require_once 'methodes/Shape.class.php';

class Ellipse extends Shape{
    public $rayonX;
    public $rayonY;

    public function __construct($color, $location, $opacity, $rayonX, $rayonY)
    {
        parent::__construct($color, $location, $opacity);
        $this->setRayon($rayonX,$rayonY) ;
    }
    public function draw(svgRenderer $render){
        $render->drawRectangle($this->location, $this->color, $this->opacity, $this->whidth, $this->height);
    }
//SETTERS
    public function setRayon($rayonX, $rayonY){
        $this->rayonX = $rayonX;
        $this->rayonY = $rayonY;
    }
    
//GETTERS
    public function getRayonX(){
        return $this->rayonX;
    }
    public function getRayonY(){
        return $this->rayonY;
    }
//FUNCTIONS
    
    public function disHello(){
        var_dump("Coucou je suis une Ellipse de largeur $this->rayonX et de hauteur $this->rayonY, couleur $this->color");
    }
}