<?php 


/* 
 * Manage Shapes
 * Propriétés color, location(point), opacity
 * qui devriendra dans le construct une instance Point()
 * 
 * Functions :
 *      __construct()->init to 0
 *      getter / setter 
 * Methode ABSTRAITE
 *      enfants => Rectangle / 
*/

abstract class Shape {

    protected $color;
    protected $location;
    protected $opacity;

    public function __construct(){
        $this->color = "black";
        $this->location = new Point();
        $this->opacity = 0.8;
    }

    abstract function draw(svgRenderer $render);
    
//SETTERS
    public function setColor($color){
        $this->color = $color;
    }
    public function setOpacity($opacity){
        $this->opacity = $opacity;
    }
    public function setLocation($x, $y){
        $this->location->setPoint($x, $y);
    }
//GETTERS
    public function getColor(){
        return $this->color;
    }
    public function getOpacity(){
        return $this->opacity;
    }
    public function getLocation(){
        return $this->location;
    }

//FUNCTIONS
    abstract public function disHello();

}