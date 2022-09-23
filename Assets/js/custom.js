

$(window).on('scroll load',function()
{



if($(window).scrollTop() > 80)
{
$('.header-2').addClass('active-class');
}
else 
{
    $('.header-2').removeClass('active-class');
}
});

$('.home-slider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
   
});



$('section').each(function(){

    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let top = $(window).scrollTop();
    let id = $(this).attr('id');

    if(top >= offset && top < offset + height){
        $('.header2-menu ul li a').removeClass('active');
        $('.header2-menu').find(`[href="#${id}"]`).addClass('active');
    }

});

