(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".client-testimonial-carousel").owlCarousel({

        	item:3,
        	margin:30,
        	nav:false,
        	dots:true,
        	loop:true
        });


        $(".product-list").masonry();
        $(".homepage-slides").owlCarousel({

            items:1,
            loop:true,
            autoplay:true,
            dots:false,
            nav:true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });       
         $(".product-promotion").owlCarousel({

            items:1,
            loop:true,
            autoplay:true,
            dots:true,
            nav:false
            
        });
         $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
            return false;
         });
          $(".menu-close,.off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
            
         });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	