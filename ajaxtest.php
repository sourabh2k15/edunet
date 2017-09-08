<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
  <script type="text/javascript" src='js/jquery.js'></script>
  <script type="text/javascript">
  var database = [];
   
   $.ajax({
   	url:"ajaxreciever.php",
   	method:"post",
   	data:{},
   	success: function(data){
      database = JSON.parse(data);
      console.log(JSON.stringify(database));
   	},
   	error: function(){
       
   	}
   });

  </script>
</body>
</html>