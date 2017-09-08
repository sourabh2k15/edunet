<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title>((: Welcome Manitians :))</title>
	  <link rel="icon" type="image/png" href="images/favicon.ico">
	<?php
	include_once('useragent.php');
	if(!isset($_COOKIE['browser'])) header('Location:'.$_SERVER['PHP_SELF']);
	echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/default.css'>";	
	echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/index.css'>";
	?>
</head>
<body>
<?php
  if(isset($_GET['logout'])){
     session_destroy();
     header('Location:index.php');
  }
  else if(isset($_SESSION['user']['scholar']))  header('Location:user.php');
  else {
?>
  <div class='papercontainer'>
    <div id='papertoolbar' class='papertool'>
    <!-- this is the search icon circle which on click expands to input-->
    <input id='scholar' value='' type='text' placeholder='Enter your Scholar No...'>
    
    <div id='login' class='square' onclick='getuser();'><a href="#">Log In</a></div>
    </div>

    <!-- this is the wall where user will get notified of all the activities on the platform (new videos,questions,etc)-->
    <div id='wall' class='wall'>
      <div class='wallposts'>Welcome user !! this is Edunet&nbsp<sup>(alpha)</sup><br>Dive in by logging in with a scholar of 2nd/3rd Yr ECE<br> 131114***/121114*** e.g 131114141</div>
    </div>
  
  </div>

<script type="text/javascript" src='js/jquery.js'></script>
<script type="text/javascript" src='js/index.js'></script>
<?php
  }
?>

</body>
</html>