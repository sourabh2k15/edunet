<?php
	
	function getData($nodeName,$doc,$key,$attr){
	  	 $nodes = $doc->getElementsByTagName($nodeName);
	  	  if($key == 0) return $nodes->item(0)->nodeValue;
	  	  else return $nodes->item(0)->getAttribute($attr);
	  }

	function readData($schno){
	    $doc = new DomDocument();
	 	$filename = 'xml/users/'.$schno.'.xml';
	 	if(file_exists($filename)){
	 		$doc->load($filename);
		 	$name = getData('name',$doc,0,null);
		 	$branch = getData('branch',$doc,0,null);
		 	$pointer = getData('pointer',$doc,0,null);
		 	$doc->save($filename);
		 	return $schno.",".$name.",".$branch.",".$pointer; 	
		 }	
	}
	
 ?> 
