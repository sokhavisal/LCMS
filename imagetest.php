<?PHP
function ImageKeepOriginalSize($scr,$w=200,$h=200){
    $imagedata = getimagesize($scr); 
    $width=$imagedata[0]; 
    $height=$imagedata[1];
    if ($width>$w){
	$remain= $width/$w;
	$width= $w;
	$height=$height/$remain;
   }
    if($height>$h){     
	$remainh=$height/$h;
	$height=$h;
	$width=$width/$remainh;
    }  
    echo '<div style="border:1px solid; width:200px; height:200px;display: flex;align-items: center; justify-content: center;"><img src="'.$scr.'" style=" width:'.$width.'px; heigth:'.$height.'px "   alt="test image"></div>';
}

ImageKeepOriginalSize('2000x901.png');
?>
