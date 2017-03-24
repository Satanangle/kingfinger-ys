$(function(){
    $('.zh').on('focus',function(){
            $('.tips1').html('请输入手机号码').css({color:'blue'});
    });

    $('.zh').on('blur',function(){
        var a=$('.zh').val();
        var re=/^1[3|4|5|7|8][0-9]\d{8}$/;
        if(a==""){
            $('.tips1').html('账户不能为空！').css({color:'red'});
            return false;
        }else{
            if(!re.test(a)){
            $('.tips1').html('请输入正确手机号！').css({color:'red'});
            return false;
            }
            else{
            $('.tips1').html('账户可使用！').css({color:'green'});
            return true;
            }
        }
    });

    $('.mm').on('focus',function(){
            $('.tips2').html('请输入密码').css({color:'blue'});
    });


    $('.mm').on('blur',function(){
        var b=$('.mm').val();
        var re=/\d{6,20}/;
        if(b==""){
            $('.tips2').html('密码不能为空！').css({color:'red'});
            return false;
        }else{
            if(!re.test(b)){
            $('.tips2').html('请输入6-20位数字字母组合密码！').css({color:'red'});
            return false;
            }
            else{
            $('.tips2').html('密码正确！').css({color:'green'});
            return true;
            }
        }
    });



    //  提交判断
/*    $('.ljdl').click(function(){
        var c=$('.zh').on('blur',function(){});
        if(c==true){
            return true;
        }
        else{
            return false;
        }
    });*/  


    //侧边栏动态
  $('.top li').find('div').hover(function(){
            $(this).animate({left:'20px'},300).siblings().css({left:'63px'});
            },function(){
            $(this).animate({left:'63px'},300)
        });

        


     //侧边栏点击返回顶部效果
     var timer=null;
    $('.top').find('div').eq(4).click(function(){
        timer=setInterval(function(){
            var scrollh=$('body').scrollTop();//获取滚动高度
           
            var speed=Math.floor(-scrollh/8);
            if($('body').scrollTop()==0){clearTimeout(timer);}

           document.documentElement.scrollTop= document.body.scrollTop=scrollh +speed;//重新定义滚动高度
        }, 50)
    });

});

    


//  提交判断
function box(){
    var flag_mm=$('.mm').blur();
    var flag_zh=$('.zh').blur();
    if(flag_mm==true&&flag_zh==true){
        return true;
    }else{
        return false;
    }
}

//侧边栏隐藏与出现
$(document).on('scroll',function(){
    var h=$(window).scrollTop();
    if(h>=500){
         $('.top').css({top:($(window).height()-$('ul').height())/2+h,display:'block'})
    }else{
        $('.top').css('display','none')
    }
})

