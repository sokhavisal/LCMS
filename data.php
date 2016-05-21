<?php
// Total is important for grid know about data have , and row grid is not error. 
$dataobj['total']=5;
$dataobj['records'][]=(array('recid'=>1,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
$dataobj['records'][]=(array('recid'=>2,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
$dataobj['records'][]=(array('recid'=>3,'flname'=>'sokha','lname'=>'visal','email' =>'test','sdate'=>'test'));
$dataobj['records'][]=(array('summary'=>true,'lname'=>'<span style="float: right;">Total</span>','fname'=>'500','email'=>'<span style="float: right;">Mean Date</span>','sdate'=>'1/1/2012'));
$dataobj['records'][]=(array('summary'=>true,'lname'=>'<span style="float: right;">Total</span>','fname'=>'500','email'=>'<span style="float: right;">Mean Date</span>','sdate'=>'1/1/2012'));
echo json_encode($dataobj);