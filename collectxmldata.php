<?php
  require_once('xml/functions.php');
  $doc = new DomDocument();
  $filename = 'xml/users/'.$scholar.'.xml';

  if(file_exists($filename)){
	  $doc->load($filename);
	  $user_name = getData('name',$doc,0,null);
	  $user_branch = getData('branch',$doc,0,null);
	  $user_scholar = getData('scholar',$doc,1,'id');

    echo $user_name;
  }else{
    echo "file not found";
  }
?>
