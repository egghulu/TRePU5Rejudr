(function($){
    'use strict';

    $('#ajax-form #submit').on('click',function(){
        $(".form_icon").css('opacity','1').removeClass('fa-exclamation-circle red green fa-check').addClass('fa-spin fa-refresh');
    });


    $(document).ready(function(){
        // Get the form.
        var form = $('#ajax-form');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                $(".form_icon").removeClass('fa-refresh fa-spin fa-exclamation-circle red');
                $(".form_icon").addClass('fa-check green');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                $(".form_icon").removeClass('fa-refresh fa-spin fa-check green');
                $(".form_icon").addClass('fa-exclamation-circle red');



                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });

        });
    });

})(jQuery);
