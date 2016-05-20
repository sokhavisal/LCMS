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
<h1>Main</h1>
<h3>Well come to my LCMS : Admin <?php echo $_SESSION['admin']; ?></h3> 

