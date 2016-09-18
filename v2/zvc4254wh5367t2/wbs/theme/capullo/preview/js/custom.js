$(document).ready(function() {

"use strict";


/* =================================
   NAVBAR COLLAPSE ON SCROLL
=================================== */
$(window).on('scroll', function(){
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("top-nav-collapse");
    } else {
        $(".navbar").removeClass("top-nav-collapse");
    }
});


/* =================================
   NAVBAR WITH TOP BAR
=================================== */
$('.nav-2').affix({
      offset: {
        top: $('.top-bar').height()
      }
});


/* ===========================================================
   PAGE SCROLLING FEATURE
============================================================== */
$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


/* ===========================================================
    WOW ANIMATIONS                   
============================================================== */
new WOW().init();


/* ===========================================================
   HIDE MOBILE MENU AFTER CLICKING 
============================================================== */
$(window).on('click',function() {
    $('.collapse').collapse('hide');
});


/* ===========================================================
   VIDEO BACKGROUND
============================================================== */
$('.video-play').vide("images/video/video", {
    posterType: "jpg"
});


/* ===========================================================
   MAGNIFIC POPUP
============================================================== */
$('.mp-singleimg').magnificPopup({
    type: 'image'
});

$('.mp-gallery').magnificPopup({
    type: 'image',
    gallery:{enabled:true},
});

$('.mp-iframe').magnificPopup({
    type: 'iframe'
});


/* ===========================================================
   FUNFACTS COUNTER
============================================================== */
if( $('.counter').length ) {
    var o = $('.counter'),
    cc = 1;

    $(window).on('scroll', function() {
        var elemPos = o.offset().top,
        elemPosBottom = o.offset().top + o.height(),
        winHeight = $(window).height(),
        scrollToElem = elemPos - winHeight,
        winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
            if(elemPosBottom > winScrollTop){
                if (cc < 2){
                    cc = cc + 2;
                    o.countTo();                    
                }
            }
        }
    });
}


/* ===========================================================
   OWL CAROUSEL
============================================================== */
if( $(".owl-carousel-screenshots").length ) {
    $(".owl-carousel-screenshots").owlCarousel({
        autoPlay: 5000,
        loop: true,
        items : 6,
        itemsDesktop : [1200,6],
        itemsDesktopSmall : [900,6],
        itemsTablet: [600,4],
        itemsMobile : [400,2]
    });
}

if( $("#owl-carousel-dashboard").length ) {
    $("#owl-carousel-dashboard").owlCarousel({
        autoPlay: 5000,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        transitionStyle : "fade"
    });
}

if( $("#owl-testimonial-single").length ) {
    $("#owl-testimonial-single").owlCarousel({
        autoPlay: 5000,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        transitionStyle : "fade"     
    }); 
}

if( $("#owl-team").length ) {
    $("#owl-team").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
}

if( $("#owl-partners-3").length ) {
    $("#owl-partners-3").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
}

if( $("#owl-partners-4").length ) {
    $("#owl-partners-4").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3]
    }); 
}


/* ===========================================================
   FEATURES TAB
============================================================== */
$('.features-tab .tab-title').on('click', function(e) {
    if (!$(this).hasClass('current')) {
        $('.tab-title').removeClass('out');
        $('.tab-title.current').addClass('out');
        $('.features-tab .tab-title').removeClass('current');
        $(this).addClass('current');
    }
    e.preventDefault();
});


/* ===========================================================
   COUNTDOWN TIMER
============================================================== */
if( $('.countdown').length ) {
    $(".countdown").jCounter({
        date: "16 december 2016 9:00:00", // Deadline date
        timezone: "Europe/London",
        format: "dd:hh:mm:ss",
        twoDigits: 'on',
        serverDateSource: "http://capullo-backend-api.herokuapp.com/dateandtime/",
        fallback: function() {console.log("Count finished!")}
    });
}


/* ===========================================================
   MAILCHIMP
============================================================== */
if( $('#mailchimp-form').length ) {
    $("#mailchimp-form").formchimp(); 
}


/* ==========================================
   FUNCTION FOR EMAIL ADDRESS VALIDATION
============================================= */
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}


/* ==========================================
   CALLBACK FORM
============================================= */
$("#callbackForm").on('submit', function(e) {
    e.preventDefault();
    var data = {
        name: $("#cbName").val(),
        email: $("#cbEmail").val(),
        phone: $("#cbPhone").val()
    };

    if ( isValidEmail(data['email']) && (data['name'].length > 1) && isValidPhoneNumber(data['phone']) ) {
        $.ajax({
            type: "POST",
            url: "php/callback.php",
            data: data,
            success: function() {
                $('.success.cb').delay(500).fadeIn(1000);
                $('.failed.cb').fadeOut(500);
            }
        });
    } else {
        $('.failed.cb').delay(500).fadeIn(1000);
        $('.success.cb').fadeOut(500);
    }

    return false;
});


/* ==========================================
   DATEPICKER
============================================= */
if( $("#dfDate").length ) {
    $('#dfDate').pickadate({
        min: new Date()
    });
}


/* ==========================================
   SUBSCRIBE FORM / ONLY EMAIL
============================================= */
$("#subscribeForm").on('submit', function(e) {
    e.preventDefault();
    var data = {
        email: $("#sfEmail").val()
    };
        
    if ( isValidEmail(data['email']) ) {
        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            data: data,
            success: function() {
                $('.success.sf').delay(500).fadeIn(1000);
                $('.failed.sf').fadeOut(500);
            }
        });
    } else {
        $('.failed.sf').delay(500).fadeIn(1000);
        $('.success.sf').fadeOut(500);
    }

    return false;
});

/* ===========================================================
   BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8  
============================================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
            )
        );
    document.querySelector('head').appendChild(msViewportStyle);
}



}); // End $(document).ready Function