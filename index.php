<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <title></title>
    </head>
    <body>
	<?php
	    session_start();
	   // $key  = DB_PASS;	    
	    if(!isset($_SESSION['user_id'])){
		
		if(isset($_REQUEST['web_login'])=='login'){
		    if ($_REQUEST['user_id'] && $_REQUEST['user_pass']){
			$user= $_REQUEST['user_id'];
			$pass= $_REQUEST['user_pass'];
			
		    }
		    if (mb_strlen($user) >0 && mb_strlen($pass)>0){
			$_SESSION['user_id']=$_REQUEST['user_id'];
			$_SESSION['user_pass']=$_REQUEST['user_pass'];
			$_SESSION['admin']= 1;
		    }
		    setcookie('user',$user,  time()+604800);
		    setcookie('password',$pass, time()+604800);
		    
		   header('Location:/login/main.php');
		} 
	    }  else {
		 header('Location:/login/main.php');
	    }  
	     
	?>
	<center>
	    <div class="wrapper-log">
		<form action="<?=$_SERVER['PHP_SELF']?>" method="post" >
		    <div class="panel panel-headering">
			<p>Log In Form</p>
		    </div>
		    <div class="panel panel-body">
			<input type="hidden" name="web_login" value="login">
			<label> User </label>
			<input type="text" name="user_id" class="login">
			<label> password  </label>
			<input type="password" name="user_pass" class="password">
		    </div>
		    <div class="panel panel-footer">
			<button name="login" type="submit">Log In</button>
			<button name="cancel" type="button">Cancel </button>   
		    </div>
		    
		</form>
	    </div>
	</center>
    </body>
</html>
