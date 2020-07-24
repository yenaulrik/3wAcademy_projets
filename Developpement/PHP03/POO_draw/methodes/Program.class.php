<?php 
/* 
 * Functions :
 *      run(SvgRenderer $renderer) : Execution du programme
 *          création & ini d'un rect
 *          création & ini d'un elipse
 *          création & ini d'un carré
 *          création & ini d'un cercle
 *          création & ini d'un triangle
 *          Ajout des différents objets géométriques au moteur graphique
 *          Execution du moteur graphique
*/
class Programme{

    public function run(SvgRenderer $render){
        $rect = new Rectangle();
        $rect->setLocation(0,0);
        $rect->setColor('black');
        $rect->setOpacity('0.5');
        $rect->setSizes(100,300);

        $render->addShape($rect);
        $render->run();
    }

}