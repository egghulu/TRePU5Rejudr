$(document).ready(function () {
    
    'use strict';
    
    $('body').prepend('<div class="control-panal"><div class="toggle-button"><a href="#" class="fa fa-cog fa-spin"></a></div><div class="c-panal-content"><h4>CHOOSE COLOR</h4><p>Select a built in color for demo</p><ul class="colors-list"><li><a href="#" style="background-color: #00a3e0;" data-color="blue"></a></li><li><a href="#" style="background-color: #e6355d;" data-color="red"></a></li><li><a href="#" style="background-color: #00b796;" data-color="green"></a></li></ul><h4>DARK COLOR</h4><ul class="dark-colors"><li><a href="#" style="background-color: #20232d;" data-color="d-one"</li><li><a href="#" style="background-color: #1c1f24;" data-color="d-two"</li></ul></div></div>');

    $('.toggle-button').on('click', function (e) {

        e.preventDefault();

        $('.control-panal').toggleClass('active');

    });

    $('.colors-list li a, .dark-colors li a').on('click', function (e) {

        e.preventDefault();

        var dataColor = $(this).attr('data-color');
        
        if (dataColor === 'blue') {

            $('html').removeClass('red green');
            $('.home-logo img').removeClass('active');
            $('.home-logo img#blue').addClass('active');

        } else if (dataColor === 'green') {

            $('html').removeClass('red').addClass('green');
            $('.home-logo img').removeClass('active');
            $('.home-logo img#green').addClass('active');

        } else if (dataColor === 'red') {

            $('html').removeClass('green').addClass('red');
            $('.home-logo img').removeClass('active');
            $('.home-logo img#red').addClass('active');

        } else if (dataColor === 'd-one') {

            $('html').removeClass('dark-two');

        } else if (dataColor === 'd-two') {

            $('html').addClass('dark-two');

        }

    });

});
