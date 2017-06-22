var dbHelper=require('../DBHelper/dbhleper');
var userDao=require('../dbDao/userDao');

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
	//conditions,updata,dbHelper,callback){
	userDao.updatauser(find,updata,dbHelper,function(result){
		res.json(result);
	})
}
