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

class Triangle extends Shape{
    public $forme;

    public function __construct($color, $location, $opacity,array $forme)
    {
        parent::__construct($color, $location, $opacity);
        $this->setForme($forme);
       
    }
    public function draw(svgRenderer $render){
        $render->drawRectangle($this->location, $this->color, $this->opacity, $this->whidth, $this->height);
    }
//SETTERS
    public function setForme($forme){
        $this->forme = $forme;
    }
     
//GETTERS
    public function getForme(){
        return $this->forme;
    }
    
//FUNCTIONS
    
    public function disHello(){
        
        var_dump($this->forme);
    }
}