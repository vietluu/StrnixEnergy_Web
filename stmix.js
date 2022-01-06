$(document).ready(function() {
    $('.dropdown-icon').click(function() {
        $(this).parent().children("ul").slideToggle("slow");
        $(this).toggleClass("activebtn");


    });
    $('.menu-bar').click(function() {
        $('.mobile-menu').show();

        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function(e) { e.preventDefault() })

    });
    $('.close').click(function() {
        $('.mobile-menu').hide();

        $('body').removeClass('stop-scrolling');
        $('body').unbind('touchmove');
    })

    $('.btnbox').click(function() {
        var data = $('.third-body  input').serialize();
        var s = $('.noti');
        $.get("test.html", function(data) {
            $('.third-body  input').val("");
            s.show();

        });
        return false;
    });
    $('.support button').click(function() {
        var data = $('.support  input').serialize();
        var s = $('.noti');
        $.get("test.html", function(data) {
            $('.support input').val("");

            $('.custom-select-box').prop('selectedIndex', 0);
            $('.response').show();

        });
        return false;
    });
    $(".slidemain .owl-carousel").owlCarousel({

        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000
    });

    $(".imgprogram .owl-carousel").owlCarousel({

        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2

            },
            900: {
                items: 3

            },
            1100: {
                items: 4


            }

        },
        margin: 10,
        nav: true,
        lazyload: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000
    });

    $(".cmt-user .owl-carousel").owlCarousel({
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2


            }
        },
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000
    });
    $('.btn-tab ul li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.btn-tab ul li').removeClass('active');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        if (a > 200) {
            $('.header-top').slideDown();
        } else {
            $('.header-top').slideUp();
        }

    });



    $('.go-back').click(() => {
        $(window).scrollTop(0);
    });

    $('.search').click(() => {
        $('.search-bar').show();
        $('body').addClass('stop-scrolling')
        $('body').bind('touchmove', function(e) { e.preventDefault() })

    });
    $('.search-bar .close').click(() => {
        $('.search-bar').hide();
        $('body').removeClass('stop-scrolling')
        $('body').unbind('touchmove')
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('.counter').addClass('animated fadeInDownBig');
});