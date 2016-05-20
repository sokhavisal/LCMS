<html>
    <head></head>
    <body>
	<?php
	session_start();
	$_SESSION = array();
		if(isset($_COOKIE[session_name()])) {
			setcookie(session_name(), '', time()-42000, '/');
		}
	session_destroy();
	header('Location:/login/index.php');	       
?>
	<h1>Logout Form</h1>
	<p> Wellcome <?php //echo $userlogin; ?></p>
	<a href="/login/index.php">back</a>
    </body>
    
</html>

