<html>
<head>
  <link rel="icon" type="image/png" href="images/favicon.ico">
 <?php
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/default.css'>";
    echo "<link rel='stylesheet' type='text/css' href='css/".$_COOKIE['browser']."/user.css'>";
 ?>
	<title>((: Welcome Manitians :))</title>
</head>
<body>
<?php
  session_start();
  if(isset($_GET['Scholar'])){
    $_SESSION['user']['scholar'] = $_GET['Scholar'];

    //session_write_close();
    header('Location:user.php');

    exit();
  }
  else if(isset($_SESSION['user']['scholar'])){
    $scholar = $_SESSION['user']['scholar'];
    //require_once("collectxmldata.php");
    echo "hola ".$scholar;

    if(strlen($user_name)>10) { // if somebody has a very long name e.g AP guys or a half south indian like me :)
      $namesplit = explode(' ',trim($user_name));
      $user_name =  $namesplit[0]." ".$namesplit[1];  // just display first 2 bits of his/her name rest is in d profile page :)
    }
    echo "huff";
?>
      <!-- this is the loading symbol madeup of pure css :) -->
      <div id="loading"><img src='images/favicon.ico'><span>MACT</span></div>
      <div id="status"></div>
      <!-- if somebody wants to add a video to repo this is the form to fill -->
      <div id='videoaddform' class='disappear'>
         <div id='videoformcon' class='innerprompt'>
           <span id='closevideoform' class='button'>Close</span>
           <form enctype='multipart/form-data' method='post' name='videoinfo' id='videoinfo'>
              <input type='text' name='video_name' spellcheck='false' id='video_name' value='' placeholder='Video Title'>
              <select name='video_branch' id='video_branch' placeholder='Video Branch' onchange='getsubjects(this.value)'><option></option><?php include_once'xml/getbranches.php';?></select>
              <select name='video_category' id='video_category' placeholder='Video Subject'></select>
              <input type='text' name='video_path' spellcheck='false' id='video_title' placeholder='Video path ...'>
              <span id='videoupload' class='button' onclick='triggerupload()'>Browse</span>
              <input type='text' name='image_path' spellcheck='false' id='image_title' placeholder='Thumbnail for video '>
              <span id='imageupload' class='button' onclick='triggerupload2()'>Browse</span>
              <input type='file' name='video_file' id='hiddenvideo' style='' value='' onchange='displayval()'>
              <input type='file' name='image_file' id='hiddenimage' style='' value='' onchange='displayval2()'>
              <input type='text' name='video_keys' spellcheck='false' id='video_keys' value='' placeholder='enter key words for video search seperated by commas'>
              <span id='videosubmit' class='button' onclick='uploadvideo()'>Upload Video</span>
           </form>
         </div>
         <div id ='progressbar' >
         	<div id ='progressfill'></div>
         </div>
      </div>
     <div id="qadd" class="qadd">
      <div id="qacont">
      	<form id="qaddform">
      	    <span id='qclose' onclick='closeqadd()'>close</span>
      	    <div>Question :</div>
      		<textarea name="question" rows="4" id="question" spellcheck="false" placeholder="enter your question here followed by a '?'"></textarea>
           <span class="button" id="qasubmit" onclick="registerq()">Submit</span>
      	</form>
      </div>
     </div>

  <div class='papercontainer'>
    <div id='menu'>
      <div id='userbar' class='userbar'>
        <span id='username'><a href="profile.php?scholar=<?php echo $scholar?>" class='usertitle'><?php echo $user_name?></a></span>
      </div>
      <div id='spancon'>
              <img src="<?php echo 'images/users/'.$scholar.'.jpg' ?>" id='userdp' class='propic'>
        <br/>
       <span id='videoportal' class='infospans'><a href="video.php">Video-Tuts</a></span>
       <span id='qaportal' class='infospans'><a href="quora.php">Questions</a></span>
       <span id='logout' class='infospans'><a href="index.php?logout" >Logout</a></span>
      </div>
    </div>
    <div id='papertoolbar' class='papertool'>

    <!-- this is the menu toggle -->

	    <div id="menucircle" class='circle' onclick='showmenu()'>
	    	<div id='stylustip1' class='menutip'></div>
	    	<div id='stylustip2' class='menutip'></div>
	        <div id='stylustip3' class='menutip'></div>
	    </div>

    <!-- this is the search icon circle which on click expands to input-->

	    <div id='search' class='circle searchsym'>
	      <div class='searchicon'></div>
	      <div class='searchiconbot'></div>
	    </div>

	    <div id='searchbox' class='disappear'>
	      <input type='text' placeholder='Search by Scholar or Name' spellcheck ='false' id='omnisearch' onkeyup='getsuggestions(this.id)'>
	      <div id='sugcontain' class='suggestionwrap' onmouseleave='restoresearch()'></div>
	    </div>

    <!-- user can upload video tuts here -->

        <div id='videoadd' class='square'><span onclick='addvideo()'>+Tutorial</span></div>

    <!-- user can ask a new doubt here -->

        <div id='questionadd' class='square'><span onclick='addquestion()'>+Question</span></div>

    </div>

    <!-- this is the wall where user will get notified of all the activities on the platform (new videos,questions,etc)-->
    <div id='wall' class='wall'>
      <div class='wallposts'>This is a wall post</div>
      <div class='wallposts'>This is another wall post</div>
      <div class='wallposts'>Edunet&nbsp<sup>(alpha)</sup>- is a social network to digitalise education<br>
      Only the user profiles are built and the search function is working,so try them out<br>
      (: Also try uploading some video-tuts :) .....(+Tutorial) .</div>
    </div>

  </div>
  <script type="text/javascript" src='js/jquery.js'></script>
  <script type="text/javascript" src='js/user.js'></script>
  <?php
    }
    else{
      header('Location:index.php?logout');
    }
  ?>
</body>
</html>
