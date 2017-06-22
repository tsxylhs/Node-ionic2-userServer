var mongoDB=require('../DBHelper/mongoDB');
var Schema=mongoDB.mongoose.Schema;
/*定义数据结构*/
var userSchema=new Schema({
userName :String,
userpassword :String,
userage : String
});

//数据库定义表
var _getModel=function(type,err){
var UserSchema=mongoDB.mongoose.model('User',userSchema);
return UserSchema;
}
/*生成方法调用*/
module.exports={
 getModel : function(){
 	return _getModel();
 }


}