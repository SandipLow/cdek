menu = document.getElementById('menu');
header = document.querySelector('.navbar');
banner = document.querySelector('.banner');

function mb() {

    // if (menubar.style.display != 'none') {
    //     menubar.style.display = 'none';
    //     menu.style.height = 66 + "%";
    // }

    // else {
    //     menubar.style.display = 'block';
    //     menu.style.height = 25 + "%";
    // }

    // if (header.style.height == "fit-content") {
    //     // header.classList.add('navbarup');
    //     // setTimeout(() => {
    //     //     header.classList.remove('navbarup')
    //     // }, 7000);
    //     header.style.height = 45 + "px";
    // } else {
    //     // header.classList.add('navbardown');
    //     // setTimeout(() => {
    //     //     header.classList.remove('navbardown')
    //     // }, 7000);
    //     header.style.height = "fit-content";
    // }

    header.classList.toggle('toogle');
}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("story");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}