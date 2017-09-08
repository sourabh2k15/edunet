<?php
  $xml = simplexml_load_file('xml/branches.xml');  //pseudo-path set to work as included file in user.php
  
  foreach ($xml->branch as $branch) {
  	echo "<option>".$branch."</option>";
  }
  
?>