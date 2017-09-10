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
exports.imagestest=function(req,res,next){
	console.log("hahah");
 var imgData = req.body.url;
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	console.log(base64Data);
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("image.png", dataBuffer, function(err) {
        if(err){
            res.send(err);
        }else{
            res.send("保存成功！");
        }
    });
}



exports.avatar=function(req,res,next){
var imgData = req.body.imageData;
console.log(req.body.userID);
   // console.log(imgData);
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("../public/images/image.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
        }
    })
}
exports.shuangfang=function(req,res,next){
    var flag=true;
    var userID=req.body.userID;
    console.log(userID);
    var driveme1=req.body.driveme;
    console.log(driveme1);
    var drivame21=req.body.driveme2;
        console.log(driveme1);
    var driveyou1=req.body.driveyou;
        console.log(driveyou1);
    var driveyou21=req.body.driveyou2;
        console.log(driveyou21);
    var qian1=req.body.qian;
        console.log( qian1);
    var hou1=req.body.hou;
        console.log(hou1);
    var quanjing11=req.body.quanjing1;
        console.log(quanjing11);
    var quanjing21=req.body.quanjing2;
        console.log(quanjing21);
    var pengzhuang1=req.body.pengzhuang;
        console.log(pengzhuang1);
    var qita1=req.body.qita;
     console.log(qita1);
     var driveme = driveme1.replace(/^data:image\/\w+;base64,/, "");
      var drivame2 = drivame21.replace(/^data:image\/\w+;base64,/, "");
       var driveyou = driveyou1.replace(/^data:image\/\w+;base64,/, "");
        var driveyou2 = drivame21.replace(/^data:image\/\w+;base64,/, "");
         var qian = qian1.replace(/^data:image\/\w+;base64,/, "");
          var hou= hou1.replace(/^data:image\/\w+;base64,/, "");
           var quanjing1 = quanjing11.replace(/^data:image\/\w+;base64,/, "");
            var quanjing2 = quanjing21.replace(/^data:image\/\w+;base64,/, "");
             var pengzhuang = pengzhuang1.replace(/^data:image\/\w+;base64,/, "");
              var qita = qita1.replace(/^data:image\/\w+;base64,/, "");

    var driveme = new Buffer(driveme, 'base64');
      fs.writeFile("../public/images/driveme.png", driveme, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
         
        }
    })
    var drivame2 = new Buffer(drivame2, 'base64');
        fs.writeFile("../public/images/drivame2.png", drivame2, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var driveyou = new Buffer(driveyou, 'base64');
        fs.writeFile("../public/images/driveyou .png", driveyou , function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var driveyou2 = new Buffer(driveyou2, 'base64');
        fs.writeFile("../public/images/driveyou2.png", driveyou2, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var qian = new Buffer(qian, 'base64');
        fs.writeFile("../public/images/qian.png", qian, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var hou = new Buffer(hou, 'base64');
        fs.writeFile("../public/images/hou.png",hou, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var quanjing1 = new Buffer(quanjing1, 'base64');
        fs.writeFile("../public/images/quanjing1.png", quanjing1 ,function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var quanjing2 = new Buffer(quanjing2, 'base64');
        fs.writeFile("../public/images/quanjing2.png", quanjing2, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var pengzhuang = new Buffer(pengzhuang, 'base64');
        fs.writeFile("../public/images/pengzhuang.png", pengzhuang, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    var qita = new Buffer(qita, 'base64');
        fs.writeFile("../public/images/qita.png", qita, function(err) {
        if(err){
        console.log("失败")
          flage=false;
        }else{
         console.log("成功")
        }
    })
    if(flag===true){
  res.json({success:1,flag:"修改成功!"});
   
    }
    else{
        res.json({success:0 ,message:"么有成功"});
    }
}