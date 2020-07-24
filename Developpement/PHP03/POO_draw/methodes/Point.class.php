<?php 
/* 
 * Manage positions / moves
 * Propriétées : x , y
 * Functions : 
 *      __construct()->init to 0
 *      getter / setter
*/

class Point{
    private $x;
    private $y;

    public function __construct(){
        $this->x = 0 ;
        $this->y = 0 ;
    }

    public function setAleaPoint($xMin, $xMax, $yMin, $yMax){
        $this->x = rand($xMin,$xMax);
        $this->y = rand($yMin,$yMax);
    }

    public function setPoint($x, $y){
        $this->x = $x;
        $this->y = $y;
    }
    
    public function getX(){
        return $this->x;
    }
    public function getY(){
        return $this->y;
    }
    public function say(){
        var_dump("Je suis un point de x = $this->x et de y = $this->y !");
    }

}