$(window).on('load', function () {

    $('.backgrounds div').addClass('not-active');

    $('#preloader').delay(300).fadeOut(500);

    $('.main').css({
        opacity: 0
    }).delay(800).animate({
        opacity: 1
    }, 500);

});

$(document).ready(function (e) {
    'use strict';


    /* ***********************************************************
                            N A V I G A T I O N
       *********************************************************** */

    // sidebar toggling on small screens

    $('.sidebar-btn').on('click', function (e) {

        e.preventDefault();

        //do nothing if small screen nav is active

        if ($('.nav-container').hasClass('active')) {

            return false;

        }

        $('.mask.content-mask').fadeToggle(300);

        $('.sidebar-container').toggleClass('active');

    });

    //small navigation toggling

    $('.menu-btn').on('click', function (e) {

        e.preventDefault();

        $('.nav-container').fadeToggle(300).toggleClass('active');

    });

    //main navigation function

    $('.nav-container ul li a').on('click', function (e) {

        e.preventDefault();

        var $this = $(this),
            href = $this.attr('href'),
            sectionName = href.substring(1);

        //activation of active navigation button

        $('.nav-container ul li a').removeClass('active');

        $this.addClass('active');

        // if navigation source is small nav, hide it

        if ($('.nav-container').hasClass('active')) {

            $('.nav-container').fadeToggle(300).toggleClass('active');

        }

        if ($('.sidebar-container').hasClass('active')) {

            $('.sidebar-container').toggleClass('active');
            $('.mask.content-mask').fadeToggle(300);

        }

        // original navigation function 

        function navigation(name) {

            var sections = $('.section-wrap'),
                active,
                target;

            //determination of active and target sections

            sections.each(function (i, el) {

                if ($(this).hasClass('active')) {

                    active = $(this);

                }

                if ($(this).hasClass('section-' + name)) {

                    target = $(this);

                }

            });

            // if target is already active, do nothing

            if (target.hasClass('active')) {

                return false;

            }

            target.scrollTop(0);

            // actual section switching. animates opacity of active from 1 to 0. when animation completed, animate target opacity from 0 to 1 and move it sligtly from bottom to top then set target as active

            active.animate({

                opacity: 0

            }, {

                duration: 200,
                done: function () {

                    (target.find('.section')).css({

                        top: '20px'

                    }).animate({

                        top: 0

                    }, 300);

                    target.css({

                        opacity: 0,
                        visibility: 'visible'

                    }).animate({

                        opacity: 1

                    }, {

                        duration: 350,
                        done: function () {

                            active.removeClass('active').css({

                                opacity: ''

                            });
                            target.addClass('active').css({

                                visibility: ''

                            });

                        }

                    });

                }

            });

        }

        navigation(sectionName);

    });


    //hiding the scrollbar of content sections with a small trick

    $('.section-wrap').each(function (i, el) {

        var scrollbarWidth = el.offsetWidth - el.clientWidth,
            elementWidth = 'calc( 100% + ' + scrollbarWidth + 'px )';

        $(this).css('width', elementWidth);

    });

    /* ***********************************************************
                        B A C K G R O U N D   S L I D E R
       *********************************************************** */

    function bgSlider() {

        var slides = $('.slide'),
            activeSlide = $('.slide.active'),
            nextSlide = activeSlide.next();

        if (nextSlide.length === 0) {

            nextSlide = $('.slide:first-child');

        }

        nextSlide.css({
            top: '100%'
        }).removeClass('not-active').animate({
            top: 0
        }, 1000, function () {

            $(this).addClass('active');

        });

        activeSlide.animate({
            top: '-100%'
        }, 1000, function () {
            $(this).removeClass('active').addClass('not-active');
        });

    }
    
    setInterval(bgSlider, 5000);

    /* ***********************************************************
                            R E S P O N S I V E
       *********************************************************** */

    //DOM manipulation when switched form large to small screen

    function responsive() {

        if ($(window).width() < 992) {

            $('.sidebar-container').addClass('sidebar-sm');

        } else {

            $('.sidebar-container').removeClass('sidebar-sm');

        }

        //set height of each service item equal to highest secvice item

        function maximizeHeight() {

            var minHeight = 0;

            $('.single-service').each(function () {

                var maxHeight = $(this).height();

                if (maxHeight > minHeight) {
                    minHeight = maxHeight;
                }

            });

            $('.single-service').height(minHeight);
        }

        maximizeHeight();

    }

    responsive();

    //responsive() triggered whenever screen size changes

    $(window).on('resize', responsive);


    /* ***********************************************************
                            C O U N T D O W N
       *********************************************************** */


    $(function () {

        //set your time for countdown ( format : "16 November 2018 00:00:00" )

        var eventTime = "16 November 2018 00:00:00",
            countdownInterval;


        //actual countdown function works with some math

        function countdown() {

            var date = new Date(),
                event = Date.parse(eventTime) / 1000,
                current = Math.floor($.now() / 1000);

            if (event <= current) {

                $('#days').text('0');
                $('#hours').text('0');
                $('#minutes').text('0');
                $('#seconds').text('0');

                clearInterval(countdownInterval);

                return false;

            }

            var seconds = event - current,
                days,
                hours,
                minutes;

            if (isNaN(seconds)) {

                window.alert('Invalid countdown date. Example: 31 December 2013 15:50:00');

                clearInterval(countdownInterval);

                return false;

            }

            days = Math.floor(seconds / 86400);

            seconds -= days * 60 * 60 * 24;

            hours = Math.floor(seconds / 3600);

            seconds -= hours * 60 * 60;

            minutes = Math.floor(seconds / 60);

            seconds -= minutes * 60;

            $('#days').text(days);
            $('#hours').text(hours);
            $('#minutes').text(minutes);
            $('#seconds').text(seconds);

        }

        countdown();

        countdownInterval = setInterval(countdown, 1000);

    });


    /* ***********************************************************
                    G R A P H  A N I M A T I O N
       *********************************************************** */


    $(function () {

        //circle fill animation

        function circleFillAnimation(cvs, LW) {

            //radian to degree converter

            function radTodeg(degree) {

                var factor = Math.PI / 180;
                return degree * factor;

            }

            // animation maker

            $({

                value: -90

            }).animate({

                value: 280

            }, {

                duration: 700,
                step: function () {

                    var ctx = cvs.getContext('2d');

                    //background

                    ctx.fillStyle = '#000';
                    ctx.clearRect(0, 0, cvs.width, cvs.height);
                    ctx.strokeStyle = $('.colored').css('color');
                    ctx.lineWidth = LW;

                    //circle

                    ctx.beginPath();
                    ctx.arc(cvs.width / 2, cvs.height / 2, (cvs.width - LW * 2) / 2, radTodeg(-90), radTodeg(this.value), false);
                    ctx.stroke();

                }

            });

        }



        // numbers animation

        function numberAnimation(elm) {

            // elm = single DOM element with value to be animated

            var elmHTML = elm.innerHTML,
                finalValue = parseInt(elmHTML, 10);

            $({

                value: 0

            }).animate({

                value: finalValue

            }, {

                duration: 700,
                step: function () {

                    var thisValue = Math.round(this.value);

                    elm.innerHTML = thisValue + '%';

                },

                done: function () {

                    elm.innerHTML = elmHTML;

                }


            });

        }

        // this function triggers animation when about page is loaded

        function triggerAnimation() {

            $('.canvas').each(function (i, el) {

                circleFillAnimation(el, 3);

            });

            $('.skill-graph-value').each(function (i, el) {

                numberAnimation(el);

            });

            // turn off function once animation triggered

            $('[href="#about"]').off('click', triggerAnimation);

        }


        $('[href="#about"]').on('click', triggerAnimation);

    });

    /* *********************************************************** 
                    S U B S C R I B E   P O P U P
       *********************************************************** */

    $('.popup-btn').on('click', function (e) {

        e.preventDefault();

        //HTML fetched to show in popup
        var popupContentHTML = $('.popup-content').html();

        //actual popup HTML to be prepended in body
        var popupHTML = '<div class="sub-popup"><div class="popup-content-wrap"><div class="popup-content-pop">' + popupContentHTML + '</div></div></div>';


        $('body').prepend(popupHTML);

        //prepend popup and then animate in slowly

        $('.sub-popup').css({
            opacity: 0
        }).animate({
            opacity: 1
        }, 300);

        //popup close div with some styles
        $('.sub-popup').prepend('<div id="popup-close"></div>');

        $('.sub-popup').find('#popup-close').css({

            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0

        });

        //close popup when .popup-close is clicked
        $('.sub-popup').find('#popup-close').on('click', function () {

            $('.sub-popup').animate({
                opacity: 0
            }, 300, function () {

                $('.sub-popup').remove();

            });

        });

        /* ***********************************************************
                            S U B S C R I B E   F O R M
           *********************************************************** */

        //reset form on load
        $('#subForm')[0].reset();
        $('#subEmail, #subSubmit').removeAttr('disabled');

        //validate subscribe form
        function validateSubscribeForm() {

            $('#subEmail').css({
                borderColor: ''
            });

            //if email is empty or not valid show error
            if (!validateEmail($('#subEmail').val()) || $('#subEmail').val() === '') {

                $('#subEmail').css({
                    borderColor: '#a94442'
                });

            }

        }

        //send email with AJAX
        function sendSubscriber() {

            $.ajax({
                type: "POST",
                url: "php/subscribe.php",
                data: $('#subForm').serialize(),
                success: function (msg) {

                    if (msg === 'sent') {

                        //if email sent, disable subscribe form 
                        $('#subForm').off('submit', sendSubscriber);
                        $('#subForm')[0].reset();
                        $('#subEmail').attr('disabled', 'disabled').css({
                            borderColor: '#939393'
                        });

                        $('#subSubmit').removeClass('error').addClass('disabled').attr('disabled', 'disabled');

                    } else if (msg === 'error') {

                        //else show error
                        $('#subSubmit').addClass('error');

                    }

                }
            });

            return false;
        }

        //trigger functions
        $('#subForm').on('submit', validateSubscribeForm);
        $('#subForm').on('submit', sendSubscriber);


    });

    /* ***********************************************************
                            P L U G I N S 
       *********************************************************** */

    //typed.js
    $(function () {

        $('.typed-element').typed({

            strings: ['This Domain is <span class="colored">available.</span>', 'This Domain is <span class="colored">available.</span>', 'This Domain is <span class="colored">available.</span>'],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            // stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // shuffle the strings
            shuffle: false,
            // time before backspacing
            backDelay: 2000,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: " _",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html'
                // call when done callback function
                // callback: function() {},
                // starting callback function before each string
                // preStringTyped: function() {},
                //callback for every typed string
                // onStringTyped: function() {},
                // callback for reset
                // resetCallback: function() {}

        });

    });


    /* ***********************************************************
                        C O N T A C T   F O R M 
       *********************************************************** */

    //reset contact form
    $('#contactForm')[0].reset();
    $('#contactName, #contactEmail, #contactSubject, #contactMessage, #contactSubmit').removeAttr('disabled');

    //email validation function
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    //validate contact form
    function validateContactForm() {

        $('#contactName, #contactEmail, #contactSubject, #contactMessage').css({
            borderColor: ''
        });

        //if any field is empty, show error
        $('#contactName, #contactEmail, #contactSubject, #contactMessage').each(function () {

            if (($(this).val()) === '') {

                $(this).css({
                    borderColor: '#a94442'
                });

            }

        });

        //if email isn't valid show error

        if (!validateEmail($('#contactEmail').val())) {

            $('#contactEmail').css({
                borderColor: '#a94442'
            });

        }

    }

    //send messags
    function sendMessage() {

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $('#contactForm').serialize(),
            success: function (msg) {

                if (msg === 'sent') {

                    //if sent, reset and disable contact form
                    $('#contactForm').off('submit', sendMessage);
                    $('#contactForm')[0].reset();
                    $('#contactName, #contactEmail, #contactSubject, #contactMessage').attr('disabled', 'disabled').css({
                        borderColor: '#939393'
                    });

                    $('#contactSubmit').removeClass('error').addClass('disabled').attr('disabled', 'disabled');

                } else if (msg === 'error') {

                    //else show error
                    $('#contactSubmit').addClass('error');

                }

            }
        });

        return false;
    }

    //trigger functions
    $('#contactForm').on('submit', sendMessage);
    $('#contactForm').on('submit', validateContactForm);

});
