 var user =require('../models/users');
exports.adduser=function(conditions,dbHelper,callback){
	var userModel=user.getModel();
	dbHelper.addData(userModel,conditions,function(result){
           callback(result);

	})
}
exports.finduser=function(conditions,dbHelper,callback){
	var options={};
	var  fields={};
	var userModel=user.getModel();
	dbHelper.findData(userModel,conditions,fields,options,function(result){
		callback(result);
	})
}
exports.removeuser=function(conditions,dbHelper,callback){
	var  userModel=user.getModel();

	 dbHelper.removeData(userModel,conditions,function(result){

	 	callback(result);
	 })
}
exports.updatauser=function(conditions,updata,dbHelper,callback){
	var userModel=user.getModel();
	dbHelper.updateData(userModel,conditions,updata,function(result){
       
		callback(result);
	})
}