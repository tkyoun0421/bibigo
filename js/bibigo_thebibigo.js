$(function(){
    // 변수
    var flag = true;
    var ind = 0;
    var cnt1_text = $('.cnt1 .texts');
    var gnbBtn = $('.gnb .topBtn');
    var cnt2_tabLi = $('.cnt2 .tab li');
    var cnt2_artGroup = $('.cnt2 .artGroup');
    var cnt2_slideBtn = $('.cnt2 .slideBtn i');
    var cnt2_backgroundEffect = $('.cnt2 .backgroundEffect');
    var cnt2_artView = $('.cnt2 .artView');
    
    // 기본세팅
    cnt2_artGroup.css({
        marginLeft: '-33%'
    });
    cnt2_artGroup.each(function(a){
        cnt2_artGroup.eq(a).find('article:last').prependTo(cnt2_artGroup.eq(a));
    });
    cnt2_slideBtn.eq(0).click(function(){  
        if ( flag == true ) {
            flag =! true;
            cnt2_artGroup.animate({
                marginLeft: '0%',
            },500,function(){
                cnt2_artGroup.css({
                    marginLeft: '-33%'
                });
                cnt2_artGroup.eq(0).find('article:last').prependTo(cnt2_artGroup.eq(0));
                cnt2_artGroup.eq(1).find('article:last').prependTo(cnt2_artGroup.eq(1));
                cnt2_artGroup.eq(2).find('article:last').prependTo(cnt2_artGroup.eq(2));
            });
            cnt2_artGroup.find('article:eq(0)').css({
                transform: 'scale(1.15) translateY(min(40px,4em))',
                transition: 'transform .5s'
            });
            cnt2_artGroup.find('article:eq(1)').css({
                transform: 'scale(1)',
                transition: 'transform .5s',
                transform: 'translateY(0px)'
            });
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
    });
    cnt2_slideBtn.eq(1).click(function(){
        if (flag == true) {
            flag =! true;
            cnt2_artGroup.animate({
                marginLeft: '-66%',
            },500,function(){
                cnt2_artGroup.css({
                    marginLeft: '-33%'
                });
                cnt2_artGroup.eq(0).find('article:eq(0)').appendTo(cnt2_artGroup.eq(0));
                cnt2_artGroup.eq(1).find('article:first').appendTo(cnt2_artGroup.eq(1));
                cnt2_artGroup.eq(2).find('article:first').appendTo(cnt2_artGroup.eq(2));
            });
            // cnt2_artGroup.eq(0).find('article:eq(3)').css({
            //     transform: 'scale(1.15) translateY(min(4em,40px))',
            //     transition: 'all .5s'
            // });
            // cnt2_artGroup.eq(0).find('article:eq(2)').css({
            //     transform: 'scale(1)',
            //     transition: 'all .5s',
            //     transform: 'translateY(0px)'
            // });
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
        console.log(ind);
        if (ind == 1){
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

    
    
    
    
    gnbBtn.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },1000);
    });

    
});