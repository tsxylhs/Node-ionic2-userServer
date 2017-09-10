var dbHelper=require('../DBHelper/dbhleper');
var userDao=require('../dbDao/userDao');
var fs=require('fs');
exports.adduser= function(req, res) {  
  
             var user=new Array();
            user.push({  
               // _id   : new global.mongoose.Types.ObjectId(),  
                userName  : req.body.username, 
                userpassword :req.body.password,
                userage : req.body.userage
}); 
     
  
        userDao.adduser(user,dbHelper,function(result){  
            res.json(result);  
        });  
    


};
exports.finduser=function(req,res){
      var  find={
         userName:req.body.userName
         }
         console.log(find);
        userDao.finduser(find,dbHelper,function(result){

        	res.json(result);
        })
};
exports.removeuser=function(req,res){
	var remove={
		userName:req.body.userName
	}
	userDao.removeuser(remove,dbHelper,function(result){
		res.json(result);
	})
}
exports.updatauser=function(req,res){
	var find={
		userName:req.body.userName
	}
	var updata={
           $set:{ userage:req.body.userage
           }
 
	}

		res.json(result);
	//conditions,updata,dbHelper,callback){
	userDao.updatauser(find,updata,dbHelper,callback)
	
}



//  var form = new formidable.IncomingForm();
//     var uploadDir = path.normalize(__dirname+'/'+"../avatar");
//     form.uploadDir = uploadDir;
//     console.log(uploadDir);
//     form.parse(req, function(err, fields, files) {
//         console.log(fields);
//         console.log(files);
        // for(item in files){
        //     (function(){
        //         var oldname = files[item].path;
        //         var newname = files[item].name === 'blob' ? oldname+'.xml' : oldname+"."+files[item].name.split('.')[1];
        //         fs.rename(oldname,newname,function(err){
        //             if(err) console.log(err);
        //             console.log('修改成功');
        //         })
        //     })(item);
        // }
        // console.log(util.inspect({fields: fields, files: files}));
        // res.send('2');
    
