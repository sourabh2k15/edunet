<?php

  $android = strpos($_SERVER['HTTP_USER_AGENT'], 'Android');
  $chrome =  strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome');
  $mozilla = strpos($_SERVER['HTTP_USER_AGENT'],'Firefox');
  $ie = strpos($_SERVER['HTTP_USER_AGENT'],'MSIE');

  if($android){       $browser = 'android';
  }else if($chrome){  $browser = 'chrome';
  }else if($mozilla){ $browser = 'mozilla';
  }else{              $browser = 'ie';
  }

  setcookie('browser',$browser,time()+3600*10);
?>
