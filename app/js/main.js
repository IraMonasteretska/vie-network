

$(document).ready(function () {

    var swiper = new Swiper('.intro__slider', {
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1000,
        breakpoints: {
            700: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        },

        on: {
            slideChange: function () {
                var currentSlide = this.realIndex + 1;
                //   console.log("currentSlide is:" + currentSlide);
                document.querySelector('.current-slide').innerHTML = '0' + currentSlide + '/';
            },
            paginationRender: function () {
                var totalSlides = document.getElementsByClassName('swiper-pagination-bullet').length;
                //   console.log("totalSlides: " + totalSlides);
                document.querySelector('.total-slides').innerHTML = '0' + totalSlides;
            }
        }
    });


    ///////////////////////////////////////


    var galleryTop = new Swiper('.gallery-img', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        loopedSlides: 4,
        on: {
            slideChange: function () {
                var currentSlide = this.realIndex + 1;
                document.querySelector('.services-current-slide').innerHTML = '0' + currentSlide + '/';
            },
            paginationRender: function () {
                var totalSlides = document.getElementsByClassName('swiper-pagination-bullet').length;
                document.querySelector('.services-total-slides').innerHTML = '0' + totalSlides;
            }
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        },
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;



    ///////////////////////////////////////


    function openMenu() {
        $('.hamburger').on('click', function () {
            $('.header__menu').toggleClass('header__menu--open');
            $('.hamburger__icon').toggleClass('active');
            $('body').toggleClass('scrollHidden')
            $('.td-close-side').toggleClass('td-close-side--open');
        });
        $('.td-close-side').on('click', function () {
            $('.td-close-side--open').removeClass('td-close-side--open');
            $('.header__menu').removeClass('header__menu--open');
            $('.hamburger__icon').removeClass('active');
            $('body').removeClass('scrollHidden')
        });


    }
    openMenu()


});

$(window).scroll(function () {

    var $window = $(window),
        $body = $('body'),
        $panel = $('.bg-section');
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();



window.onload = function () {
    console.log('kkk');
    let over = document.querySelector(".about__img");
    const boxer = boxercontainer.querySelector(".about__img_mask"),

        fluidboxer = window.matchMedia("(min-width: 1024px)");

    function getMousePos(xRef, yRef) {

        let panelRect = boxercontainer.getBoundingClientRect();
        return {
            x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * boxercontainer.offsetWidth,
            y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * boxercontainer.offsetHeight
        };
    }

    over.addEventListener("mousemove", function (e) {

        let mousePos = getMousePos(e.clientX, e.clientY),
            psx = mousePos.x - over.offsetWidth / 2,
            psy = mousePos.y - over.offsetHeight / 2



        if (Math.abs(psx) < 400 && psy < 400 && psy > -400 && psx > -400 && fluidboxer.matches) {

            boxer.style.transform = "translate(" + psx + "px, " + psy + "px)";
        }
    })
    over.addEventListener("mouseleave", function (e) {
        console.log('leve');
        boxer.style.transform = "translate(0px, 0px)";
    })
};


