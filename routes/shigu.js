var dbHelper=require('../DBHelper/dbhleper');
var userDao=require('../dbDao/userDao');
exports.sgsm=function(req,res){
        console.log(req.body.userID);
        console.log(req.body.sglx);
        console.log(req.body.sgsm);
 res.json({success:1,flag:"修改成功!"});
}
exports.wfxx=function(req,res){
     console.log(req.body.name+""+req.body.place+""+req.body.carId+""+req.body.phoneNum+""+req.body.carCardId+""+req.body.insuranceCompany);
      res.json({success:1,flag:"修改成功!"});
}
exports.yfxx=function(req,res){
    console.log(req.body.name+""+req.body.place+""+req.body.carId+""+req.body.phoneNum+""+req.body.carCardId+""+req.body.insuranceCompany);
      res.json({success:1,flag:"修改成功!"});
}
exports.qm=function(req,res){
    var imgData = req.body.imagedata;

   // console.log(imgData);
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("../public/images/qianming.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
           res.json({success:1,flag:"修改成功!"});
        }
    })
}