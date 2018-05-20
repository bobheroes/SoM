$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
		items:1,
        singleItem: true,
        autoplay:true,
        autoplaySpeed: 2000,
        autoplayTimeout: 10000,
    });  
  });

  $("nav li:nth-child(3)").click(function(){
    if($(window).width() <= '768'){
           $(this).closest('ul').find('li').not(this).slideToggle();
    }
})
