$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


function animated() {
    var wow = new WOW({
        boxClass: 'hex1',
        animateClass: 'animated',
        offset: 100,
        mobile: !0,
        live: !0,
    });
    wow.init()
}

function animated1() {
    var wow = new WOW({
        boxClass: 'hex-style1',
        animateClass: 'animated',
        offset: 100,
        mobile: !0,
        live: !0,
    });
    wow.init()
}

function animated2() {
    var wow = new WOW({
        boxClass: 'hex-style2',
        animateClass: 'animated',
        offset: 100,
        mobile: !0,
        live: !0,
    });
    wow.init()
}



$(document).ready(function() {
    $('.hex').addClass('animated');

    animated();
    // animated1();
    // animated2();




    $('.news-hot__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: "unslick"
        }]
    });
    $(window).resize(function() {
        $('.news-hot__list').slick('unslick')
        $('.news-hot__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                breakpoint: 992,
                settings: "unslick"
            }]
        });

    });

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    // $(function() {
    //     // $("#date").datepicker();
    //     // $(".datepicker").datepicker();
    //     $(".hasDatepicker").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkin-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkout-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    // });


    $(".menu__toggle").click(function() {
        $('.menu__wrap').toggleClass('is-opened');
        $('.menu').children('.menu__item').removeClass('is-active');
        $('body').toggleClass('ov-hidden');
    });

    $(".toggle-search").click(function() {
        $(this).toggleClass('is-opened');
        $('.search-box').toggleClass('is-opened');
    });

    $(".menu .menu__item .menu__link").click(function() {
        $(this).parents('.menu__item').toggleClass('is-active');
        $('.menu').children('.menu__item').not($(this).parents('.menu__item')).removeClass('is-active');
    });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".search-box.is-opened input").length ===
            0) {
            $(".search-box.is-opened").removeClass('is-opened');
            $('.toggle-search').removeClass('is-opened')
        }
    });

    $('.slide-more-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: false,
        // autoplaySpeed: 2000,
        // mobileFirst: true,
        centerPadding: '24px',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


});