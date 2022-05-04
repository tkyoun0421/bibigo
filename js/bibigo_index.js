$(function(){
    // 변수
    var i = 0;
    var ind = 0;
    var flag = true;
    var auto = setInterval(autoSlide , 1800);
    var gnbBtn = $('.gnb .topBtn');
    var sildeCurrent = $('.sildeCurrent');
    var cnt1_btn = $('.slideSwitch>.btn>i');
    var cnt1_artGroup = $('.cnt01>section>.artView>.artGroup');
    var cnt2_btn_left = $('.cnt02 .pageBtn>i.left');
    var cnt2_btn_right = $('.cnt02 .pageBtn>i.right');
    var cnt2_artGroup = $('.cnt02 .artGroup');
    var cnt2_paging = $('.cnt02 .artBtm>.paging>li');
    var cnt2_tab = $('.cnt02 .tab>li');
    var bnr2_countNum = $('.bnr02 .countNum>h4');
    
    // 기초 세팅   
    cnt1_artGroup.css({
        marginLeft: '-33%'
    });
    cnt1_artGroup.find('article:eq(2)>.image').css({
        'transform' : 'scale(1.07)'
    });
    $(window).blur(function(){
        clearInterval(auto);
    });
    
    $(window).focus(function(){
        auto = setInterval(autoSlide , 2000);
    });


    // 함수
    function autoSlide(){
        ind = cnt1_artGroup.find('article:first').attr('data-num');
        sildeCurrent.css({
            width: ind * 16.68 + '%'
        });          
        cnt1_artGroup.animate({
            marginLeft: '-66%',          
        },1000,function(){
            cnt1_artGroup.css({marginLeft: '-33%'});        
            cnt1_artGroup.find('article>.image').css({
                'transform' : 'scale(1.00)'
            });    
            cnt1_artGroup.find('article:eq(3)>.image').css({
                'transform' : 'scale(1.07)'
            });
            cnt1_artGroup.find('article:first').appendTo(cnt1_artGroup);
        });       
    }   
    
    function cnt1_btn_playStop(){
        if(cnt1_btn.hasClass('xi-play') === true){
            cnt1_btn.eq(1).removeClass('xi-play');
            cnt1_btn.eq(1).addClass('xi-pause');
            auto = setInterval(autoSlide , 1800);
        }else{
            cnt1_btn.eq(1).addClass('xi-play');
            cnt1_btn.eq(1).removeClass('xi-pause');
            clearInterval(auto);
        }
    };

    function cnt1_btn_leftBtn(){
        if ( flag == true){
            flag =! true;
            cnt1_artGroup.animate({
                marginLeft: '0%'
            },1000,function(){
                cnt1_artGroup.find('article:last').prependTo(cnt1_artGroup);
                cnt1_artGroup.css({marginLeft: '-33%'});
                cnt1_artGroup.find('article>.image').css({
                    'transform' : 'scale(1.00)'
                });    
                cnt1_artGroup.find('article:eq(2)>.image').css({
                    'transform' : 'scale(1.15)'
                });
                flag =! false;
                cnt1_btn.css({
                    'pointer-events' : 'auto'
                });
            });
        }else{
            cnt1_btn.css({
                'pointer-events' : 'none'
            });
        }
        ind = cnt1_artGroup.find('article:eq(4)').attr('data-num');
        sildeCurrent.css({
            width: ind * 16.68 + '%'
        });        
        cnt1_btn.eq(1).removeClass('xi-pause');
        cnt1_btn.eq(1).addClass('xi-play');
        clearInterval(auto);
    };

    function cnt1_btn_rightBtn(){
        if ( flag == true){
            flag =! true;
            cnt1_artGroup.stop().animate({
                marginLeft: '-66%'
            },1000,function(){
                cnt1_artGroup.find('article:first').appendTo(cnt1_artGroup);
                cnt1_artGroup.css({marginLeft: '-33%'});
                cnt1_artGroup.find('article>.image').css({
                    'transform' : 'scale(1.00)'
                });    
                cnt1_artGroup.find('article:eq(2)>.image').css({
                    'transform' : 'scale(1.15)'
                });
                cnt1_btn.css({
                    'pointer-events' : 'auto'
                });
                flag =! false;
            });
            clearInterval(auto);
            ind = cnt1_artGroup.find('article:first').attr('data-num');
            sildeCurrent.css({
                width: ind * 16.68 + '%'
            });        
            cnt1_btn.eq(1).removeClass('xi-pause');
            cnt1_btn.eq(1).addClass('xi-play');
        }else{
            cnt1_btn.css({
                'pointer-events' : 'none'
            });
        }
    }

    function cnt2_tab_click(){
        i = 0;
        cnt2_paging.removeClass('show');
        cnt2_paging.eq(0).addClass('show');
        cnt2_tab.removeClass('now');
        $(this).addClass('now');
        ind = $(this).index();
        cnt2_artGroup.eq(ind).prependTo('.cnt02 .artView');
        cnt2_artGroup.css({
            marginLeft: 0
        });
        cnt2_btn_right.css({
            'opacity' : 1,
            'cursor' : 'pointer'
        });
        cnt2_btn_left.css({
            'opacity' : 0,
            'cursor' : 'none'
        });
    };

    function cnt2_btn_leftBtn(){
        i--;
        if(i <= 0){
            i = 0
            cnt2_btn_left.css({
                'opacity': '0',
                'cursor' : 'auto'
            });
        }
        cnt2_artGroup.css({
            marginLeft: i * -100 + '%'
        });
        cnt2_btn_right.css({
            'opacity': '1',
            'cursor' : 'pointer'
        });
        cnt2_paging.removeClass('show');
        cnt2_paging.eq(i).addClass('show');
    }     
    
    function cnt2_btn_rightBtn(){
        i++;
        if(i >= 2){
            i = 2
            cnt2_btn_right.css({
                'opacity': '0',
                'cursor' : 'auto'
            });
        }        
        cnt2_artGroup.css({
            marginLeft: i * -100 + '%'
        });
        cnt2_paging.removeClass('show');
        cnt2_paging.eq(i).addClass('show');
        cnt2_btn_left.css({
            'opacity': '1',
            'cursor': 'pointer'
        });
    }     
    
    function window_scroll(){
        if (flag == true){
            if ($(this).scrollTop() >= 3049){
                $('.bnr02 .headerBar').css({
                    width: 'calc(100% / 12 * 5)'
                });            
                bnr2_countNum.each(function(a){
                    $({per:0}).animate({per:$(this).attr('data-num')},{
                        duration: 3000,
                        progress: function(){
                            bnr2_countNum.eq(a).text(parseInt(this.per));
                        }
                    });
                });
                flag = false;
            }
        }
    }    
    
    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });
    
    cnt2_tab.click(cnt2_tab_click);

    cnt1_btn.eq(0).click(cnt1_btn_leftBtn);

    cnt1_btn.eq(1).click(cnt1_btn_playStop);

    cnt1_btn.eq(2).click(cnt1_btn_rightBtn);

    cnt2_btn_left.click(cnt2_btn_leftBtn);

    cnt2_btn_right.click(cnt2_btn_rightBtn);

    $(window).scroll(window_scroll);

});