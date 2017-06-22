var dbHelper=require('../DBHelper/dbhleper');
var userDao=require('../dbDao/userDao');
var AliDayu = require('node-alidayu');
var client = new AliDayu({
  app_key: '24254834',
  app_secret: 'c629a4b9f1103560fc0e5a07e6c6cfc4'
});

//短信验证模块

   //获取六位随机数
              var range=function(start,end)
               {
                    var array=[];
                    for(var i=start;i<end;++i) array.push(i);
                    return array;
                };
           

            
            
exports.phoneCheck=function(req,res,next){
    
 var randomstr = range(0,6).map(function(x){
                return Math.floor(Math.random()*10);
                         }).join('');


          //console.log(randomstr);
              var number=req.body.phoneNumber;
            //     console.log(number);
    client.sms({
      rec_num: number,
      sms_free_sign_name: '泰山',
      sms_template_code: 'SMS_70490513',
      sms_param: {
         
       number: randomstr
      }
    }).then(function (data) {
          console.log('sucess');
          res.json({'code':1,avatar:'我是图片路径','number':number,'message':'ok'});
    }).catch(function (err) {
      console.log('fail')
      res.json({'code':2,'message':'no'});
        
    })
      //res.render('index', {title: 'Ex'});
};
//用户注册模块
exports.register=function(req,res){
     console.log(req.body.PhoneNumber+req.body.passWord);
        
            var photonumber=range(0,1).map(function(x){
                return Math.floor(Math.random()*10);
                         }).join('');
     var users=new Array();
      users.push({
          phoneNumber:req.body.PhoneNumber,
          passWord:req.body.passWord,
          avatar:"http://127.0.0.1:3000/static/images/"+photonumber+".jpeg",
           userName:"默认",
           nickName:"默认",
           email:"11111@qq.com",
           idCard:"111111111111111111",
           userAddress:"泰安",
           driveCard:"",
           runCard:""

      });
     // console.log(avatar)
             console.log(users[0]);
        userDao.adduser(users[0],dbHelper,function(result){  
            res.json(result);  
        });  
    

}
exports.finduser=function(req,res){
    console.log(req.body);
    console.log(req.body.phoneNumber);
    console.log(req.body.password);
    let usersfind={
          phoneNumber:req.body.phoneNumber,
          passWord:req.body.password,
          
    };
    console.log(usersfind);

    userDao.finduser(usersfind,dbHelper,function(result){
        res.json(result);
    })
    
}
    exports.updatauser=function(req,res){

        console.log(req.body);
        console.log(req.body._id);
       var find={_id:req.body._id};
        var usersupdate={
            $set:{
              email:req.body.email,
              idCard:req.body.idCard,
              userAddress:req.body.userAddress,
              userName:req.body.userName,
              nickName:req.body.nickName,
              email:req.body.email,
              idCard:req.body.idCard,
              userAddress:req.body.userAddress,
              driveCard:"",
              runCard:""
  //  driveCard:req.body.driveCard, 我是图片
   // runCard:req.我也是图片
            }
        }
    userDao.updatauser(find,usersupdate,dbHelper,function(result){
            console.log(result);
         res.json(result);
    })

    }



