<!DOCTYPE html>
<html>
<head>
 <?php session_start();
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/default.css'>"; 
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/profile.css'>";
 ?>
	<title></title>
</head>
<body>

</body>
</html>
<?php
if(isset($_GET['scholar'])) {
    $scholar =  $_GET['scholar'];
    require_once('collectxmldata.php');
	?>
	<div class='papercontainer'>
      <div id='papertoolbar' class='papertool'>
        <div id='userbar' class='userbar'>
          <span id='username'><a href="profile.php?scholar=<?php echo $scholar?>" class='usertitle'><?php echo $user_name?></a></span>
        </div>
        <div id='infobar' class='userbar'>
          <img src="<?php echo 'images/users/'.$scholar.'.jpg' ?>" id='userdp' class='propic'>
          <span id='branch' class='infospans'><?php echo $user_branch?></span>
        </div>
      </div>
  </div>
<?php
} 
?>