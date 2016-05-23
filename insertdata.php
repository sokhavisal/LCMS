<?php
require_once 'constant/constant.php';
require_once 'class/cls_connection.php';
$conn= new Database();
$i=0;
while ($i<100){
    $conn->query('insert into user (id,name) values (:id,:name)');
    $conn->bind(':id', 1);
    $conn->bind(':name','test');
    $conn->execute();
    $i++;
    
}