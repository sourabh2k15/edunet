<html>
<head>
 <?php 
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/default.css'>"; 
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/video.css'>";
 ?>
	<title>((: Welcome Manitians :))</title>
</head>
<body>
      <div id="loading"><img src='images/favicon.ico'><span>MACT</span></div>
      
  
  <?php
   if(isset($_GET['branch'])&&isset($_GET['subject'])){
      $path =  'videos/'.$_GET['branch']."/".$_GET['subject'].'/';
      if(file_exists($path)){
      	echo "<hr>";
	      $files = scandir($path);
	      for($i=2;$i<count($files);$i++){
	      	 $ext = explode('.',$files[$i]);
	      	 $xml = simplexml_load_file('xml/videos/'.$ext[0].'.xml');
	      	 echo "<video  id='".$xml['id']."' class='video' controls><source type='".$xml['mime']."' src='".$xml->location."'></video><hr>";
	      }
     }
      else{
      	header('Location:video.php');
      	exit();
      }
   }
   else{
   	session_start();
   	$scholar = $_SESSION['user']['scholar'];
   	require_once("collectxmldata.php");
   	if(strlen($user_name)>10) { // if somebody has a very long name e.g AP guys or a half south indian like me :)
        $namesplit = explode(' ',trim($user_name));    
        $user_name =  $namesplit[0]." ".$namesplit[1];  // just display first 2 bits of his/her name rest is in d profile page :)
   }
  ?>
  <div class='papercontainer'>
  <div id='papertoolbar' class='papertool'>
      <div id='menu'>
      <div id='userbar' class='userbar'>
        <span id='username'><a href="profile.php?scholar=<?php echo $scholar?>" class='usertitle'><?php echo $user_name?></a></span>
      </div>
      <div id='spancon'>
              <img src="<?php echo 'images/users/'.$scholar.'.jpg' ?>" id='userdp' class='propic'>
        <br/>
       <span id='homeportal' class='infospans'><a href="index.php">Home</a></span><br/>   
       <span id='videoportal' class='infospans'><a href="video.php">Video-Tuts</a></span>
       <span id='qaportal' class='infospans'><a href="quora.php">Questions</a></span>
       <span id='logout' class='infospans'><a href="index.php?logout" >Logout</a></span>
       <!-- jugaad LOL :) -->
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      </div>
    </div>
    <!-- this is the menu toggle -->
    
	    <div id="menucircle" class='circle' onclick='showmenu()'>
	    	<div id='stylustip1' class='menutip'></div>
	    	<div id='stylustip2' class='menutip'></div>
	        <div id='stylustip3' class='menutip'></div>
	    </div>
	    
	    	    
    <!-- this is the search icon circle which on click expands to input-->	    
	    <div id='searchbox' class='disappear'>
	      <input type='text' placeholder='video search by keywords' spellcheck ='false' id='omnisearch' onkeyup='getsuggestions(this.id)'>
	      <div id='sugcontain' class='suggestionwrap' onmouseleave='restoresearch()'>
	      </div>
	    </div>
    </div>
    <div class='videocardmaster'>
    <?php
      $branch = array(
       trim('ELECTRONICS AND COMMUNICATION ENGINEERING')=>'ECE',
       trim('COMPUTER SCIENCE AND ENGINEERING')=>'CSE'
       );
      $videodir = 'videos/'.$branch[trim($user_branch)].'/';
      $branches = file_exists($videodir)?scandir($videodir):'';
     
      for($i = 2;$i<count($branches);$i++){
	  	if(file_exists($videodir.$branches[$i])) $videos =  scandir($videodir.$branches[$i]);
	  	for($j = 2;$j<count($videos);$j++){
			if($videos[$j]!='images'){
			   $video_name = explode('.',$videos[$j])[0];
			   $imgfile =  $videodir.$branches[$i].'/images/'.$video_name.'.png';
			  
			   if(!file_exists($imgfile)) $imgfile = 'images/video.jpg';
			   
			   $filename =  'xml/videos/'.$video_name.".xml";
			   $doc = new DOMDocument();
			   $doc->load($filename);
			   $userupload = $doc->getElementsByTagName('video')->item(0)->getAttribute('user');
			   $uscholar = $doc->getElementsByTagName('video')->item(0)->getAttribute('scholar');
			   echo "<div class='videocard' onclick='rendervideo(this.id)' id='videocard".($i-2).($j-2)."'>
			           <div class='title'>".$video_name."</div>
			           <span>Uploaded to &nbsp".$branch[trim($user_branch)].' / '.$branches[$i]."&nbsp &nbsp by &nbsp &nbsp<a href='profile.php?scholar=".$uscholar."'>".
			           $userupload."</a></span><br/>
			           <img src='".$imgfile."'/>
			         </div>";
			   
			} 
		}
	  } 
    ?>
  </div>
  <?php
    }
    ?>
  </div>
  <script type="text/javascript" src='js/jquery.js'></script>
  <script type="text/javascript" src='js/video.js'></script>

</body>
</html>