<?php
  $dirpath = 'videos';
  $video_id = 0;
  if(is_readable($dirpath)){ 
    $handle = opendir($dirpath);
    $c = 0;
    $file = '';
    while($file == readdir($handle)&& $c<3){
    	$c++;
    }
     
    if($c>2){
    	 echo "dir is not empty";
    }  
  }

  echo $video_id;
?>