


// Function Activation
$(document).ready(function(){

    new WOW().init();
    GalleryFunction();
    OwlCarouselFunction();
    SlickMobileMenuFunction();

});



// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function OwlCarouselFunction(){
    // home-slider
    $('.home-slider').owlCarousel({
        loop:true,
        nav:true,
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dots:true,
        dotsData:true,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1
    });
	
	$('.service-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 1000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            500:{
                 items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        items:4
    });
}



// Slick Mobile Menu Function
function SlickMobileMenuFunction(){
    $('#menu').slicknav({
        label: 'Menu',
        duration: 500,
        prependTo:'#demo'
    });
}
