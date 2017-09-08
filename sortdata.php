<?php
 $pointers = array();
 $names = array();
 $scholars = array();
 $sortedarr = array();
 $pointercopy = array(); 
  for($scholar=131114001;$scholar<=131114141;$scholar++){ 
  require_once('xml/functions.php');
   if(file_exists('./xml/users/'.$scholar.'.xml')){
	  $doc = new DomDocument();
	  $doc->load('./xml/users/'.$scholar.'.xml');
	  $names[count($names)] = getData('name',$doc,0,null);
	  $pointers[count($pointers)] = getData('pointer',$doc,0,null);
	  $scholars[count($scholars)] = getData('scholar',$doc,1,'id');
   }
  }
  $iterations = count($pointers);
  $pointercopy = $pointers;
  for($i = 0;$i < $iterations;$i++){
  	$max = max($pointers);
    $key = array_search($max,$pointers);
    $sortedarr[count($sortedarr)] = $key;
    unset($pointers[$key]);
  }
  for($i=0;$i<count($sortedarr);$i++){
  	echo ($i+1).")&nbsp".$scholars[$sortedarr[$i]]."&nbsp".$names[$sortedarr[$i]]."&nbsp".$pointercopy[$sortedarr[$i]]."<hr>";
  }
?>