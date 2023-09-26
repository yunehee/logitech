$(document).ready(function(){
    // gnb_bar
    $('.gnb_li').mouseenter(function() {
       $('.gnb_bar').css({
           display: 'block',
           width: $(this).outerWidth(),
           left: $(this).offset().left - $('.gnb_ul').offset().left
       })
    })

    let icon_search_chk = 0;

    $('.icon_search').click(function() {
        if(icon_search_chk == 1) {
            $('.search').css({
                display: 'none'
            })

            icon_search_chk = 0;
        }

        else if(icon_search_chk == 0) {
            $('.search').css({
                display: 'block'
            })

            icon_search_chk = 1;
        }
    });



    // 탑버튼
    $('.btn_top').click(function() {
        top_btn_init();
        $('html').animate({
            scrollTop: $('.header').offset().top
        }, 200, 'linear')
    })
    function top_btn_init() {
        $('.btn_top').css({PointerEvents: 'none'})
        setTimeout(() => {
            $('.btn_top').css({PointerEvents: 'auto'})
        }, 200)
    };
});