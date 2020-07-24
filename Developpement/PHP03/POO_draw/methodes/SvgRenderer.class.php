<?php
/* 
 * Manage renderer Shapes
 * 
 * Propriétées : 
 *      $results (tab d'objets géométriques de class Shape ou enfant)
 *      $shapes (tab de string des balises SVG)
 * Functions : 
 *      __construct()-> init to []
 *      addShape(Shape $shape)
 *          Ajout d'un objet géométrique
 *      drawCircle(Point $center, $color, $opacity, $radius)
 *          ajout d'une balise SVG
 *      drawEllipse(Point $center, $color, $opacity, $xRadius, $yRadius)
 *          ajout d'une balise SVG
 *      drawRectangle(Point $origin, $color, $opacity, $width, $height)
 *          ajout d'une balise SVG
 *      drawTriangle(array $points, $color, $opacity)
 *          ajout d'une balise SVG
 *      getResult()
 *          Ajout d'un conteneur SVG et concaténation de toutes les chaines de balises SVG
 *      run()
 *          Boucle le tableau d'objets géométirque
*/

class SvgRenderer{

    public $result;
    public $shapes;

    public function __construct(){
        $this->result = [];
        $this->shapes = [];
    }
    public function addShape(Shape $shape){
        //*          Ajout d'un objet géométrique
        array_push($this->shapes, $shape);
    }
    public function drawCircle(Circle $circle){
        //*          ajout d'une balise SVG
        /**
         * Point $center, $color, $opacity, $radius
         */
        
        

    }
    public function drawEllipse(Point $center, $color, $opacity, $xRadius, $yRadius){
        //*          ajout d'une balise SVG

    }
    public function drawRectangle(Point $origin, $color, $opacity, $width, $height){
        //*          ajout d'une balise SVG
        $x = $origin->getX();
        $y = $origin->getY();
        $rectTag = "<rect x='$x' y='$y' width='$width' height='$height' opacity='$opacity' fill='$color'/>";
        array_push($this->result, $rectTag);
    }
    public function drawTriangle(array $points, $color, $opacity){
        //*          ajout d'une balise SVG

    }
    public function getResult(){
        //*          Ajout d'un conteneur SVG et concaténation de toutes les chaines de balises SVG
        //<svg width="200" height="250"></svg>
        $svgTag = "<svg width='200' height='250'>";
        $svgTag .= implode(' ', $this->result);
        $svgTag .= "</svg>";
        return $svgTag;
    }
    public function run(){
        //*          Boucle le tableau d'objets géométirque
        foreach($this->shapes as $shape){
            $shape->draw($this);
        }
    }
}