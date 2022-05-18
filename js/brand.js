$(function(){
    var gnbBtn = $('.gnb .topBtn');
    var bars = $('.hdrWrap .hdrRight .tab>li');
    var nav = $('.hdrWrap .nav');
    var hdrLeft = $('.hdrWrap .hdrLeft');
    var tab = $('.hdrWrap .tab');
    var hdr = $('.hdrWrap header');
    var hdrRight = $('.hdrWrap .hdrRight');

    // 함수
    bars.eq(2).click(function(){   
        if (bars.eq(2).hasClass('active') === true) {
            bars.removeClass('active');
            nav.removeClass('active');
            nav.find('li').removeClass('active');
            hdrLeft.removeClass('active');
            tab.removeClass('active');
            hdr.removeClass('active');
            hdrRight.removeClass('active');
        } else {
            bars.addClass('active');
            nav.addClass('active');
            nav.find('li').addClass('active');
            hdrLeft.addClass('active');
            tab.addClass('active');
            hdr.addClass('active');
            hdrRight.addClass('active');
        }
    });

    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });
});