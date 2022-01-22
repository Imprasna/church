function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    freeDrag: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: true,
            loop: true
        },
        1200: {
            items: 2,
            nav: true,
            loop: true
        }
    }
});

$('.testimonel').owlCarousel({
    loop: true,
    freeDrag: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
            loop: true,
        },
        1200: {
            items: 2,
            nav: false,
            loop: true, 
        }
    }
});


// Spline
// var splide = new Splide( '.splide', {
//     type   : 'loop',
//     perPage: 3,
//     perMove: 1,
//     focus  : 'center',
//   } );
  
// splide.mount();
  

// Slider.js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

//   Gallery Masonary
// window.onload = () => {
//     const grid = document.querySelector('.grid');

    
// }

$('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true,

});
console.log("hello n");