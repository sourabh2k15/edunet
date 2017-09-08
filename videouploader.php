<?php
$video_keys = '';
$image_file = '';
$video_file = '';
$video_category = '';
$video_branch = '';
$video_name = '';
$user = '';
$scholar = '';
  if($_SERVER['REQUEST_METHOD']=='POST'){
        
        if(isset($_POST['video_name']))     $video_name   = $_POST['video_name'];
        if(isset($_POST['video_branch']))   $video_branch = $_POST['video_branch'];
        if(isset($_POST['video_category'])) $video_category = $_POST['video_category'];
        if(isset($_POST['video_keys']))     $video_keys = $_POST['video_keys'];
        if(isset($_POST['user']))           $user = $_POST['user'];
        if(isset($_POST['scholar']))        $scholar = $_POST['scholar'];
        if(isset($_FILES['video_file']))    $video_file = $_FILES['video_file'];
        if(isset($_FILES['image_file']))    $image_file = $_FILES['image_file'];               
             $error = 0;
             $uploaddir = 'videos/'.$video_branch.'/';
        if(!file_exists($uploaddir)) mkdir($uploaddir);
             $uploaddir.=$video_category.'/';
        if(!file_exists($uploaddir)) mkdir($uploaddir);
              
        $video_mimes = array('video/x-flv','video/mp4','video/3gpp','video/quicktime','video/x-ms-wmv','video/x-msvideo');
        $video_exts = array(
        	'video/x-flv'=>'.flv',
        	'video/mp4'=>'.mp4',
        	'video/3gpp'=>'.3gp',
        	'video/quicktime'=>'.mov',
        	'video/x-msvideo'=>'.avi',
        	'video/x-ms-wmv'=>'.wmv'
        	);
        	
        $image_mimes = array('image/png','image/jpg','image/jpeg','image/bmp','image/gif');
        $image_exts = array(
        	'image/png'=>'.png',
        	'image/jpg'=>'.jpg',
        	'image/jpeg'=>'.png',
        	'image/bmp'=>'.bmp',
        	'image/gif'=>'.gif'
        	);	

        if($video_file['error']==0){ 
           if(in_array($video_file['type'], $video_mimes)){
             $uploadfile = $uploaddir.$video_name.$video_exts[$video_file['type']];
              $keys = '';
              $keystr = '';             
             if(move_uploaded_file($video_file['tmp_name'], $uploadfile)){
             	 $imgpath = $uploaddir.'/images/';
                  if(!file_exists($imgpath)) mkdir($imgpath);
                 $imgpath.=$video_name.$image_exts[$image_file['type']];
                 if(move_uploaded_file($image_file['tmp_name'],$imgpath)){}
				        $keys = explode(' ',$video_name);
				        for($f=0;$f<count($keys);$f++){
						   $keystr.=$keys[$f].',';  	
						}
				        $video_id = generaterand();
		             	$filename = 'xml/videos/'.$video_name.'.xml';
		                $xml = new XMLWriter();
		                $xml->openmemory();
		                $xml->startDocument('1.0','UTF-8');
		                $xml->startElement('video');
		                 $xml->writeAttribute('id',$video_id);
		                 $xml->writeAttribute('size',$video_file['size']);
		                 $xml->writeAttribute('mime',$video_file['type']);
		                 $xml->writeAttribute('user',$user);
		                 $xml->writeAttribute('scholar',$scholar);
		                 
		                 $xml->startElement('branch');
		                  $xml->text($video_branch);
		                 $xml->endElement();
		                
		                $xml->startElement('subject');
		                  $xml->text($video_category);
		                 $xml->endElement();

		                 $xml->startElement('location');
		                  $xml->text($uploadfile);
		                 $xml->endElement();
		                 
		                 $xml->startElement('thumbnail');
		                 $xml->writeAttribute('mime',$image_file['type']);
		                  $xml->text($imgpath);
		                 $xml->endElement();
		                 
		                 $xml->startElement('keywords');
		                  $xml->text($keystr.$video_keys);
		                 $xml->endElement();

		                $xml->endElement();
		                $xml->endDocument();
		                file_put_contents($filename, $xml->outputMemory());
		                echo $filename;
             } 	
           }
           else{
           	 $error = 2;
           }  
        }
        else{
        	$error = 1;
        }

        if($error!=0) echo $error;
  }

  function generaterand(){
     $video_id =  rand();
     if(file_exists($video_id.'.xml')) generaterand();
     else return $video_id;
  }

?>