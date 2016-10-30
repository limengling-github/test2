
// 省略
$(document).ready(function(){
    //限制字符个数
    $(".hide").each(function(){
        var maxwidth=11;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'...');
        }
    });
});	


// 轮播图
 $(function(){
            var picList=$("#box ul li");
            var ul=$("#box ul");
            var olList=$("#box ol li");
            var imgHeight=picList.outerHeight();
            var iNow=0;
            var timer=null;
             ul.on('mouseover',function(){
             	clearInterval(timer);//鼠标位于图片上时停止
             })
             ul.on('mouseleave',function(){
             	doRun();
             	timer=setInterval(doRun,2000);//鼠标离开图片上时运动
             })
            
            timer=setInterval(doRun,2000);//2秒后执行
            function doRun(){
             	if (iNow==picList.length-1) {
             		iNow=0;
             	}else{
             		iNow=iNow+1;
             	}
             	ul.stop(true,true).animate({top:-iNow*imgHeight},500);//500毫秒上移

             }
           }) 