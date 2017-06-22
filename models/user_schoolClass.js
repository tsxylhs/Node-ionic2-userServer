var mongoDB=require('../DBHelper/mongoDB');

/*定义数据结构*/
var user_schoolClassSchema=new Schema{
 userId:{type: Schema.Types.ObjectId, ref: 'user' },//定义类型为objectid ,ref是关联的模型名称  
    schoolClassId:{type: Schema.Types.ObjectId, ref: 'schoolClass' }
  /*  <span style="font-family: Arial, Helvetica, sans-serif;">//定义类型为objectid ,ref是关联的模型名称</span> */ 

}

//数据库定义表
var _getModel=function(type,err){
var user_schoolClass=mongoDB.mongoose.model('user_schoolClass',user_schoolClassSchema);
return user_schoolClassSchema;
}
/*生成方法调用*/
module.exports={
 getModel : function(){
 	return _getModel();
 }


}