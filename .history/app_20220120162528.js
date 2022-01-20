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


// Spline
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    focus  : 'center',
    padding: '1rerm',
  } );
  
  splide.mount();