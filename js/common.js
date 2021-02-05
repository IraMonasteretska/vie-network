$(document).ready(function () {
    // main slider
    if ($(".mainswiper-container").length) {
        var swiper = new Swiper('.mainswiper-container', {
            direction: 'vertical',
            slidesPerView: 1,
            loop: false,
            speed: 1000,
            allowTouchMove: false,
            autoplay: {
                delay: 9000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    // parallax
    if ($(window).width() > 1024) {
        if ($('*').is('#scene')) {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        }
    }
    // explore slider pic
    if ($(".exploreserv-pic").length) {
        var swiperServpic = new Swiper('.exploreserv-pic', {
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 1000,
            autoplay: {
                delay: 9000,
                disableOnInteraction: false,
            },
            loop: true,
            loopedSlides: 4,
        });
        var swiperServbox = new Swiper('.exploreserv-box', {
            spaceBetween: 30,
            slidesPerView: 1,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            speed: 1000,
            breakpoints: {
                1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                },
                1025: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            },
        });
        swiperServpic.controller.control = swiperServbox;
        swiperServbox.controller.control = swiperServpic;
    }
    if ($(window).width() > 1024) {
        if ($('*').is('#scene1')) {
            var scene = document.getElementById('scene1');
            var parallaxInstance = new Parallax(scene);

        }
    }

    // burger
    $('.hamburger').click(function () {
        $('.header__nav').addClass('show');
    });

    $('.closemenu-btn').click(function () {
        $('.header__nav').removeClass('show');
    });

    // Body BG

    $(window).scroll(function () {

        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.panel');

        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);

        $panel.each(function () {
            var $this = $(this);

            // if position is within range of this panel.
            // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
            // Remember we set the scroll to 33% earlier in scroll var.
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

                // Remove all classes on body with color-
                $body.removeClass(function (index, css) {
                    return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                });

                // Add class of currently active div
                $body.addClass('color-' + $(this).data('color'));
            }
        });

    }).scroll();










});