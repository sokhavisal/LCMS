<?php
    session_start();
    if(!isset($_SESSION['user_id'])){
	header('Location:/login/index.php');
    }
    if(isset($_SESSION['last_activity'])){
	if( time() - $_SESSION['last_activity'] > $_SESSION["time_out"]){
	    header('Location:/login/logout.php');
	}
    }
    $_SESSION['last_activity'] = time(); 
    $_SESSION["time_out"] = 10*60*60;
?>
<html>
    <head>
	<!--Exinternal link  -->
	<link rel="stylesheet" type="text/css" href="http://w2ui.com/src/w2ui-1.4.2.min.css" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script>
	<!--Internal link  -->
	<script type="text/javascript" src="js/w2ui_js.js"></script>
	<script type="text/javascript" src="js/w2ui-1.4.3.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/w2ui-1.4.3.min.css" />
	
    </head>
    <body>
	<h1>Main</h1>
	<h3>Well come to my LCMS : Admin <?php echo $_SESSION['admin']; ?></h3> 
	<div id="layout" style="width: 100%; height: 500px;"></div>
    </body>
</html>
   


