$(document).ready(function(){"use strict";$(window).width()<=990&&$(".nav .icon-nav, .nav ul li a ").click(function(){$(".nav-links").animate({height:"toggle"})});var n=1;$(".nav .icon-nav , .nav ul li a").click(function(){++n%2==0?($(".nav .icon-nav .inSecond").css({transform:"rotateY(90deg)"}),$(".nav .icon-nav .inFerst").css({marginBottom:"-9px",transform:"rotate(-45deg)"}),$(".nav .icon-nav .inThird").css({marginTop:"-9px",transform:"rotate(45deg)"})):($(".nav .icon-nav .inSecond").css({transform:"rotateY(0deg)"}),$(".nav .icon-nav .inFerst").css({margin:"6px 0",transform:"rotate(0deg)"}),$(".nav .icon-nav .inThird").css({margin:"6px 0",transform:"rotate(0deg)"}))}),$(window).on("scroll",function(){0==$(window).scrollTop()&&$(window).width()<990?($(".nav").css({height:"70px"}),$(".nav .nav-links").css({top:"70px"})):($(".nav").css({height:"60px"}),$(".nav .nav-links").css({top:"60px"}))}),$(window).on("scroll",function(){0==$(window).scrollTop()&&$(window).width()>990?$(".nav").css({paddingTop:"40px",paddingBottom:"250px",background:"transparent",height:"70px"}):$(".nav").css({paddingTop:"10px",paddingBottom:"0px",background:"#4e2ea9",height:"60px !important"})});var o=0;$(".moreButton").click(function(){$(".more").slideToggle(),++o%2==0?$(".team .content button i").css({transform:"rotate(0deg)"}):$(".team .content button i").css({transform:"rotate(135deg)"})}),$(".nav ul li a ").click(function(n){n.preventDefault(),$("html ,body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top},2e3)}),$(" .feat button, .header button  ").click(function(n){n.preventDefault(),$("html ,body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top},2e3)}),$(window).on("scroll",function(){$(window).scrollTop()>900?$(".scrollToTop").fadeIn(1e3):$(".scrollToTop").fadeOut(1e3)}),$(".scrollToTop").click(function(){$("html,body").animate({scrollTop:"0"},2e3)}),$(window).on("load",function(){$(".loading .overlay .spinner").fadeOut(1e3,function(){$(this).parent().fadeOut(1500)})})});

            wow = new WOW(
                  {
                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       150,          // default
                  mobile:       true,       // default
                  live:         true        // default
                }
                )
            new WOW().init();
            
        
