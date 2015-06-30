$(document).ready(function() {
    // var scroll_start = 0;
    // var startchange = $('#startchange');
    // var offset = startchange.offset();
    // if (startchange.length) {
    //     $(document).scroll(function() {
    //         scroll_start = $(this).scrollTop();
    //         if (scroll_start > offset.top) {
    //             $(".navbar-default").addClass("sticky").addClass('navbar-fixed-top');
    //         } else {
    //             $('.navbar-default').removeClass("sticky").css('background-color', 'transparent');
    //         }
    //     });
    // }
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.navbar').addClass("sticky");
    } else {
        $('.navbar').removeClass("sticky");
    }

    if ($(window).width() < 769) {
        $('.navbar-default').removeClass("sticky").removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }

    if ($(window).width() > 768) {
        $('.navbar-default').addClass('navbar-fixed-top');
    }
});

});
