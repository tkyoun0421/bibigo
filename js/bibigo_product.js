$(function(){
    // 변수
    var cnt1_artGroup = $('.cnt1 .artGroup');
    var cnt1_article = $('.cnt1 article');
    var cnt1_paging = $('.cnt1 .paging>li');
    var cnt2_artGroup = $('.cnt2 .artGroup');
    var cnt2_slideBtn = $('.cnt2 .artView>i');
    var cnt3_btn = $('.cnt3 .btn');
    var cnt3_artBtm = $('.cnt3 section .artBtm');
    var gnbBtn = $('.gnb .topBtn');
    var i = 0;
    var ind = 0;
    var now = 0;
    var flag = true;
    var btn_flag = true;
    var j = 0;
    var bars = $('.hdrWrap .hdrRight .tab>li');
    var nav = $('.hdrWrap .nav');
    var hdrLeft = $('.hdrWrap .hdrLeft');
    var tab = $('.hdrWrap .tab');
    var hdr = $('.hdrWrap header');
    var hdrRight = $('.hdrWrap .hdrRight');

    // 기초 세팅
    cnt1_artGroup.css({
        marginLeft: '-100%'
    });
    cnt1_artGroup.find('article:last').prependTo(cnt1_artGroup);

    $(window).resize(function(){
        if ($(window).width() <= 420) {
            j = 0;
            cnt2_artGroup.css({
                marginLeft: 0
            });
            cnt2_slideBtn.css({
                display: 'none'
            })
        } else if ($(window).width() <= 1024) {
            j = 0;
            cnt2_artGroup.css({
                marginLeft: 0
            });
            cnt2_slideBtn.css({
                display: 'none'
            });
        } else {
            j = 0;
            cnt2_artGroup.css({
                marginLeft: 0
            });
            cnt2_slideBtn.css({
                display: 'block'
            });
        }
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
    
    

    cnt2_artGroup.swipeleft(function(){
        if ($(window).width() <= 420) {
            j++;
            if (j>=11) {
                j = 11;
            }
            cnt2_artGroup.css({
                marginLeft: j * -100.4 + '%',
                'transition' : 'all .5s'
            });
        } else if ($(window).width() <= 1024) {
            j++;
            if (j>=3) {
                j = 3;
            }
            cnt2_artGroup.css({
                marginLeft: j * -100 + '%',
                'transition' : 'all .5s'
            });
        } 
    });
    cnt2_artGroup.swiperight(function(){
        if ($(window).width() <= 420) {
            j--;
            if (j < 0) {
                j = 0;
            }
            cnt2_artGroup.css({
                marginLeft: j * -100.4 + '%',
                'transition' : 'all .5s'
            });
        } else if ($(window).width() <= 1024) {
            j--;
            if (j < 0) {
                j = 0;
            }
            cnt2_artGroup.css({
                marginLeft: j * -100 + '%',
                'transition' : 'all .5s'
            });
        }
    });
    cnt2_slideBtn.click(function(){
        console.log(j);
        if ($(window).width() <= 420){
            if (flag == true) {
                flag =! true;
                j++;
                if (j >= 11) {
                    j = 11;
                    cnt2_slideBtn.css({
                        display: 'none'
                    });
                }
                cnt2_artGroup.animate({
                    marginLeft: j * -100 + '%'
                },500,function(){
                    flag =! false;
                });
            }
        } else if ($(window).width() <= 1024 ) {
            if (flag == true) {
                flag =! true;
                j++;
                if (j >= 3) {
                    j = 3;
                    cnt2_slideBtn.css({
                        display: 'none'
                    });
                }
                cnt2_artGroup.animate({
                    marginLeft: j * -100.7 + '%'
                },500,function(){
                    flag =! false;
                });
            }
        } else {
            if (flag == true) {
                flag =! true;
                j++;
                if (j >= 2) {
                    j = 2;
                    cnt2_slideBtn.css({
                        display: 'none'
                    });
                }
                cnt2_artGroup.animate({
                    marginLeft: j * -100.7 + '%'
                },500,function(){
                    flag =! false;
                });
            }
        }
        
        
    });
    cnt3_btn.click(function(){
        if (btn_flag == true) {
            cnt3_artBtm.css({
                height: 'auto'
            });
            cnt3_btn.text('접기-');
            btn_flag =! true;
        } else {
            cnt3_btn.text('더보기+');
            cnt3_artBtm.css({
                overflow: 'hidden',
                height: '0'
            });
            btn_flag =! false;
        }
    });

    cnt1_paging.click(function(){
        ind = cnt1_artGroup.find('article:first').attr('data-num');
        now = $(this).index();
        if ( ind < now ){
            for (i = ind; i < now; i++) {
                paging_left();
            }
        } else {
            for (i = now; i < ind; i++) {
                paging_right();
            }
        }
        cnt1_paging.removeClass('show');
        $(this).addClass('show');
    });

    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });

    function paging_left (){
        cnt1_artGroup.css({
            'pointer-events': 'none'
        });
        cnt1_artGroup.animate({
            marginLeft: '-200%'
        },10,'linear',function(){
            cnt1_artGroup.find('article:eq(0)').appendTo(cnt1_artGroup);
            cnt1_artGroup.css({
                marginLeft : '-100%',
                'pointer-events': 'auto'
            });
            ind = cnt1_artGroup.find('article:first').attr('data-num');
        });  
    }

    function paging_right (){
        cnt1_artGroup.css({
            'pointer-events' : 'none'
        });
        cnt1_artGroup.animate({
            marginLeft: '0%'
        },10,'linear',function(){
            cnt1_artGroup.find('article:eq(5)').prependTo(cnt1_artGroup);
            cnt1_artGroup.css({
                marginLeft : '-100%',
                'pointer-events' : 'auto'
            });
        });   
    }

    function drag_right (){
        ind = $(this).attr('data-num');
        if (flag == true){
            flag =! true;
            cnt1_artGroup.css({
                'pointer-events' : 'none'
            });
            cnt1_paging.css({
                'pointer-events' : 'none'
            });
            cnt1_artGroup.animate({
                marginLeft: '0%'
            },500,function(){
                cnt1_artGroup.find('article:eq(5)').prependTo(cnt1_artGroup);
                cnt1_artGroup.css({
                    marginLeft : '-100%',
                    'pointer-events' : 'auto'
                });
                cnt1_paging.css({
                    'pointer-events' : 'auto'
                });
                flag =! false;
            });   
        }    
        cnt1_paging.removeClass('show');
        cnt1_paging.eq(ind-2).addClass('show');
    }

    function drag_left (){
        ind = $(this).attr('data-num');
        if (flag == true){
            flag =! true;
            cnt1_artGroup.css({
                'pointer-events': 'none'
            });
            cnt1_paging.css({
                'pointer-events' : 'none'
            });
            cnt1_artGroup.animate({
                marginLeft: '-200%'
            },500,function(){
                cnt1_artGroup.find('article:eq(0)').appendTo(cnt1_artGroup);
                cnt1_artGroup.css({
                    marginLeft : '-100%',
                    'pointer-events': 'auto'
                });
                cnt1_paging.css({
                    'pointer-events' : 'auto'
                });
                flag =! false;
                i++;
            });  
        }              
        cnt1_paging.removeClass('show');
        cnt1_paging.eq(ind).addClass('show');
    }
    
    cnt1_article.swiperight(drag_right);
    cnt1_article.swipeleft(drag_left);
});