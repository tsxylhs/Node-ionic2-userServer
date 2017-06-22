var mongoDB=require('../DBHelper/mongoDB');
//模式
var DirverSchema=new Schema({
 _id :String,
 name:String,
 phone:String,
 password:String,
 carId:String,
 address:String
});
var Dirver=mongoDB.mongoose.model('Dirver',DirverSchema);
var DriverDao=function(){};
DriverDao.prototype.save=function(obj,callback){
	var instance=new Dirver(obj);
	instance.save(function(err){
		callback(err);
	})
};
//按id查询单个司属性
DriverDao.prototype.findByid=function(id,callback){
	Dirver.find({_id:id},function(err,obj){
           callback(err,obj);
	})
};

//查询全部司机
DriverDao.prototype.findAll=function(callback){
	Dirver.findAll(function(err){
		callback(err);
	})
}
//修改
DriverDao.prototype.findByIdAndUpdate=function(id,obj,err){
    var _id=obj._id;
    delete obj._id;
    Dirver.update({_id:_id},obj,function(err){
    	callback(err);
    })


}
//删除
DriverDao.prototype.remove=function(obj,err){
	var _id=obj._id;
    Dirver.remove({_id:_id},function(err){
    	callback(err);
    })
}
module.exports=new DriverDao();