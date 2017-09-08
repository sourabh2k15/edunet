<?php

 $filepath = 'new folder/videos/videos';
 if(file_exists($filepath)) echo "directory exists!!!<br>";
 else { mkdir($filepath);}


?>