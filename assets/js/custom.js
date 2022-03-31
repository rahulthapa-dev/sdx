$(document).on("click", "#see-all", function() {
    var searchCaseEl = document.getElementById('searchcase');
    var searchResultEl = document.getElementById('searchResult');

    var searchCaseModal = bootstrap.Modal.getInstance(searchCaseEl);
    var searchResultModal = bootstrap.Modal.getInstance(searchResultEl);
    searchCaseModal.hide();
    setTimeout(() => {
        $('#searchResult').modal('show');
    }, 500);
});
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('.owl-carousel-news').owlCarousel({
    items:1,
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
        658:{
            items:2
        },
        768:{
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
    items:1,
    merge:false,
    loop:true,
    nav: true,
    navText: [
      "<div class='nav-c nav-prev'></div>",
      "<div class='nav-c nav-next'></div>"
    ],
    autoplay: false,
    autoplayHoverPause: true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:false,
    autoHeight:true,
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
            items:2
        },
    }
})

$('.owl-carousel-home').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    nav: true,
    navText: [
      "<div class='nav-c nav-prev'></div>",
      "<div class='nav-c nav-next'></div>"
    ],
    // autoplay: false,
    // autoplayHoverPause: true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    dots: false,
    responsive:{
        480:{
            items:1
        },
        600:{
            items:1
        },
        991:{
            items:3
        },
    }
})

