<?php
 
 if($_SERVER['REQUEST_METHOD']=='POST'){
 	require_once('xml/functions.php');
 	$database = array();
 	$names = array();
 	$pointers = array();
 	$scholars = array();
 	$branches = array();
 	$starttime = time();

 	for($schno=121114001;$schno<=121114160;$schno++){  //data of ECE seniors :)
 		$str = explode(',',readData($schno));
         if(count($str)==4){
	 	    $scholars[count($scholars)] = $str[0];	
	 	    $names[count($names)]       = $str[1];
	 	    $branches[count($branches)] = $str[2];
	        $pointers[count($pointers)] = $str[3];         
        }
    }

	for($schno=131112001;$schno<=131112300;$schno++){   //data of CSE batchmates :)
	 		$str = explode(',',readData($schno));
	         if(count($str)==4){
		 	    $scholars[count($scholars)] = $str[0];	
		 	    $names[count($names)]       = $str[1];
		 	    $branches[count($branches)] = $str[2];
		        $pointers[count($pointers)] = $str[3];         
	        }
	    }



 	for($schno=131114001;$schno<=131114160;$schno++){    //data of ECE batchmates :)
 		$str = explode(',',readData($schno));
         if(count($str)==4){
	 	    $scholars[count($scholars)] = $str[0];	
	 	    $names[count($names)]       = $str[1];
	 	    $branches[count($branches)] = $str[2];
	        $pointers[count($pointers)] = $str[3];         
        }
    }


   $database = array(json_encode($scholars),json_encode($names),json_encode($branches),json_encode($pointers));
    echo json_encode($database);
 }

?>