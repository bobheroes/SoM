$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
		items:1,
        singleItem: true,
        autoplay:true,
        autoplaySpeed: 2000,
        autoplayTimeout: 10000,
        autoHeight: true,
    }); 
    
    $(window).resize(function() {
        $("nav li").attr('style', "");
      });

      
$( ".plot button" ).click(function(){
    $(".plot p:gt(2)").slideToggle();
    ($(this).text() == "Подробнее") ? $(this).text("Скрыть") : $(this).text("Подробнее") ;
})

$(".fake-label input[type='checkbox']").click(function(){
    $('button[type="submit"]').prop('disabled', function(i, v) { return !v; });
})

$("nav li:nth-child(3)").click(function(){
    if($(window).width() <= '767'){
           $(this).closest('ul').find('li').not(this).slideToggle();
    }
})
});
