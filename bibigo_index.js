$(function(){
    // 변수
    var i = 0;
    var ind = 0;
    var gnbBtn = $('.gnb .topBtn');
    var sildeCurrent = $('.sildeCurrent');
    var cnt1_btn = $('.slideSwitch>.btn>i');
    var cnt1_artGroup = $('.cnt01>section>.artView>.artGroup');
    var auto= setInterval(autoSlide , 1800);
    var cnt2_btn_left = $('.cnt02 .pageBtn>i.left');
    var cnt2_btn_right = $('.cnt02 .pageBtn>i.right');
    var cnt2_artGroup = $('.cnt02 .artGroup');
    var cnt2_paging = $('.cnt02 .artBtm>.paging>li');
    var cnt2_tab = $('.cnt02 .tab>li');
    var bnr2_countNum = $('.bnr02 .countNum>h4');
    var bnr2_Wrap = $('.bnrWrap02');
    var num = 0;
    
    // 기초 세팅   

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
                'transform' : 'scale(1.05)'
            });
        });       
    }

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
        
    cnt2_btn_left.click(function(){
        i--;
        if(i <= 0){
            i = 0
            cnt2_btn_left.css({'opacity': '0'});
        }
        cnt2_artGroup.css({
            marginLeft: i * -100 + '%'
        });
        cnt2_btn_right.css({'opacity': '1'});
        cnt2_paging.removeClass('show');
        cnt2_paging.eq(i).addClass('show');
    });

    cnt2_btn_right.click(function(){
        i++;
        if(i >= 2){
            i = 2
            cnt2_btn_right.css({'opacity': '0'});
        }        
        cnt2_artGroup.css({
            marginLeft: i * -100 + '%'
        });
        console.log(i);
        console.log(cnt2_paging);
        cnt2_paging.removeClass('show');
        cnt2_paging.eq(i).addClass('show');
        cnt2_btn_left.css({'opacity': '1'});
    });

    cnt2_tab.click(function(){
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
        cnt2_btn_right.css({'opacity' : 1});
        cnt2_btn_left.css({'opacity' : 0});
    });
    // 여기 고쳐야함 05.02
    bnr2_Wrap.mouseenter(function(){
        num = bnr2_countNum.text();
        bnr2_countNum.each(function(a){
            $({per:0}).animate({per:num},{
                duration: 3000,
                progress: function(){
                    bnr2_countNum.eq(a).text(parseInt(this.per));
                }
            });
        });
    });






   
    

   


    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });


});