<?php
  $subjects = '';
  if($_SERVER['REQUEST_METHOD']=='POST'){
  	if(isset($_POST['branch'])) $branch = $_POST['branch'];
  	 $xml = simplexml_load_file($branch.'.xml');
  	 foreach($xml->subject as $subject){
  	    $subjects.=$subject.',';
  	 }  
  }
  echo $subjects;
?>