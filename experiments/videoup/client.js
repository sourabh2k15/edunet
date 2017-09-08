function _(el){
	return document.getElementById(el);
}

function convert(){
	var file = _("userfile").files[0];
	
	var dataView = new Uint8Array(file);
    var dataBlob = new Blob([dataView]);//new blob
    var url = window.URL.createObjectURL(dataBlob);//create a url for the blob
      
	_('blob').innerHTML = file.size+" "+dataBlob.read(0);
}