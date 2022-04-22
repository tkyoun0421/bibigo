$(function(){
    // 변수
    var cnt2_btn = $('.artBtm>.btn>i')
    var tab = $('.artTop>.tab>li');
    var cnt2_artGroup = $('.artBtm>.artView>.artGroup');
    var ind = 0;
    var gnbBtn = $('.gnb .topBtn');
    var sildeCurrent = $('.sildeCurrent');
    var clickNow = $('.now');
    var cnt1_btn = $('.slideSwitch>.btn>i');
    var cnt1_artGroup = $('.cnt01>section>.artView>.artGroup');
    var auto= setInterval(autoSlide , 1800);
    var i = 0;    
    // 기초 세팅
    cnt1_artGroup.find('article:last').appendTo(cnt1_artGroup);
    cnt1_artGroup.css({marginLeft: '-33%'});
    cnt2_artGroup.css({
        marginLeft: '-100%'
    });
    cnt1_artGroup.find('article:eq(2)>.image').css({
        'transform' : 'scale(1.15)'
    });

    $(window).blur(function(){
        $(window).finish();
    });

    $(window).focus(function(){
    });
    
    

    cnt1_btn.eq(1).click(function(){
        if(cnt1_btn.hasClass('xi-play') === true){
            cnt1_btn.eq(1).removeClass('xi-play');
            cnt1_btn.eq(1).addClass('xi-pause');
            auto = setInterval(autoSlide , 1800);
        }else{
            cnt1_btn.eq(1).addClass('xi-play');
            cnt1_btn.eq(1).removeClass('xi-pause');
            clearInterval(auto);
        }
    });
    cnt1_btn.eq(0).click(function(){
        cnt1_artGroup.stop().animate({
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
        });
        ind = cnt1_artGroup.find('article:eq(4)').attr('data-num');
        console.log(ind);
        sildeCurrent.css({
            width: ind * 16.68 + '%'
        });        
        cnt1_btn.eq(1).removeClass('xi-pause');
        cnt1_btn.eq(1).addClass('xi-play');
        clearInterval(auto);
    });

    cnt1_btn.eq(2).click(function(){
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
        });
        clearInterval(auto);
        ind = cnt1_artGroup.find('article:first').attr('data-num');
        sildeCurrent.css({
            width: ind * 16.68 + '%'
        });        
        cnt1_btn.eq(1).removeClass('xi-pause');
        cnt1_btn.eq(1).addClass('xi-play');
        
    });

    function autoSlide(){
        ind = cnt1_artGroup.find('article:first').attr('data-num');
        sildeCurrent.css({
            width: ind * 16.68 + '%'
        });  
        cnt1_artGroup.animate({
            marginLeft: '-66%',          
        },1000,function(){
            cnt1_artGroup.find('article:first').appendTo(cnt1_artGroup);
            cnt1_artGroup.css({marginLeft: '-33%'});        
            cnt1_artGroup.find('article>.image').css({
                'transform' : 'scale(1.00)'
            });    
            cnt1_artGroup.find('article:eq(2)>.image').css({
                'transform' : 'scale(1.15)'
            });
        });       
    }
    function cnt02_Left(){
        cnt2_artGroup.animate({
            marginLeft: '0%'
        },1000,function(){
            cnt2_artGroup.find('article:last').prependTo(cnt2_artGroup);
            cnt2_artGroup.css({marginLeft: '-100%'});
        });
        ind = cnt2_artGroup.find('article:eq(0)').attr('data-num');
        tab.removeClass('now');
        tab.eq(ind).addClass('now');
        cnt2_btn.css({
            'pointer-events': 'none',
            'opacity': '0.4'
        });
        tab.css({
            'pointer-events': 'none'
        });
        setTimeout(function(){
            cnt2_btn.css({
                'pointer-events': 'auto',
                'opacity': '1'
            });
            tab.css({
                'pointer-events': 'auto'
            });
        },1000);
    };

    function cnt02_Right(){
        cnt2_artGroup.animate({
            marginLeft: '-200%'
        },1000,function(){
            cnt2_artGroup.find('article:first').appendTo(cnt2_artGroup);
            cnt2_artGroup.css({marginLeft: '-100%'});
        });
        ind = cnt2_artGroup.find('article:eq(2)').attr('data-num');
        tab.removeClass('now');
        tab.eq(ind).addClass('now');
        cnt2_btn.css({
            'pointer-events': 'none',
            'opacity': '0.4'
        });
        tab.css({
            'pointer-events': 'none'
        });
        setTimeout(function(){
            cnt2_btn.css({
                'pointer-events': 'auto',
                'opacity': '1'
            });
            tab.css({
                'pointer-events': 'auto'
            });
        },1000); 
    };

    function cnt02_leftSlide(lastMotion){
        cnt2_artGroup.animate({
            marginLeft: '0%'
        },1000,function(){
            cnt2_artGroup.find('article:last').prependTo(cnt2_artGroup);
            cnt2_artGroup.css({marginLeft: '-100%'});
            if (lastMotion) {
                setTimeout(function(){
                    tab.css({
                        'pointer-events': 'auto',
                    });
                    cnt2_btn.css({
                        'pointer-events': 'auto',
                        'opacity': '1'
                    });
                },300);
            }
        });
    }

    function cnt02_rightSlide(lastMotion){
        cnt2_artGroup.animate({
            marginLeft: '-200%'
        },1000,function(){
            cnt2_artGroup.find('article:first').appendTo(cnt2_artGroup);
            cnt2_artGroup.css({marginLeft: '-100%'});
            if (lastMotion) {
                setTimeout(function(){
                    cnt2_btn.css({
                        'pointer-events': 'auto',
                        'opacity': '1'
                    });
                    tab.css({
                        'pointer-events': 'auto',
                    });          
                },300);
            }
        });
    }
    

    tab.click(function(){
        tab.removeClass('now');
        $(this).addClass('now');
        var now = $(this).index();
        var click = $('.now').index();
        ind = cnt2_artGroup.find('article:eq(1)').attr('data-num');
        console.log(ind);
        console.log(click);
        cnt2_btn.css({
            'pointer-events': 'none',
            'opacity': '0.4'
        });
        tab.css({
            'pointer-events': 'none'
        });
        if (ind < now) {
            for ( var i = ind; i < now; i++){
                cnt02_rightSlide(Number(i+1) >= Number(now));             
            }
        }else{
            for ( var i = now; i < ind; i++){
                cnt02_leftSlide(Number(i+1) == Number(ind));
            }
        }        
        if( ind == click){
            tab.css({
                'pointer-events': 'auto'
            });
            cnt2_btn.css({
                'pointer-events': 'auto',
                'opacity': '1'
            });
        }
    });


    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });

    cnt2_btn.eq(0).click(cnt02_Left);
    cnt2_btn.eq(1).click(cnt02_Right);

});