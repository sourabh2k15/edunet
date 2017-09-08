<?php

$question = '';
$id = '';

 if($_SERVER['REQUEST_METHOD']=='POST'){
 	if(isset($_POST['question'])) $question = $_POST['question'];
 	
    
    //echo $question." ".count($answers);
    $reference = 'questions/reference.xml';
    $filename = 'questions/question';
    if(!file_exists($reference)){
	   $xml = new XMLWriter();
	   $xml->openMemory();
	   $xml->startDocument('1.0','UTF-8');
	    $xml->startElement('reference');
	    $xml->writeAttribute('id',0);
	    $xml->endElement();
	   $xml->endDocument();
	   file_put_contents($reference,$xml->outputMemory());	
	}
		$doc = new DOMDocument();
		$doc->load($reference);
		$id = $doc->getElementsByTagName('reference')->item(0)->getAttribute('id');
		$doc->getElementsByTagName('reference')->item(0)->setAttribute('id',++$id);
		$doc->save($reference);
		
		$filename.=$id.'.xml';
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0','UTF-8');
		$xml->startElement('qa');
		$xml->writeAttribute('id',$id);
		$xml->writeAttribute('status','open');
		 $xml->startElement('question');
		   $xml->text($question);
		 $xml->endElement();
		 $xml->startElement('answers');
		 $xml->endElement();
		 
		$xml->endElement();
		$xml->endDocument();
		
		file_put_contents($filename,$xml->outputMemory());
	}
?>