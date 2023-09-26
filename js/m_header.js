$(document).ready(function(){
    // 검색
    let icon_search_chk = 0;
    $('.icon_search').click(function() {
        if(icon_search_chk == 1) {
            $('.search').css({
                display: 'none'
            });

            icon_search_chk = 0;
        }

        else if(icon_search_chk == 0) {
            $('.search').css({
                display: 'block'
            });

            icon_search_chk = 1;
        }
    });

    // 햄버거 메뉴
    let ham_menu_chk = 0;
    $('.icon_ham').click(function() {
        if(ham_menu_chk == 0) {
            $('.ham_menu').css({
                left: 0
            });
            
            $('.icon_ham').css({
                background: 'url(img/icon/icon_close.png) no-repeat center / 35%'
            });

            ham_menu_chk = 1;
        }
        else if(ham_menu_chk == 1) {
            $('.ham_menu').css({
                left: '100%'
            });

            $('.icon_ham').css({
                background: 'url(img/icon/icon_ham.png) no-repeat center / 35%'
            });

            ham_menu_chk = 0;
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