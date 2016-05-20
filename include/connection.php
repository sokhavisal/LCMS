<?php 
   
    $dbh = new PDO('mysql:host=localhost;dbname=LCMS', 'root', '123456');
    $ex = $dbh->prepare('SELECT * from tb_user');
    $ex->execute();
    $result=$ex->fetch(PDO::FETCH_ASSOC);    
    print_r($result);

?>