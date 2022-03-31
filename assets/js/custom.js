$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('.owl-carousel-news').owlCarousel({
    items:4,
    margin:10,
    nav: true,
    navText: [
      "<div class='nav-c nav-prev'></div>",
      "<div class='nav-c nav-next'></div>"
    ],
    center:false,
    dots: false,
    responsive:{
        480:{
            items:1
        },
        1024:{
            items:2
        },
        1180:{
            items:3
        },
        1400:{
            items:4
        },
    }
})
$('.owl-carousel-videos').owlCarousel({
    items:3,
    merge:false,
    loop:true,
    nav: true,
    navText: [
      "<div class='nav-c nav-prev'></div>",
      "<div class='nav-c nav-next'></div>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:false,
    dots: false,
    responsive:{
        480:{
            items:1
        },
        991:{
            items:1
        },
        1024:{
            items:2
        },
        1280:{
            items:3
        },
    }
})

$('.owl-carousel').owlCarousel({
    items:4,
    merge:false,
    loop:true,
    nav: true,
    navText: [
      "<div class='nav-c nav-prev'></div>",
      "<div class='nav-c nav-next'></div>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:false,
    dots: false,
    responsive:{
        480:{
            items:1
        },
        600:{
            items:1
        },
        991:{
            items:4
        },
    }
})

