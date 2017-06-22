function uploadFile(){
	var fromData=new FormData($("#fromUploadFile")[0]);
	$.ajax({
		url: '/oneimages',
		type: 'post',
		data: fromData,
	 async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function(data){
      if(200 === data.code) {
        $("#imgShow").attr('src', data.msg.url);
        $("#spanMessage").html("上传成功");
      } else {
        $("#spanMessage").html("上传失败");
      }
      console.log('imgUploader upload success, data:', data);
    },
    error: function(){
      $("#spanMessage").html("与服务器通信发生错误");
    }
  });
}
