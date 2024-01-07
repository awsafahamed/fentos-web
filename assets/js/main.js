/**
* Template Name: Tempo
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */


  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar ul');
    var header = document.querySelector('.header');
    var navToggle = document.querySelector('.mobile-nav-toggle');
    var smallCircleClass = 'small-circle';
    var lastScrollTop = 0;
  
    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
  
      // Toggle the navbar visibility based on scroll direction
      if (scrollTop > lastScrollTop) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'flex'; // Set it to 'flex' or 'block' based on your design
      }
  
      // Add or remove the small-circle class based on scroll position
      if (scrollTop > 0) {
        navToggle.classList.add(smallCircleClass);
      } else {
        navToggle.classList.remove(smallCircleClass);
      }
  
      lastScrollTop = scrollTop;
    });
  });
  
  





  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
      // Swiper options go here
      // For example:
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});







/*testimonial*/


document.addEventListener('DOMContentLoaded', function () {
// Existing code ...

// Initialize Swiper
var swiper = new Swiper('.slides-1', {
// Swiper configurations...
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
on: {
  // Update background image when the slide changes
  slideChange: function () {
    updateTestimonialBackground(swiper.activeIndex);
  },
},
});

// Function to update the background image based on the active slide index
function updateTestimonialBackground(activeIndex) {
const backgroundElement = document.getElementById('testimonialBackground');
const imageArray = ['./assets/img/Hero/about-hero.jpg', './assets/img/image2.jpg', './assets/img/image3.jpg', './assets/img/image4.jpg'];

// Ensure the activeIndex is within bounds
activeIndex = Math.min(Math.max(activeIndex, 0), imageArray.length - 1);

// Set the background image
backgroundElement.style.backgroundImage = `url('${imageArray[activeIndex]}')`;
}
});


document.addEventListener('DOMContentLoaded', function () {
const circles = document.querySelectorAll('.circle');
const testimonials = document.querySelectorAll('.testimonial-item');

circles.forEach(circle => {
circle.addEventListener('click', () => {
  const contentNumber = circle.getAttribute('data-content');
  showTestimonial(contentNumber);
});
});

function showTestimonial(contentNumber) {
testimonials.forEach(testimonial => {
  testimonial.classList.remove('active');
});

const activeTestimonial = document.getElementById(`testimonial${contentNumber}`);
activeTestimonial.classList.add('active');
}
});

document.addEventListener('DOMContentLoaded', function () {
const circles = document.querySelectorAll('.circle');
const testimonials = document.querySelectorAll('.testimonial-item');

circles.forEach(circle => {
circle.addEventListener('click', () => {
  const contentNumber = circle.getAttribute('data-content');
  showTestimonial(contentNumber);

  // Remove border from all circles
  circles.forEach(c => {
    c.classList.remove('active');
  });

  // Add border to the clicked circle
  circle.classList.add('active');
});
});

function showTestimonial(contentNumber) {
testimonials.forEach(testimonial => {
  testimonial.classList.remove('active');
});

const activeTestimonial = document.getElementById(`testimonial${contentNumber}`);
activeTestimonial.classList.add('active');
}
});



document.addEventListener('DOMContentLoaded', function () {
const circles = document.querySelectorAll('.circle');
const testimonials = document.querySelectorAll('.testimonial-item');
let currentIndex = 0; // Initialize the index of the active circle

function showNextTestimonial() {
const nextIndex = (currentIndex + 1) % circles.length;
showTestimonial(circles[nextIndex].getAttribute('data-content'));
currentIndex = nextIndex;

// Remove border from all circles
circles.forEach(c => {
  c.classList.remove('active');
});

// Add border to the next circle
circles[currentIndex].classList.add('active');
}

// Set interval for autoplay (change testimonial every 5 seconds, you can adjust this)
const intervalId = setInterval(showNextTestimonial, 5000);

// Stop autoplay on circle click
circles.forEach(circle => {
circle.addEventListener('click', () => {
  clearInterval(intervalId);
  const contentNumber = circle.getAttribute('data-content');
  showTestimonial(contentNumber);

  // Remove border from all circles
  circles.forEach(c => {
    c.classList.remove('active');
  });

  // Add border to the clicked circle
  circle.classList.add('active');
});
});

function showTestimonial(contentNumber) {
testimonials.forEach(testimonial => {
  testimonial.classList.remove('active');
});

const activeTestimonial = document.getElementById(`testimonial${contentNumber}`);
activeTestimonial.classList.add('active');
}
});
document.addEventListener('DOMContentLoaded', function () {
const circles = document.querySelectorAll('.circle');
const testimonials = document.querySelectorAll('.testimonial-item');

let currentIndex = 0;

function showTestimonial(contentNumber) {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });

  const activeTestimonial = document.getElementById(`testimonial${contentNumber}`);
  activeTestimonial.classList.add('active');
}

function updateCircles() {
  circles.forEach(circle => {
    circle.classList.remove('active');
  });

  circles[currentIndex].classList.add('active');
  showTestimonial(circles[currentIndex].getAttribute('data-content'));

  currentIndex = (currentIndex + 1) % circles.length;
}

// Initial call to show the first testimonial
updateCircles();

// Automatically change the circle and testimonial every 5 seconds (adjust as needed)
setInterval(updateCircles, 5000);
});
  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()
/***Explore slider */

  /**
   * Testimonials slider
   */
  new Swiper('.project-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let slideIndex = 0;
  
  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });
  }
  
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }
  
  // Set autoplay interval (change slide every 3 seconds)
  let autoplayInterval = setInterval(nextSlide, 3000);
  
  // Pause autoplay when hovering over the slider
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  // Resume autoplay when mouse leaves the slider
  slider.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
  });
  
  // Handle dot click to navigate to specific slide
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      slideIndex = i;
    });
  });
  
  // Initial slide
  showSlide(slideIndex);
  


  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  document.querySelector('.mobile-nav-toggle').addEventListener('click', function () {
    var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    if (mobileMenuOverlay.style.width === '50%') {
      mobileMenuOverlay.style.width = '0';
    } else {
      mobileMenuOverlay.style.width = '50%';
    }
  });

  function closeMobileMenu() {
    document.getElementById('mobile-menu-overlay').style.width = '0';
  }

  document.addEventListener('DOMContentLoaded', function () {
var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
var mobileMenuContent = document.getElementById('mobile-menu-content');
var navItems = document.querySelectorAll('.nav-item');

// Function to update the background image
function updateBackgroundImage(imagePath) {
  mobileMenuOverlay.style.backgroundImage = 'url(' + imagePath + ')';
}

// Add event listeners to each menu item
navItems.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    var imagePath = item.getAttribute('data-image');
    updateBackgroundImage(imagePath);
  });

  item.addEventListener('mouseout', function () {
    // You can reset the background image to the default when not hovering
    // For example: updateBackgroundImage('path/to/default/image.jpg');
  });
});

// ... (rest of your existing JavaScript code)
});