function navDropdown() {
    $('.dropdown').on("click", function (e) {
        $(this).siblings('li').removeClass('active');
        if (e.target !== this && e.target !== this.getElementsByTagName('a')[0]) { // fire onClick only on parent a
            return;
        }
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            var uid = Date.now();
            $(document).on('click.' + uid, function (e) {
                if (!$(e.target).closest(".dropdown").length) {
                    $(".dropdown.active").removeClass("active");
                    $(document).off('click.' + uid);
                }
            });
        }
    });
}

$(function() {
    navDropdown();
});