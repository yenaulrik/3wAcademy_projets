
        <?php 
        echo'<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Loterie</title></head><body><main>
        <h1>La loterie</h1>';
        
        $nbr = 6;
        $tab ;
        $min = 1;
        $max = 49;
        $nTest;
        
        
        for($i = 0 ; $i < $nbr ; $i++){
            
            if(empty($tab)){
                $tab[$i] = rand($min , $max);
            }else{
                $nTest = rand($min , $max);
            
            foreach($tab as $elem){
                while($nTest == $elem){
                    $nTest = rand($min , $max);
                }
            }
            $tab[$i] = $nTest;
            }
            
        }   
        
        echo 'loterie du jour : ';
        sort($tab);
        
        foreach($tab as $i){ 
            
            echo ' [ ' . $i . ' ]' ;
            
            if($i != $tab[$nbr -1]){
                echo ' -> ' ;
            }
        }
        
        
        echo'</main></body></html>';