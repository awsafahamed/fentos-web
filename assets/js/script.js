
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
  return "url('./assets/img/Hero/solar-panels-roof-solar-cell.jpg')";
case 2:
  return "url('./assets/img/Hero/electrical.jpg')";
case 3:
  return "url('./assets/img/Hero/Ict.jpg')";
// Add more cases for additional slides
case 4:
  return "url('./assets/img/Hero/fire.jpg')"; 
  
case 5:
return "url('./assets/img/Hero/light.jpg')";

case 6:
return "url('./assets/img/Hero/plumbing.jpg')";

case 7:
return "url('./assets/img/Hero/ac.jpg')";
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