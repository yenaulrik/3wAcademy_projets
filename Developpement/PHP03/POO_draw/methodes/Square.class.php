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
require_once 'methodes/Rectangle.class.php';

class Square extends Rectangle{
    public $width;
    public $height;

    public function __construct($color, $location, $opacity, $width, $height)
    {
        parent::__construct($color, $location, $opacity, $width, $height);
        if($width === $height){
            $this->width = $width;
        $this->height = $height;
        }else{
            throw new Exception("Pour un carré la hauteur et la largeur doivent être de même dimension");
        }
        
    }
//SETTERS
    public function setWidth($width){
        
        if($width === $this->height){
        $this->whidth = $width;
        $this->height = $width;
        }else{
            throw new Exception("Pour un carré la hauteur et la largeur doivent être de même dimension");
        }
    }
    public function draw(svgRenderer $render){
        $render->drawRectangle($this->location, $this->color, $this->opacity, $this->whidth, $this->height);
    }
    public function setHeight($height){

        if($height === $this->width){
            $this->height = $height;
            $this->width = $height;
            }else{
                throw new Exception("Pour un carré la hauteur et la largeur doivent être de même dimension");
            }
    }

//FUNCTIONS
    
    public function disHello(){
        var_dump("Coucou je suis un Carré de $this->width de coté, couleur $this->color");
    }
}