$(document).ready(function(){
   var str = "blob:https%3A//www.youtube.com/0b6d3dfc-186d-4988-b59a-ee2cacb1b6cf";
    var i = new FileReader();
	 i.addEventListener("loadend",function(){

	 });

	 i.readAsArrayBuffer(str);	
});


