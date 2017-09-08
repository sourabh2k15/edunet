<?php
  $xml = simplexml_load_file('branches.xml');  
  $branches = '';
  foreach ($xml->branch as $branch) {
  	$branches.= $branch.',';
  }
  echo $branches;
?>