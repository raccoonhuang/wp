(function($) {
    "use strict";
    
    
    /* menu  sticky */
    var header = $('.header-sticky');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });
    
    
    /* mobile-menu  */
    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });
    
    
    /* imagesLoaded  */
    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    
    /* portfolio menu  */
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    
    /* slider active  */
    $('.slider-auto').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 3,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    /* slider active  */
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* portfolio active  */
    $('.portfolio-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    
    /* Magnific Popup */
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /* menu-toggle */
	
	var menutoggle = $('.menu-toggle');
	var mainmenu = $('.main-menu nav');
	
    menutoggle.on('click', function() {
        if (menutoggle.hasClass('is-active')) {
            mainmenu.removeClass('menu-open');
        } else {
            mainmenu.addClass('menu-open');
        }
    });
    
    
    /* menu 10 */
	var menu10 = $('.main-menu-10');
	
    $('.menu-toggle-10').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            menu10.animate({
                left: '-225px'
            }, 500);
        } else {
            $(this).addClass('active');
            menu10.animate({
                left: '0'
            }, 500);
        }
    });
    
    
    /* Hamburger js */
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    
    
    
    /* blog active  */
    $('.blog-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    
    
    
    /* testimonial active  */
    $('.testimonial-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* tab slider active  */
    $('.pro-img-tab-slider').owlCarousel({
        loop: true,
        items: 4,
        margin: 20,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
    
    
    /* search active  */
	var sidebarsearch = $('.sidebar-search');
	
    $('.search-open').on('click', function() {
        sidebarsearch.removeClass('slideOutUp').addClass('slideInDown');
    });
    $('.close-search').on('click', function() {
        sidebarsearch.removeClass('slideInDown').addClass('slideOutUp');
    });
    
    
    /*  counter js active  */
    $(".about-counter").counterUp({
        delay: 10,
        time: 2000
    });
    
    
    
    /* scrollUp */
	var totop = $('#toTop');
	
    win.on('scroll', function() {
        if (win.scrollTop() > 200) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    /*----------------------------
    youtube video
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });
    
    
     /*----------------------------
    kenburne
    ------------------------------ */   
    $(".slide-kenburne").kenburnsy({
      fullscreen: true
    });
    
    
    
    /*----------------------------
    ripples-active
    ------------------------------ */  
    $('.ripples-active').ripples({
     resolution: 1024,
     dropRadius: 15,
     perturbance: 0.01,
    });

    
    
    
    
    
    
    
    /*
	CONTACT FORM VALIDATIONS SETTINGS
	========================================*/
	var CTForm = $('#contact_form');
    CTForm.validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   

	/*
	CONTACT FORM SCRIPT
	========================================*/
 	var CTSubmit = $('#contact_submit');
    CTForm.submit(function() {
        // submit the form
        if($(this).valid()){
           CTSubmit.button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactsubject: $('#contact_subject').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                   CTSubmit.button('reset');
                   CTSubmit.button('complete');
                },
                error: function() {
					CTSubmit.button('reset');
					CTSubmit.button('error');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            CTSubmit.button('reset')
        }
        return false; 
    });
    
    
    
    
    



})(jQuery);