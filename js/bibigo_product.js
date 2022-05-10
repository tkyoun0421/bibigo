$(function(){
    // 변수
    var cnt1_artGroup = $('.cnt1 .artGroup');
    var cnt1_article = $('.cnt1 article');
    var cnt1_paging = $('.cnt1 .paging>li');
    var cnt3_btn = $('.cnt3 .btn');
    var cnt3_artBtm = $('.cnt3 section .artBtm');
    var i = 0;
    var ind = 0;
    var flag = true;

    // 기본 세팅
    cnt1_artGroup.css({
        marginLeft: '-100%'
    });
    cnt1_artGroup.find('article:last').prependTo(cnt1_artGroup);

    // 함수
    cnt1_article.swipeleft(function(){
        ind = $(this).attr('data-num');
        if (flag == true){
            flag =! true;
            cnt1_artGroup.css({
                'pointer-events': 'none'
            });
            cnt1_artGroup.animate({
                marginLeft: '-200%'
            },500,function(){
                cnt1_artGroup.find('article:eq(0)').appendTo(cnt1_artGroup);
                cnt1_artGroup.css({
                    marginLeft : '-100%',
                    'pointer-events': 'auto'
                });
                flag =! false;
                i++;
            });  
        }              
        cnt1_paging.removeClass('show');
        cnt1_paging.eq(ind).addClass('show');
    });
    cnt1_article.swiperight(function(){
        ind = $(this).attr('data-num');
        if (flag == true){
            flag =! true;
            cnt1_artGroup.css({
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
                flag =! false;
            });   
        }    
        cnt1_paging.removeClass('show');
        cnt1_paging.eq(ind-2).addClass('show');
    });

    cnt3_btn.click(function(){
        if (flag == true) {
            cnt3_artBtm.css({
                overflow: 'auto',
                height: 'auto'
            });
            cnt3_btn.html('접기-');
            flag =! true;
        } else {
            cnt3_btn.html('더보기+');
            cnt3_artBtm.css({
                overflow: 'hidden',
                height: '0'
            });
            flag =! false;
        }
    });
});