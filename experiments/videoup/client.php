<!DOCTYPE html>
<html>
<head>
	<title>File uploader</title>
</head>
<body>
   <form enctype="multipart/form-data">
     <input type="file" name="userfile" id="userfile"/>
     <span id="submit" style="cursor: pointer"   onclick="convert()">Convert</span>
   	
   </form>
   <p id="blob"></p>
   <script type="text/javascript" src="client.js"></script>
</body>
</html>