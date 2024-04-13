const scrollers = document.querySelectorAll(".scrollerHome");

// Observador de intersección para mostrar el contenido cuando se hace scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerHome__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


/*Card TestymoHome */
const cardStack = document.querySelector('.cardPageTestiHome-stack');
let cards = Array.from(cardStack.children);

function startFlipping() {
  // Array de colores para cada tarjeta
  const colors = ['#805313', '#e1b911', '#f8ef70'];

  setInterval(() => {
    const lastCard = cards.pop();
    cards.unshift(lastCard);
    cards.forEach((card, index) => {
      const newIndex = (index + 1) % cards.length;
      card.style.top = `${newIndex * -50}px`;
      card.style.transform = `scale(${1 - newIndex * 0.09})`;
      card.style.zIndex = cards.length - newIndex;
      card.style.backgroundColor = colors[newIndex];
      if (index === 1) {
        card.style.backgroundColor = '#f8ef70';
      }
      if (newIndex === 0) {
        card.classList.add('animate__animated', 'animate__zoomInDown');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__zoomInDown');
        }, 1000); 
        
      }
      if (newIndex === 1) {
        card.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }, 500); 
      }
      if (newIndex === 2) {
        card.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }, 500); 
      }
    });
  }, 4100);
}

startFlipping();

var lastScrollTop = 0;

function handleVideoZoom() {
  var scrollPosition = window.scrollY;
  var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollPosition;

  var videoContainer = document.querySelector('.video-container');
  var videoIframe = document.querySelector('.video-container iframe');

 var scaleFactor = 1 - (scrollPosition / 400); 

  videoIframe.style.width = (450 + 350 * scaleFactor) + 'px'; 
  videoIframe.style.height = (250 + 200 * scaleFactor) + 'px';
}

window.addEventListener('scroll', handleVideoZoom);
document.addEventListener('DOMContentLoaded', handleVideoZoom);