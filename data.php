<?php
require_once 'constant/constant.php';
require_once 'class/cls_connection.php';
$conn= new Database();
$conn->query('select * from user');
$result = $conn ->resultset();
$dataobj['total']= $conn->rowCount();
    for  ($i=0;$i<count($result);$i++) {
	
	$row= $result[$i];
	$dataobj['records'][]=(array(
		    'recid' => $row['id'],
		    'fname' => $row['name'],
	));
    }
    echo json_encode($dataobj);







// Total is important for grid know about data have , and row grid is not error. 
//$dataobj['total']=5;
//$dataobj['records'][]=(array('recid'=>1,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
//$dataobj['records'][]=(array('recid'=>2,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
//$dataobj['records'][]=(array('recid'=>3,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
//$dataobj['records'][]=(array('summary'=>true,'lname'=>'<span style="float: right;">Total</span>','fname'=>'500','email'=>'<span style="float: right;">Mean Date</span>','sdate'=>'1/1/2012'));
//$dataobj['records'][]=(array('summary'=>true,'lname'=>'<span style="float: right;">Total</span>','fname'=>'500','email'=>'<span style="float: right;">Mean Date</span>','sdate'=>'1/1/2012'));
//echo json_encode($dataobj);