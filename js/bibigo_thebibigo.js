
$(function(){
    // 변수
    var flag = true;
    var ind = 0;
    var i = 0;    
    var bars = $('.hdrWrap .hdrRight .tab>li');
    var nav = $('.hdrWrap .nav');
    var hdrLeft = $('.hdrWrap .hdrLeft');
    var tab = $('.hdrWrap .tab');
    var hdr = $('.hdrWrap header');
    var hdrRight = $('.hdrWrap .hdrRight');
    var cnt1_text = $('.cnt1 .texts');
    var gnbBtn = $('.gnb .topBtn');
    var cnt2_tabLi = $('.cnt2 .tab li');
    var cnt2_texts = $('.cnt2 header .texts');
    var cnt2_artGroup = $('.cnt2 .artGroup');
    var cnt2_artGroup1 = $('.cnt2 .artGroup1');
    var cnt2_artGroup2 = $('.cnt2 .artGroup2');
    var cnt2_artGroup3 = $('.cnt2 .artGroup3');
    var cnt2_slideBtn = $('.cnt2 .slideBtn i');
    var cnt2_backgroundEffect = $('.cnt2 .backgroundEffect');
    var cnt2_artView = $('.cnt2 .artView');
    var logo = $('.hdrWrap .logo');
    var cnt2_tab = $('.cnt2 .tab');

    // 기본세팅
    cnt2_artGroup.css({
        marginLeft: '-33%'
    });
    cnt2_artGroup.each(function(a){
        cnt2_artGroup.eq(a).find('article:last').prependTo(cnt2_artGroup.eq(a));
    });

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
    
    cnt2_slideBtn.eq(0).click(function(){  
        if ($(window).width() <= 420) {
            if ( flag == true ) {
                flag =! true;
                cnt2_artGroup.each(function(a){
                    cnt2_artGroup.eq(a).animate({
                        marginLeft: '22%',
                    },500,function(){
                        cnt2_artGroup.eq(a).css({
                            marginLeft: '-33%'
                        });
                        cnt2_artGroup.eq(a).find('article:last').prependTo(cnt2_artGroup.eq(a));               
                    });
                    cnt2_artGroup.eq(a).find('article:eq(0)').css({
                        transform: 'scale(1.15) translateY(min(40px,4em))',
                        transition: 'transform .5s'
                    });
                    cnt2_artGroup.eq(a).find('article:eq(1)').css({
                        transform: 'scale(1)',
                        transition: 'transform .5s',
                        transform: 'translateY(0px)'
                    });
                })
                cnt2_backgroundEffect.animate({
                    width: '0px',
                    height: '0px'
                },550,function(){
                    cnt2_backgroundEffect.css({
                        width: 'min(25em,250px)',
                        height: 'min(25em,250px)'
                    });
                    flag =! false;
                });
            } 
        }
        if ( flag == true ) {
            flag =! true;
            cnt2_artGroup.each(function(a){
                cnt2_artGroup.eq(a).animate({
                    marginLeft: '0%',
                },500,function(){
                    cnt2_artGroup.eq(a).css({
                        marginLeft: '-33%'
                    });
                    cnt2_artGroup.eq(a).find('article:last').prependTo(cnt2_artGroup.eq(a));               
                });
                cnt2_artGroup.eq(a).find('article:eq(1)').css({
                    transform: 'scale(1.15) translateY(min(40px,4em))',
                    transition: 'transform .5s'
                });
                cnt2_artGroup.eq(a).find('article:eq(2)').css({
                    transform: 'scale(1)',
                    transition: 'transform .5s',
                    transform: 'translateY(0px)'
                });
            })
            cnt2_backgroundEffect.animate({
                width: '0px',
                height: '0px'
            },550,function(){
                cnt2_backgroundEffect.css({
                    width: '170px',
                    height: '170px'
                });
                flag =! false;
            });
        }        
    });
    cnt2_slideBtn.eq(1).click(function(){
        if ($(window).width() <= 420) {
            if (flag == true) {
                flag =! true;
                cnt2_artGroup.each(function(a){
                    cnt2_artGroup.eq(a).animate({
                        marginLeft: '-88%',
                    },500,function(){
                        cnt2_artGroup.eq(a).css({
                            marginLeft: '-33%'
                        });
                        cnt2_artGroup.eq(a).find('article:first').appendTo(cnt2_artGroup.eq(a));                
                    });
                    cnt2_artGroup.eq(a).find('article:eq(2)').css({
                        transform: 'scale(1.15) translateY(min(4em,40px))',
                        transition: 'all .5s'
                    });
                    cnt2_artGroup.eq(a).find('article:eq(1)').css({
                        transform: 'scale(1)',
                        transition: 'all .5s',
                        transform: 'translateY(0px)'
                    });
                })
                cnt2_backgroundEffect.animate({
                    width: '0px',
                    height: '0px'
                },500,function(){
                    cnt2_backgroundEffect.css({
                        width: '170px',
                        height: '170px'
                    });
                    flag =! false;
                });
            }      
        }
        if (flag == true) {
            flag =! true;
            cnt2_artGroup.each(function(a){
                cnt2_artGroup.eq(a).animate({
                    marginLeft: '-66%',
                },500,function(){
                    cnt2_artGroup.eq(a).css({
                        marginLeft: '-33%'
                    });
                    cnt2_artGroup.eq(a).find('article:first').appendTo(cnt2_artGroup.eq(a));                
                });
                cnt2_artGroup.eq(a).find('article:eq(3)').css({
                    transform: 'scale(1.15) translateY(min(4em,40px))',
                    transition: 'all .5s'
                });
                cnt2_artGroup.eq(a).find('article:eq(2)').css({
                    transform: 'scale(1)',
                    transition: 'all .5s',
                    transform: 'translateY(0px)'
                });
            })
            cnt2_backgroundEffect.animate({
                width: '0px',
                height: '0px'
            },500,function(){
                cnt2_backgroundEffect.css({
                    width: 'min(25em,250px)',
                    height: 'min(25em,250px)'
                });
                flag =! false;
            });
        }        
    });
    
    cnt2_tabLi.click(function(){
        cnt2_tabLi.removeClass('now');
        $(this).addClass('now');
        ind = $(this).index();
        if ($(window).width() <= 420) {
            i = ind;
            cnt2_tab.css({
                marginLeft: i * -90+ '%'
            }); 
        }
        if (ind == 1){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'flex'
            });
        } else if ( ind == 2 ){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'block'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'flex'
            });
        } else {
            cnt2_texts.find('.text:eq(0)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'flex'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
        }
    });
    cnt2_tab.swipeleft(function(){
        if ($(window).width() <= 420) {
            i++;
            if ( i >= 2 ) {
                i = 2;
            }
            cnt2_tab.css({
                marginLeft: i * -90+ '%'
            });    
            cnt2_tabLi.removeClass('now');
            cnt2_tabLi.eq(i).addClass('now');
        }
        if (i == 1){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'flex'
            });
        } else if ( i == 2 ){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'block'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'flex'
            });
        } else {
            cnt2_texts.find('.text:eq(0)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'flex'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
        }
    });

    cnt2_tab.swiperight(function(){
        if ($(window).width() <= 420) {
            i--;
            if (i <= 0) {
                i = 0;
            }
            cnt2_tab.css({
                marginLeft: i * -90 + '%'
            }); 
            cnt2_tabLi.removeClass('now');
            cnt2_tabLi.eq(i).addClass('now');                  
        }
        if (i == 1){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'flex'
            });
        } else if ( i == 2 ){
            cnt2_texts.find('.text:eq(0)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'block'
            });
            cnt2_artGroup.eq(0).css({
                display: 'none'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'flex'
            });
        } else {
            cnt2_texts.find('.text:eq(0)').css({
                display: 'block'
            });
            cnt2_texts.find('.text:eq(1)').css({
                display: 'none'
            });
            cnt2_texts.find('.text:eq(2)').css({
                display: 'none'
            });
            cnt2_artGroup.eq(0).css({
                display: 'flex'
            });
            cnt2_artGroup.eq(1).css({
                display: 'none'
            });
            cnt2_artGroup.eq(2).css({
                display: 'none'
            });
        }
    });

    $(window).resize(function(){
        if ($(window).width() >= 420) {
            cnt2_tab.css({
                marginLeft: 0
            });
        }
    });
    
    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });
    
    
});