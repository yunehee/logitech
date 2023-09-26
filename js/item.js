$(document).ready(function(){
    let array_no = get_url_info("array_no");
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no") - 1;

    if(navigator.maxTouchPoints >= 1) {
        location.replace(`http://yunee729.dothome.co.kr/logitech/m_item.html?array_no=${array_no}&cate_no=${cate_no}&item_no=${item_no + 1}`)
    }

    load_items(array_no, cate_no, item_no);


    let tmp = array_item_list[array_no][cate_no][item_no];

    if(tmp.color_name[0] == undefined) {
        $('.item_option').css({display: 'none'})
    }

    $('.color_name').text(`${tmp.color_name[0] == undefined?"":tmp.color_name[0]}`);

    $('.item_color').click(function() {
        $('.color_name').text(`${tmp.color_name[$(this).index()]}`)
        $('.item_img_box > img').attr('src', `img/items/${menu_array[array_no]}/${array_list[array_no][cate_no]}/${tmp.src[$(this).index()]}`)
    });


    //////////////////////
    // $('.color_name').text(`${array_item_list[array_no][cate_no][item_no].color_name[0]}`)


    // $('.item_color').click(function() {
    //     $('.color_name').text(`${array_item_list[array_no][cate_no][item_no].color_name[$(this).index()]}`)
    //     $('.item_img_box > img').attr('src', `img/items/${menu_array[array_no]}/${array_list[array_no][cate_no]}/${array_item_list[array_no][cate_no][item_no].src[$(this).index()]}`)
    // })


    $(document).on('click', '.btn_section > a', function() {
        event.preventDefault();

        let href = $(this).attr('href');
        let item_sec_o_top = $(href).offset().top;


        let time = 0;
        if($(window).innerWidth() > 480) {
            time = 0;
        }
        else if($(window).innerWidth() <= 480) {
            time = 500;
        }

        $('html').animate({
            scrollTop: item_sec_o_top
        }, time);
    })
});