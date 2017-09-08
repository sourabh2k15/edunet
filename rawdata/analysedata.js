var fs = require('fs');
var builder = require('xmlbuilder');

for(var schno = 131112001;schno<=131112105;schno++){
  fs.readFile('result'+schno.toString()+'.html',function(error,data){
     var content = data.toString();
     var pos = content.indexOf('Name');
     var name = '';
     var scholar = '';
     var pointer = '';
     var branch = '';
     //var structure = "<?xml version='1.0' encoding='UTF-8'?>";
     for(var k = pos+105;k<pos+140;k++){
      if(content[k]!=='<'&&content[k]!=='>'&&content[k]!=='/'&&content[k]==content[k].toUpperCase())name+=content[k];
     }
     pos = content.indexOf('Scholar');
     for(var k = pos+115;k<pos+125;k++){
        if(!isNaN(content[k])) scholar+=content[k];
     }
     pos = content.indexOf('SGPA');
     for(var k= pos+15;k <pos+19;k++){
       if(content[k]!=='<'&&content[k]!=='>'&&content[k]!=='/') pointer +=content[k];
      }
     pos = content.indexOf('Branch'); 
     for(var k= pos+110;k <pos+153;k++){
       if(content[k]!=='<'&&content[k]!=='>'&&content[k]!=='/'){
        if(content[k]!=='&') branch+=content[k];
        else branch+='AND';
       }
      }
     console.log(scholar+" -- "+name+" "+pointer+" "+branch);
     var xml = builder.create('scholar');
     xml.att('id',scholar);
     xml.ele('name',name);
     xml.ele('pointer',pointer);
     xml.ele('branch',branch);
     if(scholar.length>5){
      fs.writeFile('xml/'+scholar+'.xml',xml,function(error){
         console.log(error);
     });
     }
     structure = '';
  });
}