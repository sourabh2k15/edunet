<?php
  
  $branches = array('CSE','ECE','Mech','Elec','Msme','Civil');

  $xml = new XMLWriter();
  $xml->openmemory();
  $xml->startDocument('1.0','UTF-8');
   $xml->startElement('branches');
   $iterator = 0;  
     foreach ($branches as $key => $value) {
        $xml->startElement('branch');
        $xml->writeAttribute('id',$iterator);
        $xml->text($branches[$key]);
        $xml->endElement();	
        $iterator++;
     }

   $xml->endElement();
  $xml->endDocument();
  file_put_contents('branches.xml',$xml->outputMemory());
?>