$(document).ready(function(){
    if(navigator.maxTouchPoints >= 1) {
        location.replace('http://yunee729.dothome.co.kr/logitech/m_index.html')
    }


// 메인배너
    // 초기화
    $('.main_banner').eq(0).css({top: 0});

    // 인디케이터 만들기
    for(let i=0; i<$('.main_banner').length; i++) {
        $('.indi_box').append('<div class="indi"></div>')
    };
    $('.indi').eq(0).addClass('indi_active');


    // 슬라이드 함수 만들기
    function main_banner_slide(c_index, c_pos, o_index, o_pos) {
        // 들어오는 판
        $('.main_banner').eq(c_index).css({
            top: c_pos
        }).animate({
            top: 0
        }, 500)

        // 나가는 판
        $('.main_banner').eq(o_index).animate({
            top: o_pos
        }, 500)
    };

    $('.indi').click(function() {
        if($('.indi_active').index() < $(this).index()) {
            main_banner_slide($(this).index(), '100%', $('.indi_active').index(), '-100%')

            $('.indi').removeClass('indi_active');
            $(this).addClass('indi_active');

            mb_index = $(this).index() + 1;
        }
        else if($('.indi_active').index() > $(this).index()) {
            main_banner_slide($(this).index(), '-100%', $('.indi_active').index(), '100%')

            $('.indi').removeClass('indi_active');
            $(this).addClass('indi_active');

            mb_index = $(this).index() + 1;
        }
    });

    // 자동
    let main_banner_interval;
    let mb_index = 1;
    function main_banner_auto_slide() {
        main_banner_interval = setInterval(() => {
            main_banner_slide(mb_index % $('.main_banner').length, '100%', (mb_index - 1) % $('.main_banner').length, '-100%')

            $('.indi').removeClass('indi_active');
            $('.indi').eq(mb_index % $('.main_banner').length).addClass('indi_active');

            mb_index += 1;
        }, 500 + 2000);
    };
    main_banner_auto_slide();

    $('.main_banner_section').hover(function() {
        clearInterval(main_banner_interval);
    }, function() {
        main_banner_auto_slide();
    })


// 롱배너
    // 글자 올라오기
    let long_banner_o_top = $('.long_banner').offset().top;

    $(window).scroll(function() {
        let s_bot = $(window).scrollTop() + $(window).height() - 300;

        if(s_bot >= long_banner_o_top) {
            $('.long_banner_txt').css({
                transform: 'translateY(0)',
                opacity: 1
            })

            $('.long_banner > img').css({
                opacity: 1,
                transform: 'rotateY(0deg)'
            })
        }
        else {
            $('.long_banner_txt').css({
                transform: 'translateY(50%)',
                opacity: 0
            })

            $('.long_banner > img').css({
                opacity: 0,
                transform: 'rotateY(180deg)'
            })
        }
    })


// 서브배너
    // 초기화
    let sub_banner_count = $('.sub_banner').length;
    let sub_banner_width = $('.sub_banner').outerWidth();

    

    for(let i=0; i<sub_banner_count; i++) {
        $('.sub_banner').eq(i).css({
            left: ((sub_banner_width * i) - (sub_banner_width * 0.785))
        })

        $('.sub_banner_indi_box').append('<div class="sub_banner_indi"></div>');
    };

   $(window).resize(function() {
        let sub_banner_width = $('.sub_banner').outerWidth();
        
        for(let i=0; i<sub_banner_count; i++) {
            $('.sub_banner').eq(i).css({
                left: ((sub_banner_width * i) - (sub_banner_width * 0.785))
            })
        }
   });

    $('.sub_banner').eq(1).css({
        transform: 'scale(1.1)',
        zIndex: 9
    })
    $('.sub_banner_indi').eq(0).addClass('sub_banner_indi_active');


    // 버튼 막기
    function sub_banner_btn_init() {
        $('.sub_banner_btn_L, .sub_banner_btn_R').css({pointerEvents: 'none'});

        setTimeout(() => {
            $('.sub_banner_btn_L, .sub_banner_btn_R').css({pointerEvents: 'auto'})
        }, 500);
    };


    // 한칸씩 슬라이드
    let sub_banner_index = 0;
    $(document).on('click', '.sub_banner_btn_L', function() {
        sub_banner_btn_init();

        sub_banner_index -= 1;

        $('.sub_banner_indi').removeClass('sub_banner_indi_active');
        $('.sub_banner_indi').eq(sub_banner_index % sub_banner_count).addClass('sub_banner_indi_active');

        $('.sub_banner').eq(sub_banner_index % sub_banner_count).animate({
            left: -sub_banner_width - (sub_banner_width * 0.785)
        }, 0)


        // $('.sub_banner').eq((sub_banner_index + 1) % sub_banner_count).css({
        //     transform: 'scale(1)',
        //     zIndex: 9
        // })

        setTimeout(() => {
            $('.sub_banner').eq((sub_banner_index + 1) % sub_banner_count).css({
                transform: 'scale(1)',
                zIndex: 9
            })
        }, 500);

        $('.sub_banner').eq((sub_banner_index + 2) % sub_banner_count).css({
            transform: 'scale(0.9)',
            zIndex: 1
        })

        $('.sub_banner').animate({
            left: '+=' + sub_banner_width
        }, 500)

    });

    $(document).on('click', '.sub_banner_btn_R', function() {
        sub_banner_btn_init();

        $('.sub_banner').animate({
            left: '-=' + sub_banner_width
        }, 500)

        $('.sub_banner').eq(sub_banner_index % sub_banner_count).animate({
            left: (sub_banner_width * (sub_banner_count - 1)) - (sub_banner_width * 0.785)
        }, 0)

        $('.sub_banner').eq((sub_banner_index + 1) % sub_banner_count).css({
            transform: 'scale(0.9)',
            zIndex: 1
        })

        // $('.sub_banner').eq((sub_banner_index + 2) % sub_banner_count).css({
        //     transform: 'scale(1)',
        //     zIndex: 9
        // })

        setTimeout(() => {
            $('.sub_banner').eq((sub_banner_index + 1) % sub_banner_count).css({
                transform: 'scale(1)',
                zIndex: 9
            })
        }, 500);

        
        sub_banner_index += 1;

        $('.sub_banner_indi').removeClass('sub_banner_indi_active');
        $('.sub_banner_indi').eq(sub_banner_index % sub_banner_count).addClass('sub_banner_indi_active');

        

    });





// 마우스
    $('.mouse_item_box').eq(0).addClass('mouse_item_box_active');

    // 버튼 막기
    function mouse_btn_init() {
        $('.mouse_item_box').css({pointerEvents: 'none'});

        setTimeout(() => {
            $('.mouse_item_box').css({pointerEvents: 'auto'})
        }, 500);
    };

    $('.mouse_item_box').click(function() {
        mouse_btn_init();

        if($('.mouse_item_box_active').index() < $(this).index()) {
            $('.mouse_item_box_top_box').eq($(this).index()).css({
                left: '100%'
            }).animate({
                left: 0
            }, 500)

            $('.mouse_item_box_top_box').eq($('.mouse_item_box_active').index()).animate({
                left: '-100%'
            })

        }
        else if($('.mouse_item_box_active').index() > $(this).index()) {
            $('.mouse_item_box_top_box').eq($(this).index()).css({
                left: '-100%'
            }).animate({
                left: 0
            }, 500)

            $('.mouse_item_box_top_box').eq($('.mouse_item_box_active').index()).animate({
                left: '100%'
            })
        }


        $('.mouse_item_box').removeClass('mouse_item_box_active');
        $('.mouse_item_box').eq($(this).index()).addClass('mouse_item_box_active');

    })





});