$(function (){
    const body = $('body');

    // header
    if ($(this).scrollTop() >= 100) {
        $('.js-header').addClass('is-scrolled');
    } else {
        $('.js-header').removeClass('is-scrolled');
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.js-header').addClass('is-scrolled');
        } else {
            $('.js-header').removeClass('is-scrolled');
        }
    });


    // mobile menu
    body.on('click', '.js-mobile-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        body.toggleClass('is-mobile-menu-opened');
        $('.js-catalog').toggleClass('is-opened');
    })
    body.on('click','.js-mobile-search', function (e){
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $('.js-mobile-search-block').toggleClass('is-opened');
    })

    // tabs
    const tabLink = '.js-tab-link';
    const tabContent = '.js-tab-content';
    body.on('click', tabLink, function (e) {
        e.preventDefault();
        let tabID = $(this).data('tab');
        let tabGroup = $(this).data('tab-group');
        $('.js-tab-link[data-tab-group="'+tabGroup+'"]').removeClass('is-selected');
        $(this).addClass('is-selected');
        $('.js-tab-content[data-tab-group="'+tabGroup+'"]').removeClass('is-selected');
        $('.js-tab-content[data-tab-group="'+tabGroup+'"][data-tab="'+tabID+'"]').addClass('is-selected');
    })

    // counter
    if ($('.js-counter-wrap').length) {
        const counterMinus = '.js-counter-minus';
        const counterPlus = '.js-counter-plus';
        const counterTotal = '.js-counter-total';
        const counterWrap = '.js-counter-wrap';
        body.on('click', counterMinus, function (e) {
            e.preventDefault();
            let currentCounterTotalBlock = $(this).parent(counterWrap).find(counterTotal);
            let currentCounterTotal = parseInt(currentCounterTotalBlock.text());
            if (currentCounterTotal > 1) {
                currentCounterTotal--;
                currentCounterTotalBlock.text(currentCounterTotal);
            }
        })
        body.on('click', counterPlus, function (e) {
            e.preventDefault();
            let currentCounterTotalBlock = $(this).parent(counterWrap).find(counterTotal);
            let currentCounterTotal = parseInt(currentCounterTotalBlock.text());
            currentCounterTotal++;
            currentCounterTotalBlock.text(currentCounterTotal);
        })
    }

    // ship choice
    if ($('.js-ship-check').length) {
        const shipCheck = '.js-ship-check';
        const shipBlock = '.js-ship-block';
        body.on('click', shipCheck, function (e) {
            let shipType = $(this).data('ship');
            $(shipBlock).removeClass('is-selected');
            $(shipBlock+'[data-ship="'+shipType+'"]').addClass('is-selected');
        })
    }

    // filters
    if ($('.js-filter-dropdown').length) {
        const filterDropdown = '.js-filter-dropdown';
        const filterDropdownBtn = '.js-filter-dropdown-btn';
        body.on('click', filterDropdownBtn, function (e) {
            e.preventDefault();
            if ($(this).parent(filterDropdown).hasClass('is-opened')) {
                $(this).parent(filterDropdown).removeClass('is-opened')
            } else {
                $(filterDropdown).removeClass('is-opened')
                $(this).parent(filterDropdown).addClass('is-opened')
            }
        })

        body.on('click', '.js-filter-more', function (e) {
            e.preventDefault();
            if ($(this).parents('.js-filter-row').hasClass('is-filter-more-active')) {
                $(this).parents('.js-filter-row').removeClass('is-filter-more-active')
                $(this).text('Все фильтры');
            } else {
                $(this).parents('.js-filter-row').addClass('is-filter-more-active')
                $(this).text('Скрыть');
            }
        })
    }


    // more collections
    if ($('.js-collections-list').length) {
        body.on('click', '.js-more-collections-btn', function (e) {
            e.preventDefault();
            if ($(this).parents('.js-collections-list').hasClass('is-more-active')) {
                $(this).parents('.js-collections-list').removeClass('is-more-active')
                $(this).text('Ещё');
            } else {
                $(this).parents('.js-collections-list').addClass('is-more-active')
                $(this).text('Скрыть');
            }
        })
    }

    // GO TO
    if ($('.js-go-to').length) {
        const goToLink = '.js-go-to';
        body.on('click', goToLink, function (e) {
            e.preventDefault();
            let currentID = $(this).data('go-to');
            $("html, body").animate({
                scrollTop: $('[data-go-to-block="'+currentID+'"]').offset().top - 320
            }, 600);
        })
    }
    if ($('.js-go-to-custom').length) {
        const goToLink = '.js-go-to-custom';
        body.on('click', goToLink, function (e) {
            e.preventDefault();
            let currentID = $(this).data('go-to');
            $('[data-go-to-block="'+currentID+'"]').trigger('click');
            $("html, body").animate({
                scrollTop: $('[data-go-to-block="'+currentID+'"]').offset().top - 320
            }, 600);
        })
    }


    // popup
    const popupLink = '.js-popup-link';
    const popupClose = '.js-popup-close';
    const popupWrap = '.js-popup-wrap';
    const popupBlock = '.js-popup';
    body.on('click', popupLink, function (e) {
        e.preventDefault();
        let popupID = $(this).data('popup');
        body.addClass('is-popup-opened');
        $(popupWrap).addClass('is-opened');
        $(popupBlock).removeClass('is-opened');
        $(popupBlock+'[data-popup='+popupID+']').addClass('is-opened')
    })
    body.on('click', popupClose, function (e) {
        e.preventDefault();
        body.removeClass('is-popup-opened');
        $(popupWrap).removeClass('is-opened');
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            body.removeClass('is-popup-opened');
            $(popupWrap).removeClass('is-opened');
        }
    });


    // forms submit temp
    body.on('click', '.js-call-submit', function (e) {
        e.preventDefault();
        $(this).parents('.js-popup').addClass('is-message-sent')
    })


    // CATALOG
    const catalogLink = '.js-catalog-link';
    body.on('click',catalogLink, function (e) {
        e.preventDefault();
        $('.js-catalog').toggleClass('is-opened');
    })
    body.on('click', '.js-catalog-item', function (e) {
        e.preventDefault();
        let catalogID = $(this).data('catalog');

        $('.js-catalog-item, .js-catalog-content ').removeClass('is-selected');
        $('.js-catalog-item[data-catalog="'+catalogID+'"]').addClass('is-selected');
        $('.js-catalog-content[data-catalog="'+catalogID+'"]').addClass('is-selected');
    })
    $(document).on('click', function(e) {
        if ($('.js-catalog').hasClass('is-opened')) {
            var $div = $('.js-catalog');
            if (!$div.is(e.target) && $div.has(e.target).length === 0) {
                if (!$(e.target).hasClass('js-catalog-link')) {
                    $('.js-catalog').toggleClass('is-opened');
                }
            }
        }
    });


    // CART TYPE CHANGE
    body.on('change', '.js-cart-page-type', function (e) {
        if ($(this).val() == '1') {
            $('.js-total-price-value').text('23 856');
        } else if ($(this).val() == '2') {
            $('.js-total-price-value').text('30 000');
        } else if ($(this).val() == '3') {
            $('.js-total-price-value').text('10 856');
        }
    })


    // OPTIONS MORE
    body.on('click', '.js-more-options', function (e) {
        e.preventDefault();
        $(this).parents('.product-teaser__options').toggleClass('is-opened');
        $(this).toggleClass('is-opened');
        if ($(this).hasClass('is-opened')) {
            $(this).text('скрыть')
        } else {
            $(this).text('ещё')
        }
    })


    // Detail page
    if ($('.js-detail-page').length) {
        $('.js-header').addClass('is-scrolled-fix');
        body.addClass('detail-page');
    }
})

// SWIPERS
$(function () {
    if ($('.js-hero-slide').length) {
        const swiper = new Swiper('.js-hero-slide', {
            slidesPerView: 1,
            pagination: {
                el: '.js-hero-slide .swiper-pagination',
                clickable: true,
            },
        });
    }

    if ($('.js-other-collections').length) {
        const otherCollections = new Swiper('.js-other-collections', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-other-collections-nav.swiper-button-next',
                prevEl: '.js-other-collections-nav.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }

        });

        const newestSlider2 = new Swiper('.js-newest-slider-2', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-2.swiper-button-next',
                prevEl: '.js-newest-slider-nav-2.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const newestSlider3 = new Swiper('.js-newest-slider-3', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-3.swiper-button-next',
                prevEl: '.js-newest-slider-nav-3.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const newestSlider4 = new Swiper('.js-newest-slider-4', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-4.swiper-button-next',
                prevEl: '.js-newest-slider-nav-4.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

    }

    if ($('.js-newest-slider-1').length) {
        const newestSlider1 = new Swiper('.js-newest-slider-1', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-1.swiper-button-next',
                prevEl: '.js-newest-slider-nav-1.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }

        });

        const newestSlider2 = new Swiper('.js-newest-slider-2', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-2.swiper-button-next',
                prevEl: '.js-newest-slider-nav-2.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const newestSlider3 = new Swiper('.js-newest-slider-3', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-3.swiper-button-next',
                prevEl: '.js-newest-slider-nav-3.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const newestSlider4 = new Swiper('.js-newest-slider-4', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-newest-slider-nav-4.swiper-button-next',
                prevEl: '.js-newest-slider-nav-4.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

    }

    if ($('.js-popular-slider-1').length) {
        const popularSlider1 = new Swiper('.js-popular-slider-1', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-popular-slider-nav-1.swiper-button-next',
                prevEl: '.js-popular-slider-nav-1.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }

        });

        const popularSlider2 = new Swiper('.js-popular-slider-2', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-popular-slider-nav-2.swiper-button-next',
                prevEl: '.js-popular-slider-nav-2.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const popularSlider3 = new Swiper('.js-popular-slider-3', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-popular-slider-nav-3.swiper-button-next',
                prevEl: '.js-popular-slider-nav-3.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

        const popularSlider4 = new Swiper('.js-popular-slider-4', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-popular-slider-nav-4.swiper-button-next',
                prevEl: '.js-popular-slider-nav-4.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });

    }

    if ($('.js-reviews-slider').length) {
        const reviewSlider = new Swiper('.js-reviews-slider', {
            slidesPerView: 'auto',
            initialSlide: 1,
            spaceBetween: 180,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-reviews-slider-nav.swiper-button-next',
                prevEl: '.js-reviews-slider-nav.swiper-button-prev',
            },
            pagination: {
                el: '.js-reviews-slider-nav.swiper-pagination',
                clickable: true,
            },
        });
    }

    if ($('.js-swiper-project-main').length) {
        var projectGalleryThumbSwiper = new Swiper(".js-swiper-project-thumbs", {
            freeMode: true,
            watchSlidesProgress: true,
            spaceBetween: 18,
            slidesPerView: 6,
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                480: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                600: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1400: {
                    spaceBetween: 18,
                    slidesPerView: 6,
                }
            }
        });
        var projectGalleryMainSwiper = new Swiper(".js-swiper-project-main", {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".js-swiper-project-main-nav.swiper-button-next",
                prevEl: ".js-swiper-project-main-nav.swiper-button-prev",
            },
            thumbs: {
                swiper: projectGalleryThumbSwiper,
            },
        });
    }

    if ($('.js-documents-gallery').length) {
        const documentSlider = new Swiper('.js-documents-gallery', {
            slidesPerView: 5,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-documents-gallery-nav.swiper-button-next',
                prevEl: '.js-documents-gallery-nav.swiper-button-prev',
            },
            pagination: {
                el: '.js-documents-gallery-nav.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            }
        });
    }

    if ($('.js-category-slider').length) {
        const categoriesSlider = new Swiper('.js-category-slider', {
            slidesPerView: 2,
            spaceBetween: 28,
            navigation: {
                nextEl: '.js-category-slider-nav.swiper-button-next',
                prevEl: '.js-category-slider-nav.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
            },
            pagination: {
                el: '.js-category-slider-nav.swiper-pagination',
                clickable: true,
            },
        });
    }
})

// PHONE MASK
$(function (){
    if ($('.js-phone').length > 0) {
        var trigger = false;
        var options = {
            'translation': {
                C: {
                    pattern: /[7]/
                },
                M: {
                    pattern: /[9,7,5,3,2]/
                },
                L: {
                    pattern: /[9,7,5]/
                }
            },
            onKeyPress: function onKeyPress(cep, e, field, options) {
                var masks = ['+7 (000) 000-00-00'];
                if (cep.length === 8) {
                    trigger = true;
                }
                if (cep.length < 8) {
                    trigger = false;
                }
                var mask = cep.length > 7 && trigger ? masks[0] : masks[0];
            }
        };
        $('.js-phone').mask('+7 (000) 000-00-00', options);
    }
})

// FANCYBOX
$(function (){
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
})

// SELECT2
// $(function (){
//     if ($('.js-select2').length) {
//         $('.js-select2').select2({
//             minimumResultsForSearch: -1,
//             dropdownCssClass: 'filter-field-select2-dropdown'
//         });
//     }
// })

// RANGE
$(function (){
    if ($('#js-price-range').length) {
        var priceRange = document.getElementById('js-price-range');
        var priceRangeFrom = document.getElementById('js-price-range-from'),
            priceRangeTo = document.getElementById('js-price-range-to');


        noUiSlider.create(priceRange, {
            start: [100, 10000],
            connect: true,
            step: 10,
            range: {
                'min': 0,
                'max': 35000
            },
        });

        priceRange.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                priceRangeTo.innerHTML = 'до ' + Math.round(values[handle]);
            } else {
                priceRangeFrom.innerHTML = 'от ' + Math.round(values[handle]);
            }
        });

    }
})