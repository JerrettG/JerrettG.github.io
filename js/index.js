window.addEventListener("DOMContentLoaded", () => {
    const dots = document.getElementsByClassName('dot');
    let i = 1;
    for (let dot of dots) {
      dot.val = i;
      dot.addEventListener('click', currentSlide);
      i++;
    }

    const navLinks = document.querySelectorAll('.navbar-links span');
    for (let navLink of navLinks) {
      switch (true) {
        case navLink.classList.contains('about-link'):
          navLink.val = 1;
          navLink.addEventListener('click', currentSlide);
          break;
        case navLink.classList.contains('projects-link'):
          navLink.val = 2;
          navLink.addEventListener('click', currentSlide);
          break;
      }
    }
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', toggleMenu);
    document.querySelector('.prev').addEventListener('click', minusSlides);
    document.querySelector('.next').addEventListener('click', plusSlides);

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function toggleMenu() {
      const menuBtn = document.querySelector('.menu-btn');
      document.getElementById('navbar-links-list-mobile').style.maxHeight = (menuBtn.checked) ? '350px' : '0px';
    }


    // Next/previous controls
    function plusSlides() {
      showSlides(slideIndex += 1);
    }

    function minusSlides() {
        showSlides(slideIndex -= 1);
    }
    
    // Thumbnail image controls
    function currentSlide(event) {
      console.log(event.srcElement);
      const n = event.srcElement.val;
      console.log(n);
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
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

});
