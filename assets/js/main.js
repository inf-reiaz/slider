(function ($) {
	"use strict";

 var revapi;
 
    jQuery(document).ready(function($){

	   revapi = jQuery('.tp-banner').revolution(

		{
            dottedOverlay:"threexthree",					
            delay:9000,
            startwidth:1170,
            startheight:600,
            hideThumbs:10,
            onHoverStop: 'off',

		});


        $('.shopping_cart').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	