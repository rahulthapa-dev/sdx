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
$(document).on("click", "#backSearchCase", function() {
    var searchResultEl = document.getElementById('searchResult');
    var searchCaseEl = document.getElementById('searchcase');

    var searchCaseModal = bootstrap.Modal.getInstance(searchResultEl);
    var searchResultModal = bootstrap.Modal.getInstance(searchCaseEl);
    searchCaseModal.hide();
    setTimeout(() => {
        $('#searchcase').modal('show');
    }, 500);
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("searchInput").addEventListener("keypress", function(event){
        if(event.key == 'Enter'){
            document.getElementById("searchBtn").click();
        }
    });
});
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('.owl-carousel-news').owlCarousel({
    items:2,
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
            items:2
        },
        658:{
            items:2
        },
        768:{
            items:2
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
        548:{
            items:2
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

