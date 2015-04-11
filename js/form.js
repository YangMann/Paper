var input = 'input:not([type=checkbox]):not([type=radio]):not([type=range]), textarea';

function updateInputStatus() {
    $(input).each(function (index, el) {
        if ($(el).val().length > 0 || $(this).attr('placeholder') !== undefined) {
            $(this).parent('.input-area').addClass('active');
        } else {
            $(this).parent('.input-area').removeClass('active');
        }
    });
}

//function updateTextareaHeight(textarea) {
//    $(textarea).css('height', 'auto').css('height', textarea.scrollHeight);
//}

// Handle HTML5 autofocus
$('input[autofocus]:not([type=checkbox]):not([type=radio]):not([type=range])').parent('.input-area').addClass('active');

// Add active if form auto complete
$(document).on('change', input, function () {
    if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).parent('.input-area').addClass('active');
    }
    //validate_field($(this));
});

// Add active if input element has been pre-populated on document ready
$(document).ready(function () {
    updateInputStatus();
});

// HTML DOM FORM RESET handling
$(document).on('reset', function (e) {
    if ($(e.target).is('form')) {
        //$(this).find('input').removeClass('valid').removeClass('invalid');
        $(this).find(input).parent('.input-area').removeClass('active');

        // Reset select
        //$(this).find('select.initialized').each(function () {
        //    var reset_text = $(this).find('option[selected]').text();
        //    $(this).siblings('input.select-dropdown').val(reset_text);
        //});
    }
});

$(document).on('blur', input, function () {
    if ($(this).val().length === 0 && $(this).attr('placeholder') === undefined) {
        $(this).parent('.input-area').removeClass('active');
    }
    //validate_field($(this));
});

// Textarea auto-resize : JUMPING AROUND!
//$(document).on('change, keyup', 'textarea.auto-resize', function () {
//    updateTextareaHeight(this);
//}).on('cut, paste, drop, keydown', 'textarea.auto-resize', function () {
//    setTimeout(updateTextareaHeight(this), 0);
//});

var tempDiv = $('.hiddenfortextarea').first();
if (!tempDiv.length) {
    tempDiv= $('<div class="hiddenfortextarea"></div>');
    $('body').append(tempDiv);
}

function textareaAutoResize($textarea) {
    tempDiv.text($textarea.val() + '\n');
    var content = tempDiv.html().replace(/\n/g, '<br>');
    tempDiv.html(content);

    // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea.is(':visible')) {
        tempDiv.css('width', $textarea.width());
    }
    else {
        tempDiv.css('width', $(window).width()/2);
    }
    tempDiv.css('line-height', $textarea.css('line-height'));
    tempDiv.css('font-size', $textarea.css('font-size'));

    $textarea.css('height', tempDiv.height());
}

$('textarea.auto-resize').each(function () {
    var $textarea = $(this);
    if ($textarea.val().length) {
        textareaAutoResize($textarea);
    }
});

$(document).on('keyup keydown', 'textarea.auto-resize', function () {
    textareaAutoResize($(this));
});
