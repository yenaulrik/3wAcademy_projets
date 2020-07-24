<?php 



$dsn = 'mysql:dbname=live-25_caratyvincent_classic_model;host=localhost';
$user = 'caratyvincent';
$password = '1cb3f08aMDkyN2Y2NDFlNzVmYjdiYmEyZGRiMTY3cc3e403e';
$details;




$pdo = new PDO($dsn, $user, $password);

    $sql1 = "SELECT `orderNumber`,`orderDate`,`shippedDate`,`status`,`customerNumber` FROM `orders` ";
    
    if(empty($_GET['number'])){
        $query = $pdo->query($sql1); // Executer une requête sans paramètre
        //$result1 = $query->fetchAll(); // Get all results ( fetchAll)
        $result1 = $query->fetchAll(); // Get a result (fetch)
        
        include 'index.phtml';
    }
    
    if(!empty($_GET['number'])){
            
            $details = strval($_GET['number']);
            $numClient = strval($_GET['cstNbr']);
    
            $query2 = $pdo->prepare("SELECT orderNumber, productName, MSRP, quantityOrdered
                    FROM products
                    INNER JOIN orderdetails ON orderdetails.productCode = products.productCode
                    WHERE orderNumber = :idPage");
    
    
            $query2->execute([':idPage' => $details]);
    
            $result2 = $query2->fetchAll();

            //----------- ------------ ---------------
             
            $query3 = $pdo->prepare("SELECT customerName, contactLastName, contactFirstName, addressLine1, postalCode, city
                FROM customers
                WHERE customerNumber = :custNbr");


            $query3->execute([':custNbr' => $numClient]); /*  $numClient = strval($_GET['cstNbr']); */

            $result3 = $query3->fetch();
            $query3->closeCursor();
            
           
            
            
            $total_TTC = 0;
            
            foreach($result2 as $ligne){
                $total_TTC += ($ligne['quantityOrdered'] * $ligne['MSRP']) ;
            }
            
            $TVA = $total_TTC * 0.20 ;
            
            $total_HT = $total_TTC / 1.20;
           
            include 'details.phtml';
            
    
            
        }