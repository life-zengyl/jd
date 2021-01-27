/**
 * Created by Administrator on 2016/12/27.
 */
$(function () {
    //导航菜单
   $('.left-nav').on('mouseover','li',function (event) {
       $(this).addClass('hover').siblings().removeClass('hover');
      var index=$(this).index();
      $('.hover-box').show();
       $('.hover-box .hover-item').eq(index).addClass('active').siblings().removeClass('active')
   })
   $('.left-nav').mouseleave(function (event) {
       event.stopPropagation()
       $('.hover-box').hide();
   });
    //倒计时
   (function countTime(stime) {
        var stime=new Date(stime);
        var h,m,s,str;
        var timer=setInterval(function () {
            var now=new Date();
            var ytime=(stime.getTime()-now.getTime())/1000;

            if(ytime>0){
                h = Math.floor(ytime/3600) < 10 ? '0'+ Math.floor(ytime/3600) :  Math.floor(ytime/3600);
                m = Math.floor(ytime%86400%3600/60)<10 ? "0"+Math.floor(ytime%86400%3600/60) : Math.floor(ytime%86400%3600/60);
                s=Math.floor(ytime%60)<10 ? "0"+Math.floor(ytime%60):Math.floor(ytime%60)
            }else {
                h="00";
                m="00";
                s="00";
            }
            str= '当前场次 '+
                '<span class="num">'+h+'</span>'+
                '<span class="dot">:</span>'+
                '<span class="num">'+m+'</span>'+
                '<span class="dot">:</span>'+
                '<span class="num">'+s+'</span>'+
                ' 后结束抢购';
            $("#countTime").html(str);

        },1000)
    }('2016/12/29 12:00:00'));

    //左右浮动导航出项
    $(window).scroll(function () {
        var righLift=$('.lift_right');
        var wTop=$(window).scrollTop();
        if(wTop> $('.seckill-box')[0].offsetTop){
            righLift.fadeIn();
        }
    })

    $(window).scroll(function () {

        var wTop=$(window).scrollTop();
        var liftList=$('.lift_list');

        if(wTop >= $('#floorOne')[0].offsetTop){

            liftList.fadeIn();

            if(wTop >= $('#floorOne')[0].offsetTop && wTop < $('#floorTwo')[0].offsetTop){


                liftList.find('li').eq(0).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorTwo')[0].offsetTop && wTop < $('#floorThree')[0].offsetTop){

                liftList.find('li').eq(1).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorThree')[0].offsetTop && wTop < $('#floorFour')[0].offsetTop){

                liftList.find('li').eq(2).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorFour')[0].offsetTop && wTop < $('#floorFive')[0].offsetTop){

                liftList.find('li').eq(3).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorFive')[0].offsetTop && wTop < $('#floorSix')[0].offsetTop){

                liftList.find('li').eq(4).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorSix')[0].offsetTop && wTop < $('#floorSeven')[0].offsetTop){

                liftList.find('li').eq(5).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorSeven')[0].offsetTop && wTop < $('#floorEight')[0].offsetTop){

                liftList.find('li').eq(6).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorEight')[0].offsetTop && wTop < $('#floorNine')[0].offsetTop){

                liftList.find('li').eq(7).addClass('active').siblings().removeClass('active');

            }else if(wTop >= $('#floorNine')[0].offsetTop && wTop < $('#floorTen')[0].offsetTop){

                liftList.find('li').eq(8).addClass('active').siblings().removeClass('active');

            }else{

                liftList.find('li').eq(9).addClass('active').siblings().removeClass('active');
            }
        }else{
            liftList.fadeOut();
        }
    })

    $('.lift_list li').click(function () {
        var index=$(this).index();
        var elem="";
        switch (index){

            case 0:
                elem=$('#floorOne')[0].offsetTop;
                break;
            case 1:
                elem=$('#floorTwo')[0].offsetTop;
                break;
            case 2:
                elem=$('#floorthree')[0].offsetTop;
                break;
            case 3:
                elem=$('#floorFour')[0].offsetTop;
                break;
            case 4:
                elem=$('#floorFive')[0].offsetTop;
                break;
            case 5:
                elem=$('#floorSix')[0].offsetTop;
                break;
            case 6:
                elem=$('#floorseven')[0].offsetTop;
                break;
            case 7:
                elem=$('#floorEight')[0].offsetTop;
                break;
            case 8:
                elem=$('#floorNine')[0].offsetTop;
                break;
            case 9:
                elem=$('#floorTen')[0].offsetTop;
                break;
            default:
                elem=0;
                break;
        }
        $("html,body").animate({scrollTop:elem+'px'},300);

    })
    $('.grid .drop-item').hover(function () {
        $('.drop-item-content').animate({'bottom':0,'opacity':"1"},400).css('z-index','5');
    });

    $('.drop-item-content > a').hover(function () {
        var index=$(this).index();

        $(this).addClass('active').siblings('a').removeClass('active');
        var parentNode=$(this).parent();
        parentNode.find('.item-detail').eq(index).addClass('active').siblings('.item-detail').removeClass('active');
    });
    $('#phone >a').hover(function () {
        var index=$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        var parentNode=$(this).parent();
        parentNode.find('.phone').eq(index).addClass('active').siblings().removeClass('active');
    })

    $('#plane > a,#hotel > a,#games > a').hover(function () {
        var index=$(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        var parentNode=$(this).parent();
        var w=parentNode.width();
        parentNode.find('.swiper ul').animate({'marginLeft':-w*index+'px'},400)

    });
    $('.drop-item-content .close').click(function () {
        $('.drop-item-content').animate({'bottom':'-100px','opacity':"0",'z-index':'-1'},400);
    });
    $('#ranking .tab').on('mouseover','a',function () {
        var index=$(this).index();
        var w=$(this).width();
        $('#ranking .bottom-line').animate({'left':index*w+'px'},400);
        $('#ranking').find('.tab-content').eq(index).addClass('active').siblings('.tab-content').removeClass('active');

    })



})
