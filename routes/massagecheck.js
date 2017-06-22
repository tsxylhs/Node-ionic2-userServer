var AliDayu = require('node-alidayu');
var client = new AliDayu({
  app_key: '24254834',
  app_secret: 'c629a4b9f1103560fc0e5a07e6c6cfc4'
})

exports.messagecheck= function(req, res, next) {
     var range=function(start,end)
               {
                    var array=[];
                    for(var i=start;i<end;++i) array.push(i);
                    return array;
                };
               var randomstr = range(0,6).map(function(x){
                return Math.floor(Math.random()*10);
                         }).join('');
          console.log(randomstr);
              var number=req.body.number;
                 console.log(number);
    client.sms({
      rec_num: number,
      sms_free_sign_name: '泰山',
      sms_template_code: 'SMS_70490513',
      sms_param: {
         
       number: randomstr
      }
    }).then(function (data) {
          console.log('sucess');
    
    }).catch(function (err) {
      console.log('fail')
    })
      res.render('index', {title: 'Ex'});
};
 
