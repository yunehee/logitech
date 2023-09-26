$(document).ready(function() {
    if(navigator.maxTouchPoints >= 1) {
        location.replace('http://yunee729.dothome.co.kr/logitech/m_product.html')
    }

    let cate_no = get_url_info("cate_no");
    let array_no = get_url_info("array_no");

    load_product_items(array_no, cate_no,array_item_list[array_no][cate_no].length);
    load_product_banner_bg(array_no);


    $('.product_banner_txt').css({
        opacity: 1,
        left: 0
    });
    
});