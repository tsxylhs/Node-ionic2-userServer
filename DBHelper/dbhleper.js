/**
公共的存储方法
@param model 要操作的是据库模型
@param conditions 增加的条件
@param callback 回调方法
*/
exports.addData=function(model,conditions,callback){
model.create(conditions,function(err,result){
	if(err){
          console.log("没有插入成功"+err);     
          callback({success:0,flag:"存储失败"});


	}
	else{
		console.log("存储成功!");
      let  data={
            success:1,flag:"存储成功"
        }
		callback(data);

	}
});
}

/** 
 * 公共update方法 
 * @param model 要操作数据库的模型 
 * @param conditions 增加的条件,如{id:xxx} 
 * @param update 更新条件{set{id:xxx}} 
 * @param options  
 * @param callback 
 */  
exports.updateData =function(model,conditions,update,callback) {  
  
    model.update(conditions, update,function(error,result){  
        console.log(result+11);
        if(error) {  
            console.log(error);  
            callback({success:0,flag:"修改失败"});  
        } else {  
            if(result.n!=0){  
                console.log('修改成功!');  
                data={success:1,flag:"修改成功!"}
                callback(data);  
            }  
            else{  
                console.log('没有这个数据');  
                callback({success:0, flag: '没有这个数据'});  
            }  
  
        }  
    });  
}  
/** 
 * 公共remove方法 
 * @param model 
 * @param conditions 
 * @param callback 
 */  
exports.removeData =function(model,conditions,callback) {  
  
    model.remove(conditions, function(error,result) {  
        if (error) {  
            console.log(error);  
            callback({success: 0, flag: "删除失败"});  
        } else {  
            if(result.result.n!=0){  
                console.log('remove success!');  
                callback({success: 1, flag: "删除成功"});  
            }  
            else{  
                console.log('remove fail:没有数据!');  
                callback({success:0, flag: 'remove fail:没有数据!'});  
            }  
  
        }  
    });  
}  
  
/** 
 * 公共find方法 非关联查找 
 * @param model 
 * @param conditions 增加的条件,如{id:xxx}
 * @param fields 查找时限定的条件，如顺序，某些字段不查找等 
 * @param options 
 * @param callback 
 */  
exports.findData =function(model,conditions,fields,options,callback) {  
    console.log(conditions+11);
    model.find(conditions, fields, options, function(error, result){  
        if(error) {  
            console.log(error);  
            var data={success: 0, flag: "查询失败"};
            callback(data);  
        } else {  
            if(result.length!=0){  
                console.log('find success!'); 
                var data= {success: 1, flag: "查询成功",result:result}
                callback(data);  
            }  
            else{  
                console.log('find fail:没有数据!'); 
                var data= {success: 0, flag: 'find fail:没有数据!'};
                callback(data);  
            }  
  
        }  
  
    });  
}  


/** 
 * 公共populate find方法 
 * 是关联查找 
 * @param model 
 * @param conditions 
 * @param path :The field need to be refilled （需要覆盖的字段） 
 * @param fields :select fields (name -_id,Separated by a space field,In front of the field name plus "-"said not filled in) 
 * @param refmodel （关联的字段，有path可为null） 
 * @param options 
 * @param callback 
 */  
exports.findDataPopulation =function(model,conditions,path,fields,refmodel,options,callback) {  
    model.find(conditions)  
    .populate(path,fields, refmodel,options)  
    .exec(function(err, result) {  
            if(err) {  
                console.log(err);  
                callback({success: 0, flag: 'population find data fail'});  
            } else {  
                if(result.length!=0){  
                    console.log('population find success!');  
                    callback({success: 1, flag: 'population find data success',result:result});  
                }  
                else{  
                    console.log('population find fail:no this data!');  
                    callback({success: 0, flag: 'population find fail:no this data!'});  
                }  
  
            }  
  
    });  
  
}  

