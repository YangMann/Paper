function emphasize() {
    $('em').each(function () {
        var tmp = $(this).text();
        tmp = tmp.split("");
        var out = '';
        for (var i = 0; i < tmp.length; i++) {
            out += '<em>' + tmp[i] + '</em>';
        }
        $(this).replaceWith(out);
    });
}

$(function () {
    emphasize();
});