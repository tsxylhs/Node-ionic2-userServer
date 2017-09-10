var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs=require('ejs');
var routes = require('./routes/index');
var userController = require('./routes/userController');
var UserController=require('./routes/UsersController');
var massagecheck =require('./routes/massagecheck');
var images=require('./routes/images');
var flash=require('connect-flash');
var app = express();
  var multipart=require('connect-multiparty');
  var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var shigu=require('./routes/shigu');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(flash());
//跨域请求
//解析 application/x-www-form-urlencoded，limit:'20mb'用于设置请求的大小
//解决nodejs Error: request entity too large问题
app.use(bodyParser.urlencoded({ limit:'20mb',extended: true })); 
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//使用static中间件 制定public目录为静态资源目录,其中资源不会经过任何处理
app.use('/static',express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/users', userController.adduser);
//app.use('/usersfind',userController.finduser);
app.use('/usersremove',userController.removeuser);
//app.use('/user/updata',userController.updatauser);
app.use('/doubleimages',images.doubleimages);
app.use('/oneimages' , multipart(),images.imagestest);
//注册时短信验证   找回密码时短信验证
app.use('/messagecheck', UserController.phoneCheck);
//用户登录时路经
app.use('/userregister',UserController.register);
//头像更改
app.use('/avatar',images.avatar);
//事故描述
app.use('/miaoshu',shigu.sgsm);
//双方事故图片
app.use('/shuangfang',images.shuangfang);
//我方信息
app.use("/wfxx",shigu.wfxx);
//对方信息
app.use("/yfxx",shigu.yfxx);
//签名
app.use("/qianming",shigu.qm);
app.use('/userfind',UserController.finduser);
//更改用户信息
app.use('/updateUsers',UserController.updatauser);
//app.use('/')
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
