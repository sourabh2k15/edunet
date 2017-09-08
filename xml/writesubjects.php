<?php
  
  $branches = array('CSE','ECE','Mech','Elec','Msme','Civil');
  $subjectsECE = array(
  	'COMPUTATIONAL TECHNIQUES',
  	'ELECTRONIC DEVICES AND CIRCUITS',
  	'DIGITAL ELECTRONICS AND MICROPROCESSOR',
  	'NETWORK ANALYSIS AND SYNTHESIS',
  	'SIGNAL AND SYSTEMS',
  	'ELECTRONIC INSTRUMENTATION AND MEASUREMENT',
  	'DIGITAL COMMUNICATION',
  	'DIGITAL SIGNAL PROCESSING',
  	'VLSI DESIGN',
  	'TELECOMM SWITCHING SYSTEMS',
  	'CONTROL SYSTEMS AND APPLICATIONS',
  	'COMPUTER NETWORKS'
  	);

  $subjectsCSE = array(
    'DISCRETE STRUCTURE',
    'DATA STRUCTURE',
    'DIGITAL ELECTRONICS',
    'DIGITAL COMMUNICATION',
    'COMPUTER GRAPHICS',
    'PRINCIPLES OF PROGRAMMING LANGUAGES'
     );

  $subjects = $subjectsCSE;
  $xml = new XMLWriter();
  $xml->openmemory();
  $xml->startDocument('1.0','UTF-8');
   $xml->startElement('subjects');
   $iterator = 0;  
     foreach ($subjects as $key => $value) {
        $xml->startElement('subject');
        $xml->writeAttribute('id',$iterator);
        $xml->text($subjects[$key]);
        $xml->endElement();	
        $iterator++;
     }

   $xml->endElement();
  $xml->endDocument();
  file_put_contents('CSE.xml',$xml->outputMemory());
?>