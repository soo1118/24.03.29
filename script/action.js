

let navHtml = $('.nav_box').html()
$('.nav_box2').html(navHtml)


$('.nav_box2 .menu > li > a').click(function(){
    $('.submenu').slideUp()
    $(this).parent().find('.submenu').stop().slideToggle();
})

$('.hamburger').click(function(){
    $('body').toggleClass('on')
    $('.hamburger').toggleClass('on')
    $('.nav_box2').fadeToggle(200);
});

// $('.main_position_bar a').eq(0).click(function(){
//     let slideTop = $('#slide_box').offset().top; 
//     $('html').animate({scrollTop:slideTop});
// });
// $('.main_position_bar a').eq(1).click(function(){
//     let sec1Top = $('#section1').offset().top; 
//     $('html').animate({scrollTop:sec1Top});
// });
// $('.main_position_bar a').eq(2).click(function(){
//     let sec2Top = $('#section2').offset().top; 
//     $('html').animate({scrollTop:sec2Top});
// });
// $('.main_position_bar a').eq(3).click(function(){
//     let sec3Top = $('#section3').offset().top; 
//     $('html').animate({scrollTop:sec3Top});
// });


$('.main_position_bar a').click(function(){
    // let posiTop = $(this).index();
    // let secTop = $('#section_box > div').eq(posiTop).offset().top
    // console.log(posiTop)
    // $('html').animate({scrollTop: secTop });

    let aHref = $(this).attr('href');
    let aaHref = $(aHref).offset().top
    $('html').animate({scrollTop:aaHref})

    return false
});

/* 메인변수 */
let slideTop, sec1Top, sec2Top, sec3Top

/* 서브변수 */
// let tabTop = $('.tabmenu').offset().top

if($('#section_box').length > 0){
    slideTop = $('#slide_box').offset().top; 
    sec1Top = $('#section1').offset().top; 
    sec2Top = $('#section2').offset().top; 
    sec3Top = $('#section3').offset().top;
}

 

$(window).scroll(function(){
    let scrT = $(window).scrollTop();

    if(scrT >= slideTop - 50){
        $('.main_position_bar span').css({top:0})
    }
    if(scrT >= sec1Top - 50){
        $('.main_position_bar span').css({top:50})
    }
    if(scrT >= sec2Top - 50){
        $('.main_position_bar span').css({top:100})
        $('#section2 img.color').fadeIn(500)
    }
    else {
        $('#section2 img.color').fadeOut(500)
    }
    if(scrT >= sec3Top - 100 ){
        $('.main_position_bar span').css({top:150})
        $('#section3 img.color').fadeIn(500)
    }
    else {
        $('#section3 img.color').fadeOut(500)
    }

    /* top으로 가기 */
    let winH = $(window).height()

    if(scrT > winH){
        $('.go_top').css({opacity: 1, visibility: 'visible'})
    }
    else {
        $('.go_top').css({opacity: 0, visibility: 'hidden'})
    }
})

$('.go_top').click(function(){
    $('html').animate({scrollTop:0})
})



/* svg 반원 */
let total = 210
$('.real_circle').each(function(){
    let circleValue = $(this).attr('data-circleValue');
    let value = (circleValue / 100) * total;  

    $(this).find('.st3').css({strokeDashoffset:total - value})
})


$('.tabmenu li').click(function(){
    $(this).addClass('active').siblings().removeClass()

    let dataTab = $(this).attr('data-tab')
    $('.year_box .all').hide()
    $('.year_box .' +dataTab).show()

    return false
})