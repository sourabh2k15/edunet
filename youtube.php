<!DOCTYPE html>
<html>
<head>
   <link rel="icon" type="image/png" href="images/favicon.ico">
	 <?php 
	    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/default.css'>"; 
	    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/video.css'>";
	    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/youtube.css'>";
	 ?>
   <title>((: Welcome Manitians :))</title>
</head>
<body>
  <div id="loading"><img src='images/favicon.ico'><span>MACT</span></div>
  <?php  
    session_start();
   	$scholar = $_SESSION['user']['scholar'];
    require_once('collectxmldata.php');
    if(strlen($user_name)>10) { // if somebody has a very long name e.g AP guys or a half south indian like me :)
        $namesplit = explode(' ',trim($user_name));    
        $user_name =  $namesplit[0]." ".$namesplit[1];  // just display first 2 bits of his/her name rest is in d profile page :)
   }
   ?>
  <div class='papercontainer'>
    <div id='menu'> 
      <div id='userbar' class='userbar'>
        <span id='username'><a href="profile.php?scholar=<?php echo $user_scholar?>" class='usertitle'><?php echo $user_name?></a></span>
      </div>
      <div id='spancon'>
       <img src="<?php echo 'images/users/'.$scholar.'.jpg' ?>" id='userdp' class='propic'><br/>  
       <span id='homeportal' class='infospans'><a href="index.php">Home</a></span><br/> 
       <span id='videoportal' class='infospans'><a href="video.php">Video-Tuts</a></span>
       <span id='qaportal' class='infospans'><a href="qa.php">Questions</a></span>
       <span id='logout' class='infospans'><a href="index.php?logout" >Logout</a></span>
      </div>
    </div>
    <div id='papertoolbar'>

    <!-- this is the menu toggle -->
	    <?php
		  if(isset($_GET['videoname'])){ 
		  
		  $video_name =  $_GET['videoname'];
		  $filename = 'xml/videos/'.$video_name.'.xml';
		  $doc = new DOMDocument();
		  $doc->load($filename);
		  $location = $doc->getElementsByTagName('location')->item(0)->nodeValue;
		  echo   "<div class='mastervideo'>
				  	<div class='videocont'>
				  		<video src='".$location."' onload='hidebuffer()' controls>
				  	</div>
				  </div>";
		?>    
		<?php }?>
    </div>
        <div id="pluscircle" class='circle' onclick='showmenu()'>
	    	<div id='stylustip3' class='menutip'></div>
	    	<div id='stylustip4' class='menutip'></div>
	    </div>
  </div>
  
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/youtube.js"></script>
</body>
</html>
