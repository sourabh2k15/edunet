<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
 <?php
   $key = 'w1a3vN9YAX8';
   
   $output = file_get_contents('http://www.youtube.com/get_video_info?&video_id='.$key);
   parse_str($output);
   echo $output;

   if(isset($url_encoded_fmt_stream_map)) {
 $my_formats_array = explode(',',$url_encoded_fmt_stream_map);
} 
 // Set Array & Vars
 $avail_formats[] = '';
 $i = 0;
 // Break up array to create download links to quality
 foreach($my_formats_array as $format) {
 parse_str($format);
echo "<a download='". $title .".mp4' href='".$avail_formats[$i]['url'] = urldecode($url) . '&signature=' . $sig."'>". $title .".mp4</a> Quality - ".$quality."<br>"; $i++; } 
 ?>
</body>
</html>