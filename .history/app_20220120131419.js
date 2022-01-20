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

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    responsive : {
        // breakpoint from 0 up
        0 : {
            option1 : value,
            option2 : value,
            ...
        },
        // breakpoint from 480 up
        480 : {
            option1 : value,
            option2 : value,
            ...
        },
        // breakpoint from 768 up
        768 : {
            option1 : value,
            option2 : value,
            ...
        }
    }
    
  });