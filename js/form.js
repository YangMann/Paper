function updateInputStatus() {
    $('input').each(function(index, el) {
        if ($(el).val().length > 0 || $(this).attr('placeholder') !== undefined) {
            $(this).parent('.input-area').addClass('active');
        } else {
            $(this).parent('.input-area').removeClass('active');
        }
    });
}

// Handle HTML5 autofocus
$('input[autofocus]').parent('.input-area').addClass('active');

// Add active if form auto complete
$(document).on('change', 'input', function () {
    if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).parent('.input-area').addClass('active');
    }
    //validate_field($(this));
});

// Add active if input element has been pre-populated on document ready
$(document).ready(function() {
    updateInputStatus();
});

// HTML DOM FORM RESET handling
$(document).on('reset', function(e) {
    if ($(e.target).is('form')) {
        //$(this).find('input').removeClass('valid').removeClass('invalid');
        $(this).find('input').parent('.input-area').removeClass('active');

        // Reset select
        //$(this).find('select.initialized').each(function () {
        //    var reset_text = $(this).find('option[selected]').text();
        //    $(this).siblings('input.select-dropdown').val(reset_text);
        //});
    }
});

$(document).on('blur', 'input', function () {
    if ($(this).val().length === 0 && $(this).attr('placeholder') === undefined) {
        $(this).parent('.input-area').removeClass('active');
    }
    //validate_field($(this));
});