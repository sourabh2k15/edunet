<?php
  $videoarray = array();
  $filedir = 'videos/';
  if(file_exists($filedir)) $branches = scandir($filedir);
  for($i = 2;$i<count($branches);$i++){
  	 $subjects =  scandir($filedir.$branches[$i].'/');
  	 for($j = 2 ;$j <count($subjects);$j++){
	 	$videos = scandir($filedir.$branches[$i].'/'.$subjects[$j].'/');
	 	 for($k = 2;$k<count($videos);$k++){
		 	if($videos[$k]!=='images'){
		 		 $videoname = explode('.',$videos[$k])[0];
		 		 $videoarray[count($videoarray)] = $videoname;
		 	}
		 }
	 }
  }
  
  $doc = new DOMDocument();
  $keys = array();
  for($z=0;$z<count($videoarray);$z++){
  	$filename = 'xml/videos/'.$videoarray[$z].'.xml';
  	$doc->load($filename);
  	$tempkeys = explode(',',$doc->getElementsByTagName('keywords')->item(0)->nodeValue);
  	for($h=0;$h<count($tempkeys);$h++){
     	if(!isset($keys[$tempkeys[$h]])){ $keys[$tempkeys[$h]]= $videoarray[$z];}
     	else $keys[$tempkeys[$h]].= ','.$videoarray[$z];
	}
  }
  
  echo json_encode($keys);
?>