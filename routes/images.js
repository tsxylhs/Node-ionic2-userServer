var express =require('express');
var path = require('path');
var router =express.Router();
var formidable=require('formidable');
var fs=require('fs');

exports.doubleimages=function(req,res,next){
	//console.log(req.body);
	var form=new formidable.IncomingForm();
	form.uploadDir='/tmp';
	form.keepExtensions=true;

var targetDir=path.join(__dirname,'../public/images');
fs.access(targetDir,function(err){

	if(err){
		fs.mkdirSync(targetDir);
	}
	_fileParse();
});
function _fileParse(){
	form.parse(req,function(err,fields,files){
		
          if(err) throw err;
          	var fileUrl=[];
          	var errCount=0;
          	var keys=Object.keys(files);
			  var i=-1;
          	keys.forEach(function(key){
				    i=i+1;
             var filePath=files[key].path;
             var fileExt=filePath.substring(filePath.lastIndexOf('.'));
             if(('.jpg.jpeg.png.gif').indexOf(fileExt.toLowerCase())==-1){
             	errCount+=1;
             }
             else{
             	var fileName=fields.name+i+fileExt;
             	var targetFile=path.join(targetDir,fileName);
             	//
                   fs.renameSync(filePath,targetFile);
                   fileUrl.push('/static/images/'+fileName);
                        
             }
                    
          	})
			  		 console.log(fields);
						 console.log(fileUrl[0]+fileUrl[1]);
              res.render('show',{fileUrl:fileUrl,success:keys.length-errCount, error:errCount,user:fields})
	})
}


}


