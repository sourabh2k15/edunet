<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
  <script type="text/javascript" src='js/jquery.js'></script>
  <script type="text/javascript">
   $.ajax({
   	url:"ajaxreciever.php",
   	method:"post",
   	data:{},
   	success: function(data){
      alert(data);
   	},
   	error: function(){

   	}
   });
  </script>
</body>
</html>