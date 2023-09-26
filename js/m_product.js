$(document).ready(function() { 
// $(window).load(function(){

    let cate_no = get_url_info("cate_no");
    let array_no = get_url_info("array_no");

    m_load_product_items(array_no, cate_no,array_item_list[array_no][cate_no].length);
    load_product_banner_bg(array_no);

    $('.product_banner_txt').css({
        opacity: 1,
        left: 0
    })
     
    
    // setTimeout(() => {
        

    if($(window).width() <= 800) {
        
        $('.contents_area2').css({
            background: 'none'
        })

        let lnb_li_width = 0;

        for(let i=0; i<$('.lnb_li').length; i++) {
            lnb_li_width += $('.lnb_li').eq(i).outerWidth() + 21;
            console.log($('.lnb_li').eq(i).outerWidth());
        }
        $('.lnb_ul').css({
            width: lnb_li_width
        })
    }
 
// }, 1000);

    $(window).resize(function() {
        if($(window).width() <= 800) {

            $('.contents_area2').css({
                background: 'none'
            })



            let lnb_li_width = 0;
    
            for(let i=0; i<$('.lnb_li').length; i++) {
                lnb_li_width += $('.lnb_li').eq(i).outerWidth() + 20;
            }
    
            $('.lnb_ul').css({
                width: lnb_li_width + 1
            })
        }
        else {
            load_product_banner_bg(array_no);

            $('.lnb_ul').css({
                width: '100%'
            })
        }
    })
    

    
});