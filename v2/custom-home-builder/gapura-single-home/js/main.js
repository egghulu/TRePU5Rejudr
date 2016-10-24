(function($) {

    'use strict'; 

    new WOW().init();
    
        /*-----------------------------------------------------------------------------------*/
        /*  Animsition
        /*-----------------------------------------------------------------------------------*/

        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: 'a:not([target="_blank"]):not([href^=#], [class^="image-link"])',
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            unSupportCss: ['animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            overlay: false,

            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body'
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Header
        /*-----------------------------------------------------------------------------------*/
        $(window).scrollTop();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 20) {
                    $('.site-header').addClass("fixedwrap");
                } else {
                    $('.site-header').removeClass("fixedwrap");
                }
        }); 

        /*-----------------------------------------------------------------------------------*/
        /*  Menu Mobile
        /*-----------------------------------------------------------------------------------*/

        var slideRight = new Menu({
            wrapper: '#main-wrapper',
            type: 'slide-right',
            menuOpenerClass: '.slide-button',
            maskId: '#slide-overlay'
        });

        var slideRightBtn = document.querySelector('#slide-buttons');
      
        slideRightBtn.addEventListener('click', function(e) {
            e.preventDefault;
            slideRight.open();
        });


        /*-----------------------------------------------------------------------------------*/
        /*  Slider Home Fullscreen
        /*-----------------------------------------------------------------------------------*/
        $('.fullscreen .flexslider').flexslider({
            animation: "fade",
            directionNav: "false",
            controlNav: "thumbnails"
        });
        
        var windowHeight;
        var windowWidth;

        windowHeight = $(window).height();
        windowWidth = $(window).width();

        $(".flexslider-wrap .slides").each(function() {
            var h = $(this).height();
            var w = $(this).width();
            var ratA = w / h;
            var ratI = windowWidth / windowHeight;
            if (ratA > ratI) {
                var r = w / h;
                $(this).css('height', windowHeight);
                $(this).css('width', windowHeight * r);
                var m = ((windowHeight * r) - windowWidth) / 2;
                $(this).css('margin-left', -m);
                $(this).attr("rat", 1);
                $(this).attr("mar", m);
            } else {
                var r = h / w;
                $(this).css('width', windowWidth);
                $(this).css('height', windowWidth * r);
                var m = ((windowWidth * r) - windowHeight) / 2;
                $(this).css('margin-top', -m);
                $(this).attr("rat", 0);
                $(this).attr("mar", m);
            }
        });

        var windowHeight;
        var windowWidth;

        windowHeight = $(window).height();
        windowWidth = $(window).width();

        $(".fullscreen").css('height', windowHeight);

        $('.flexslider-wrap .slides li').css('height', window.innerHeight - 0);

        /*-----------------------------------------------------------------------------------*/
        /*  Vertical Center
        /*-----------------------------------------------------------------------------------*/

        var verticalCenterHeight = function() {
            var screenHeight = $(window).height();
                $(".vertical-center").each(function() {
                $(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
            });
        }

        window.onload = verticalCenterHeight;
        window.onresize = verticalCenterHeight;

        /*-----------------------------------------------------------------------------------*/
        /*  Room Detail Slider
        /*-----------------------------------------------------------------------------------*/

        $('.room-slider .flexslider').flexslider({
            animation: "fade",
            directionNav: "true",
            controlNav: "true"
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Placeholder
        /*-----------------------------------------------------------------------------------*/

        $('input, textarea').placeholder();
        
        /*-----------------------------------------------------------------------------------*/
        /*  Date Picker
        /*-----------------------------------------------------------------------------------*/

        $(function() {
            $('#datepicker').datepicker();
        });

})(jQuery); 