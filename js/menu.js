$(document).ready(function() {
    if(navigator.maxTouchPoints >= 1) {
        location.replace('http://yunee729.dothome.co.kr/logitech/m_menu.html')
    }

    let menu_list_width = $('.menu_list').width() / 2;
    let menu_list_height = $('.menu_list').height() / 2;

    $('.menu_list').mousemove(function() {
        let mouse_X = Math.max(-100, Math.min(100, event.clientX - menu_list_width));
        let mouse_Y = Math.max(-100, Math.min(100, event.clientY - menu_list_height));

        mouse_X /= 20;
        mouse_Y /= 10;
        

        $(this).find('.menu_list_bg').css({
            // transform: `translate(${mouse_X}%, calc(${mouse_Y}% - 50%))`
            transform: `translate(${mouse_X/5}%, ${mouse_Y/5}%)`
        })

    })

    $('.menu_list').mouseleave(function() {
        
        $(this).find('.menu_list_bg').css({
            // transform: `translate(0, -50%)`
            transform: `translate(0, 0)`
        })

    })


    $('.menu_list_title').css({
        transform: 'translate(0, -50%)',
        opacity: 1
    })
});