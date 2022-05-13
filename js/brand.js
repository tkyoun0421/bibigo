$(function(){
    var gnbBtn = $('.gnb .topBtn');

    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });
});