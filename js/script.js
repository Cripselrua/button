"use strict"
$(function(){
  $("#tab_1") .load ("../vip/vip.html"); 
});
 
 $(function(){
    $("#tab_2") .load ("../apartment/apartment_sell.html"); 
  });
  
  $(function(){
    $("#tab_3") .load ("../apartment/apartment_buy.html"); 
  });
 
  $(function(){
    $("#tab_4") .load ("../apartment/apartment_rent.html"); 
  });


  

  
     	


// ================ слик-слайдер ========================
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots: true,
		infinite: false,
		autoplay: false,
		slidesToShow:7,
		slidesToScroll: 3,
		
		
		
		speed:1000,
		responsive:[
			{
				breakpoint: 938,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 648,
				settings: {
					arrows:false,
					slidesToShow:4,
				}
			}
		]
	});
});

