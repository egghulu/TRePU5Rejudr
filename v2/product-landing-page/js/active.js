(function($){
    'use strict';

    $(document).ready(function(){
        var window_width = $(window).width();
        
		if($.fn.waypoint){
            
			$('.a_fu').css('opacity','0');
			$('.a_fu').waypoint(function () {
				$(this).addClass('fadeInUp');
				$('.a_fu.fadeInUp').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
            
			$('.a_fl').css('opacity','0');
			$('.a_fl').waypoint(function () {
				$(this).addClass('fadeInLeft');
				$('.a_fl.fadeInLeft').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
            
			$('.a_fr').css('opacity','0');
			$('.a_fr').waypoint(function () {
				$(this).addClass('fadeInRight');
				$('.a_fr.fadeInRight').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
            
            $('.a_sl').css('opacity','0');
			$('.a_sl').waypoint(function () {
				$(this).addClass('slideInLeft');
				$('.a_sl.slideInLeft').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
            
            $('.a_sr').css('opacity','0');
			$('.a_sr').waypoint(function () {
				$(this).addClass('slideInRight');
				$('.a_sr.slideInRight').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
            
            
		}
        

        var nav_a = $('.hero_area header nav#navbar ul.nav li > a');

        nav_a.each(function(){
            var nav_a_txt = $(this).text();
            $(this).attr('data-content', nav_a_txt);
        });


        if($.fn.countrySelect){
            $("#mce-COUNTRY").countrySelect();
        }

        $('.hero_area.v3 input').focus(function(){
            $('.home_form').addClass('active');
        });
        $('.hero_area.v3 input').focusout(function(){
            $('.home_form').removeClass('active');
        });

        $('.country-select').before().on('click',function(){
            // $('.country-list').toggleClass('hide');
        });

        $('span.dot').on('click',function(){
            $(this).closest('.single_feature').toggleClass('active');
        });
        $('span.dot').on('mouseenter',function(){
            $('span.dot').delay(1000).removeClass('active');
        });

        $('.layoutBg .singleBg').each(function(){
            var bgImg = $(this).find('img').attr('src');
            $(this).css('background-image','url(' + bgImg + ')');
            $(this).on( "click", function(){
                $('body').css('background-image','url(' + bgImg + ')')
            });
        });

        $('.layoutBtn .boxed').on( "click", function(){
            $('.mainWrap').addClass('active');
            $('.layoutBtn a').removeClass('active');
            $(this).addClass('active');
            $('.layout_bg_wrap').slideDown();
        });
        $('.layoutBtn .wide').on( "click", function(){
            $('.mainWrap').removeClass('active');
            $('.layoutBtn a').removeClass('active');
            $(this).addClass('active');
            $('.layout_bg_wrap').slideUp();
        });

        $('.stickyBtn .on').on( "click", function(){
            $('header').addClass('fixed_header');
            $('.stickyBtn a').removeClass('active');
            $(this).addClass('active');
        });
        $('.stickyBtn .off').on( "click", function(){
            $('header').removeClass('fixed_header');
            $('.stickyBtn a').removeClass('active');
            $(this).addClass('active');
        });
        $(".button_effect a.hvr-bounce-to-right").click(function(){
            $('.mainWrap .hvr-bounce-to-right, .mainWrap .hvr-sweep-to-right, .mainWrap .hvr-shutter-out-horizontal, .mainWrap .hvr-rectangle-out').removeClass('hvr-bounce-to-right hvr-sweep-to-right hvr-shutter-out-horizontal hvr-rectangle-out').addClass("hvr-bounce-to-right");
            $(".button_effect a").removeClass('two');
            $(this).addClass('two');
        });

        $(".button_effect a.hvr-sweep-to-right").click(function(){
            $('.mainWrap .hvr-bounce-to-right, .mainWrap .hvr-sweep-to-right, .mainWrap .hvr-shutter-out-horizontal, .mainWrap .hvr-rectangle-out').removeClass('hvr-bounce-to-right hvr-sweep-to-right hvr-shutter-out-horizontal hvr-rectangle-out').addClass("hvr-sweep-to-right");
            $(".button_effect a").removeClass('two');
            $(this).addClass('two');
        });

        $(".button_effect a.hvr-shutter-out-horizontal").click(function(){
            $('.mainWrap .hvr-bounce-to-right, .mainWrap .hvr-sweep-to-right, .mainWrap .hvr-shutter-out-horizontal, .mainWrap .hvr-rectangle-out').removeClass('hvr-bounce-to-right hvr-sweep-to-right hvr-shutter-out-horizontal hvr-rectangle-out').addClass("hvr-shutter-out-horizontal");
            $(".button_effect a").removeClass('two');
            $(this).addClass('two');
        });

        $(".button_effect a.hvr-rectangle-out").click(function(){
            $('.mainWrap .hvr-bounce-to-right, .mainWrap .hvr-sweep-to-right, .mainWrap .hvr-shutter-out-horizontal, .mainWrap .hvr-rectangle-out').removeClass('hvr-bounce-to-right hvr-sweep-to-right hvr-shutter-out-horizontal hvr-rectangle-out').addClass("hvr-rectangle-out");
            $(".button_effect a").removeClass('two');
            $(this).addClass('two');
        });

        $('.colorTheme .singleTheme').each(function(){
            var linkHref = $(this).find('span').text();
            $(this).on( "click", function(){
                $('.theme-link link').attr('href', linkHref);
                $('.colorTheme .singleTheme').removeClass('active');
                $(this).addClass('active');
            });
        });

        $('.styler .icon').on( "click", function(){
            $('.styler').toggleClass('active');
        });



        // submenu parent add class
        $('.dropdown-menu').each(function(){
            $(this).closest('li').addClass('dropdown');
        });
        if(window_width > 991){
            $('.dropdown').on('mouseenter', function(){
                $(this).addClass('open');
            });
            $('.dropdown').on('mouseleave', function(){
                $(this).removeClass('open');
            });
        }

            // mobileDropdown

            if(window_width < 992){
              $('ul.dropdown-menu').hide();
              $('ul.dropdown-menu').siblings('a').click(function(){
                $(this).siblings('.dropdown-menu').slideToggle();
                $(this).toggleClass('active');
              });
            }
            $('ul.dropdown-menu').siblings('a').addClass('drop-par');


            if($.fn.ajaxChimp){
                $('#mc_embed_signup').find('form').ajaxChimp();
            }


        if($.fn.onePageNav){
            $('nav ul').onePageNav({
                currentClass: 'current-menu-item',
                scrollSpeed: 750,
                easing: 'swing'
            });
        }

        $("a[href='#']").on('click',function(event){
            event.preventDefault();
        });

        if($.fn.owlCarousel){
            $('.tst_slider').owlCarousel({
                margin: 50,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 1000,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
            $('.featured_slider').owlCarousel({
                margin: 35,
                nav: false,
                dots: false,
                items: 6,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 6
                    }
                }
            });
        }

         $("a[data-rel^='prettyPhoto']").prettyPhoto();


        $('.single_step').on('mouseenter', function(){
            $('.single_step').removeClass('active');
            $(this).addClass('active');
        });

        $(window).on('scroll',function(){
            if($(window).scrollTop()>100){
                $('header').addClass('sticky');
            }
            else{
                $('header').removeClass('sticky');
            }
        });
        $('.preloader').fadeOut('slow').addClass('loaded');

        $('.singleTheme, .stickyBtn a,.btn_wrap a, .singleBg').on('click',function(){
            $('.preloader').fadeIn(0).delay(100).fadeOut('slow');
        });

    }); // document ready closed;

})(jQuery);
