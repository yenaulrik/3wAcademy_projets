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
class Rectangle extends Shape{
    protected $width;
    protected $height;

    public function __construct()
    {
        parent::__construct();
        $this->width = 0;
        $this->height = 0;
    }
    public function draw(svgRenderer $render){
        $render->drawRectangle($this->location, $this->color, $this->opacity, $this->whidth, $this->height);
    }
//SETTERS
    public function setSizes($width, $height){
        $this->whidth = $width;
        $this->height = $height;
    }
    
//GETTERS
    public function getWidth(){
        return $this->width;
    }
    public function getHeight(){
        return $this->height;
    }
//FUNCTIONS
    
    public function disHello(){
        var_dump("Coucou je suis un Rectangle de largeur $this->width et de hauteur $this->height, couleur $this->color");
    }
}