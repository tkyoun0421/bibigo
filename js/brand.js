$(function(){
    var gnbBtn = $('.gnb .topBtn');
    var bars = $('.hdrWrap .hdrRight .tab>li');
    var nav = $('.hdrWrap .nav');
    var hdrLeft = $('.hdrWrap .hdrLeft');
    var tab = $('.hdrWrap .tab');
    var hdr = $('.hdrWrap header');
    var hdrRight = $('.hdrWrap .hdrRight');
    const section = $('section');
    const article = $('article');
    const item2 = $('.item_2');
    const item3 = $('.item_3');
    let slide1 = false;
    let slide2 = false;
    let slide3 = false;

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

    $(window).scroll(function(){
        let value = article.eq(0).offset().top;
        let value1 = article.eq(1).offset().top;
        let value2 = article.eq(2).offset().top;
        let top = $(window).scrollTop();
        console.log(slide1);
        console.log(slide2);
        console.log(slide3);
        if (top <= value) {
            if (slide1 =! false) {               
                article.eq(0).addClass('item_1');
            } 
            slide1 = true;
        }
        if (top <= value1 && top >= value) {
            if (slide2 =! false) {
                article.eq(1).addClass('item_2');
            }
            slide2 = true;
        } 
        if (top <= value2 && top >= value1) {
            if (slide3 =! false) {
                article.eq(2).addClass('item_3');
            }  
            slide3 = true;
        }
    });
});