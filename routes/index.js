var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/uploadimages',function(req,res){
	res.render('images',{title:'上传图片'});
});

module.exports = router;
