/**
 * Created by yalin.zeng on 2016/12/26.
 */
(function ($) {
    $.fn.sliderImg=function (options) {
        var defaults={
            mode: true,//默认为水平滚动
            infiniteLoop: true,//默认为无限循环
            controlsDot:true,//出现控制点
            controls: true,//默认出现 next,prev按钮
            speed: 500,//数度，单位为毫秒
            autoHover: false,//鼠标放上停止滚动
            pause: 3000,//时间过渡
            fade:true,//动画效果为淡入淡出
            prevBtn:'.prev',
            nextBtn:'.next'
        }
        var options=$.extend(defaults,options);
        this.each(function () {

            //init
            var self=$(this),
                ul=$('ul',self),
                li=$('li',ul),
                len=li.length,
                index=0,
                timer=null;
            ul.width(self.width()*len*2);

            li.clone().appendTo(ul);


            if(options.controlsDot){
                self.append('<ul class="slider-dot"></ul>');

                for(var i=0;i<len;i++){
                    var sliderDot=$('.slider-dot',self);
                    sliderDot.append('<li>'+(i+1)+'</li>');
                }
                var sliderDotItem=$('li',sliderDot);
                //console.log(sliderDotItem);
                sliderDotItem.removeClass('acitve').eq(0).addClass('active');

                sliderDotItem.click(function () {
                    index=$(this).index();
                    slider(index)
                })
            }
            if(options.infiniteLoop){
                timer=setInterval(function () {
                    autoAdd();
                },options.pause)
            }else{
                clearInterval(timer);
            }
          function  autoAdd() {
              if(index>len-2){
                  index=0;
              }else{
                  ++index;
              }

             slider(index)
          }
          $(options.prevBtn,self).click(function () {
              if(index<1){
                  index=len-1
              }else{
                --index;
              }

              slider(index)
          })
            $(options.nextBtn,self).click(function () {
                if(index>len-1){
                    index=0
                }else{
                    ++index
                }

                slider(index)
            })

          function slider(index) {
              if(options.controlsDot){
                  sliderDotItem.removeClass('active').eq(index).addClass('active');
              }
              if(options.fade){
                  li.css({'opacity':0,'position':'absolute'});
                  li.eq(index).animate({'opacity':1});
              }else{
                  if(options.mode){
                      ul.animate({'margin-left':-index*self.width()},500)
                  }else{
                      ul.animate({'margin-top':-index*self.width()},500)
                  }
              }

          }
          self.hover(function () {
              clearInterval(timer)
          },function () {
              if(options.infiniteLoop){
                  timer=setInterval(function () {
                      autoAdd();
                  },options.pause)
              }

          })


        })

    }

    return $.fn.sliderImg()

}(jQuery))
