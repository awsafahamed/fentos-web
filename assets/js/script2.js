document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
  
    document.querySelector('.mobile-nav-toggle').addEventListener('click', function () {
      var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
      if (mobileMenuOverlay.style.width === '100%') {
        mobileMenuOverlay.style.width = '0';
      } else {
        mobileMenuOverlay.style.width = '100%';
      }
    });
  
    function closeMobileMenu() {
      document.getElementById('mobile-menu-overlay').style.width = '0';
    }});
  
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
  
  
  document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  autoplay: {
  delay: 5000,
  disableOnInteraction: false,
  },
  on: {
  slideChange: function () {
    updateBackground();
  },
  },
  });
  
  function updateBackground() {
  var activeSlide = swiper.activeIndex + 1;
  var backgroundUrl = getBackgroundUrl(activeSlide);
  document.getElementById('hero').style.backgroundImage = backgroundUrl;
  }
  
  function getBackgroundUrl(slideNumber) {
  // Define background images for each slide number
  switch (slideNumber) {
  case 1:
    return "url('')";
  case 2:
    return "url('')";
  case 3:
    return "url('')";
  // Add more cases for additional slides
  case 4:
    return "url('')"; 
    
  case 5:
  return "url('')";
  
  case 6:
  return "url('')";
  
  case 7:
  return "url('')";
  }
  }
  
  // Initial background setup
  updateBackground();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var headerLogo = document.getElementById('headerLogo');
    var solutionsSection = document.getElementById('solutions');
  
    function handleScroll() {
      var solutionsSectionRect = solutionsSection.getBoundingClientRect();
  
      // Check if the solutions section is in the viewport
      if (solutionsSectionRect.top <= window.innerHeight && solutionsSectionRect.bottom >= 0) {
        // If it is, hide the header logo
        headerLogo.style.display = 'none';
      } else {
        // If not, show the header logo
        headerLogo.style.display = 'block';
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once on page load to check the initial state
  });
  
  function toggleAccordion(accordion) {
    const content = accordion.querySelector('.accordion-content');
    const icon = accordion.querySelector('.accordion-icon');
  
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    icon.textContent = content.style.display === 'block' ? '-' : '+';
  }
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const projectItems = document.querySelector(".Project-items");
  
    let currentIndex = 0;
    const totalProjects = document.querySelectorAll(".Project-items .card").length;
    const cardWidth = document.querySelector(".Project-items .card").offsetWidth;
  
    nextButton.addEventListener("click", function () {
      if (currentIndex < totalProjects - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    });
  
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalProjects - 1;
      }
      updateSlider();
    });
  
    // Uncomment this section to remove the wheel event for projectItems
    // projectItems.addEventListener("wheel", function (event) {
    //   event.preventDefault();
    //   if (event.deltaY < 0) {
    //     // Scrolling up
    //     if (currentIndex > 0) {
    //       currentIndex--;
    //     } else {
    //       currentIndex = totalProjects - 1;
    //     }
    //   } else {
    //     // Scrolling down
    //     if (currentIndex < totalProjects - 1) {
    //       currentIndex++;
    //     } else {
    //       currentIndex = 0;
    //     }
    //   }
    //   updateSlider();
    // });
  
    function updateSlider() {
      const newPosition = -currentIndex * cardWidth + "px";
      projectItems.style.transform = "translateX(" + newPosition + ")";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const projectItems = document.querySelector(".Project-items");
  
    let currentIndex = 0;
    const totalProjects = document.querySelectorAll(".Project-items .card").length;
    const cardWidth = document.querySelector(".Project-items .card").offsetWidth;
  
    updateButtonState();
  
    nextButton.addEventListener("click", function () {
      if (currentIndex < totalProjects - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
      updateButtonState();
    });
  
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalProjects - 1;
      }
      updateSlider();
      updateButtonState();
    });
  
    function updateButtonState() {
      if (currentIndex === 0) {
        prevButton.classList.add("inactive");
      } else {
        prevButton.classList.remove("inactive");
      }
  
      if (currentIndex === totalProjects - 1) {
        nextButton.classList.add("inactive");
      } else {
        nextButton.classList.remove("inactive");
      }
    }
  
    function updateSlider() {
      const newPosition = -currentIndex * cardWidth + "px";
      projectItems.style.transform = "translateX(" + newPosition + ")";
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('.contact-link');
    const contactSection = document.getElementById('contact');
  
    contactLink.addEventListener('mouseenter', function() {
      contactLink.classList.add('hovered');
      contactSection.classList.add('contact-hovered');
    });
  
    contactLink.addEventListener('mouseleave', function() {
      contactLink.classList.remove('hovered');
      contactSection.classList.remove('contact-hovered');
    });
  });
  
  
  function playYouTubeVideo(videoId) {
      // Open YouTube video in a new window or modal
      window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
    }
  
  
    document.addEventListener('DOMContentLoaded', function () {
      const videoData = [
        { id: 'Ycl5IKxSZ5I', title: 'IT Industry That Drives Hospitality 2023' },
        { id: '4SH-nvvV77A', title: 'Solax Power Training Event' },
        { id: 'Df1148hY7WY', title: 'Ready to make the Switch to Solar? Watch this!' }, // New video added
      ];
  
      const cardsContainer = document.getElementById('youtube-cards-container');
  
      videoData.forEach(video => {
        // Fetch YouTube video thumbnail using the YouTube Data API
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${video.id}&part=snippet&key=AIzaSyBPGUaO3op4PX7Qig43y4_zY5LP06NlehA`)
          .then(response => response.json())
          .then(data => {
            const thumbnailUrl = data.items[0].snippet.thumbnails.medium.url;
  
            // Create a card element
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${thumbnailUrl}" alt="${video.title} Thumbnail">
              <h3>${video.title}</h3>
            `;
  
            // Add click event to play the YouTube video
            card.addEventListener('click', function () {
              playYouTubeVideo(video.id);
            });
  
            // Append the card to the container
            cardsContainer.appendChild(card);
          })
          .catch(error => console.error('Error fetching YouTube data:', error));
      });
  
      function playYouTubeVideo(videoId) {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      }
    });
  
  
    document.addEventListener('DOMContentLoaded', function () {
    const slides = [
      { title: "Solar ", description: "Brightening Your World", image: "./assets/img/sol.jpg" },
      { title: "Ict", description: "Ensuring Connections", image: "./assets/img/ict.jpg" },
      { title: "Fire", description: "Your Protection Is Our Priority ", image: "./assets/img/fir.jpg" },
      { title: "Electrical", description: "Ensuring Safety", image: "./assets/img/ele.jpg" },
      { title: "Lighting", description: "Illuminating Lives", image: "./assets/img/light3.jpg" },
      { title: "Plumbing", description: "Experts in Reliable System", image: "./assets/img/plumb.jpg" },
      { title: "MVAC", description: "Delivering Limitless Comfort", image: "./assets/img/mvac.jpg" },
      { title: "Security and Surveillance", description: "Clean and Sustainable", image: "./assets/img/camera.jpg" }
    ];
  
    let currentIndex = 0;
  
    function changeSlide() {
      // Update content and background image
      document.getElementById('title').textContent = slides[currentIndex].title;
      document.getElementById('description').textContent = slides[currentIndex].description;
      document.querySelector('.box3 img').src = slides[currentIndex].image;
  
      // Move to the next slide
      currentIndex = (currentIndex + 1) % slides.length;
    }
  
    // Initial slide change
    changeSlide();
  
    // Set interval for automatic slide change every 5 seconds (5000 milliseconds)
    setInterval(changeSlide, 2000);
  
    const projectsCountElement = document.getElementById('projectsCount');
    const yearsCountElement = document.getElementById('yearsCount');
  
    let projectsCount = 0;
    let yearsCount = 0;
  
    function startCounting() {
      const intervalId = setInterval(() => {
        // Update the counts
        projectsCount += 5; // You can adjust the increment value
        yearsCount += 1;    // You can adjust the increment value
  
        // Update the HTML content
        projectsCountElement.textContent = projectsCount.toLocaleString(); // Adds commas for better readability
        yearsCountElement.textContent = yearsCount;
  
        // Stop counting when you reach a certain limit
        if (projectsCount >= 500 && yearsCount >= 100) {
          clearInterval(intervalId);
        }
      }, 100); // Adjust the interval duration (in milliseconds)
    }
  
    // Start counting when the document is ready
    startCounting();
  });
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (imageList.clientWidth - slideButtons[0].offsetWidth);
    slideButtons[0].style.display = scrollPosition <= 0 ? "none" : "flex";
    slideButtons[1].style.display = scrollPosition >= maxScrollLeft ? "none" : "flex";
    };
    
    const handleSlideButtons = () => {
    updateScrollThumbPosition();
    };
    
    const slideImages = (direction) => {
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
    
    slideButtons.forEach(button => {
    button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    slideImages(direction);
    });
    });
    
    imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    });
    
    window.addEventListener("resize", () => {
    maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    handleSlideButtons();
    });
    
    handleSlideButtons();
    });
    
  
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
        
        const solutionLinks = document.querySelectorAll('.solutions-link');
        const contentDivs = document.querySelectorAll('.solution-list-content');
        const imageDivs = document.querySelectorAll('.solution-list-image');
    
        let currentIndex = 0;
    
        function showSolution(index) {
          solutionLinks.forEach((link) => link.classList.remove('active'));
          solutionLinks[index].classList.add('active');
    
          contentDivs.forEach((div) => div.style.display = 'none');
          contentDivs[index].style.display = 'block';
    
          imageDivs.forEach((div) => div.style.display = 'none');
          imageDivs[index].style.display = 'block';
        }
    
        function nextSolution() {
          currentIndex = (currentIndex + 1) % solutionLinks.length;
          showSolution(currentIndex);
        }
    
        setInterval(nextSolution, 3000); // Change 3000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
    
        solutionLinks.forEach((link, index) => {
          link.addEventListener('click', () => {
            // Remove 'active' class from all links
            solutionLinks.forEach((link) => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            link.classList.add('active');
    
            // Hide all content divs
            contentDivs.forEach((div) => div.style.display = 'none');
            // Show the corresponding content div
            contentDivs[index].style.display = 'block';
    
            // Hide all image divs
            imageDivs.forEach((div) => div.style.display = 'none');
            // Show the corresponding image div
            imageDivs[index].style.display = 'block';
          });
        });
  
        
  
        