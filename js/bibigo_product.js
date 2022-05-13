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

    // 기본 세팅
    cnt1_artGroup.css({
        marginLeft: '-100%'
    });
    cnt1_artGroup.find('article:last').prependTo(cnt1_artGroup);

    // 함수
    cnt2_slideBtn.click(function(){
        if (flag == true) {
            flag =! true;
            i++;
            if (i >= 2) {
                i = 2;
                cnt2_slideBtn.css({
                    display: 'none'
                });
            }
            cnt2_artGroup.animate({
                marginLeft: i * -100.7 + '%'
            },500,function(){
                flag =! false;
            });
        }
    });
    cnt3_btn.click(function(){
        if (flag == true) {
            cnt3_artBtm.css({
                overflow: 'auto',
                height: 'auto'
            });
            cnt3_btn.text('접기-');
            flag =! true;
        } else {
            cnt3_btn.text('더보기+');
            cnt3_artBtm.css({
                overflow: 'hidden',
                height: '0'
            });
            flag =! false;
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
        cnt1_paging.css({
            'pointer-events' : 'none'
        });
        cnt1_artGroup.css({
            'pointer-events': 'none'
        });
        cnt1_artGroup.animate({
            marginLeft: '-200%'
        },20,'linear',function(){
            cnt1_artGroup.find('article:eq(0)').appendTo(cnt1_artGroup);
            cnt1_artGroup.css({
                marginLeft : '-100%',
                'pointer-events': 'auto'
            });
            ind = cnt1_artGroup.find('article:first').attr('data-num');
            cnt1_paging.css({
                'pointer-events' : 'auto'
            });
        });  
    }

    function paging_right (){
        cnt1_paging.css({
            'pointer-events' : 'none'
        });
        cnt1_artGroup.css({
            'pointer-events' : 'none'
        });
        cnt1_artGroup.animate({
            marginLeft: '0%'
        },20,'linear',function(){
            cnt1_artGroup.find('article:eq(5)').prependTo(cnt1_artGroup);
            cnt1_artGroup.css({
                marginLeft : '-100%',
                'pointer-events' : 'auto'
            });
            cnt1_paging.css({
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