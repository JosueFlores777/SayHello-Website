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



/*Card TestymoHome */
const cardStack = document.querySelector('.cardPageTestiHome-stack');
let cards = Array.from(cardStack.children);
let intervalId;

function startFlipping() {
  intervalId = setInterval(() => {
    moveLastCardToFront();
  }, 5700);
}

function moveLastCardToFront() {
  const lastCard = cards.pop();
  cards.unshift(lastCard);
  updateCardStyles();
}

function setupCards() {
  cards.forEach((card, index) => {
    card.style.top = `${index * -50}px`;
    card.style.transform = `scale(${1 - index * 0.09})`;
    card.style.zIndex = cards.length - index;
    card.addEventListener('click', () => {
      bringToFront(card);
    });
  });
}

function bringToFront(selectedCard) {

  clearInterval(intervalId);

  cards = cards.filter(card => card !== selectedCard);
  cards.unshift(selectedCard);
  updateCardStyles();

  setTimeout(startFlipping, 5700);
}

function updateCardStyles() {
  cards.forEach((card, index) => {
    card.style.top = `${index * -50}px`;
    card.style.transform = `scale(${1 - index * 0.09})`;
    card.style.zIndex = cards.length - index;
    card.style.backgroundColor = index === 0 ? '#805313' : (index === 1 ? '#e1b911' : '#f8ef70');
    applyAnimation(card, index);
  });
}

function applyAnimation(card, index) {
  card.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__fadeIn');
  if (index === 0) {
    card.classList.add('animate__animated', 'animate__zoomInDown');
    setTimeout(() => card.classList.remove('animate__animated', 'animate__zoomInDown'), 1000);
  } else {
    card.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => card.classList.remove('animate__animated', 'animate__fadeIn'), 500);
  }
}

setupCards();
startFlipping();


/* */
var lastScrollTop = 0;

function handleVideoZoom() {
  var scrollPosition = window.scrollY;
  var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollPosition;

  var videoContainer = document.querySelector('.video-container');
  var videoIframe = document.querySelector('.video-container iframe');

  var scaleFactor = 1 - (scrollPosition / 20);

  videoIframe.style.width = (20 + 20 * scaleFactor) + 'px';
  videoIframe.style.height = (250 + 200 * scaleFactor) + 'px';
}

window.addEventListener('scroll', handleVideoZoom);
document.addEventListener('DOMContentLoaded', handleVideoZoom);



window.addEventListener('scroll', function () {
  var distanceToFooterTop = document.querySelector('footer').getBoundingClientRect().top;

  if (distanceToFooterTop < window.innerHeight) {
    document.querySelector('.draw-on-scroll').style.width = '50%';
    document.querySelector('.draw-on-scroll').style.width = '50%';
    document.querySelector('.draw-on-scroll2').style.width = '90%';
    document.querySelector('.draw-on-scroll2').style.right = '0';
  } else {
    document.querySelector('.draw-on-scroll').style.width = '0';
    document.querySelector('.draw-on-scroll').style.width = '0';
    document.querySelector('.draw-on-scroll2').style.width = '90%';
    document.querySelector('.draw-on-scroll2').style.right = '0';
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video-container');
  const videoIframe = document.querySelector('.video-container iframe');

  videoIframe.style.width = '450px';
  videoIframe.style.height = '250px';
  videoIframe.style.transform = 'scale(1)';

  const sr = ScrollReveal({
    duration: 2000,
    delay: 300,
    origin: "bottom",
    distance: "180px",
    reset: true
  });

  sr.reveal(".animationScroll", {
    origin: "bottom",
    interval: 200,
    reset: true
  });


  const sr12 = ScrollReveal({
    duration: 2000,
    delay: 990,
    origin: "bottom",
    distance: "380px",
    reset: true
  });

  sr12.reveal(".carrucelHome", {
    origin: "bottom",
    interval: 200,
    reset: true
  });
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scaleFactor = Math.min(scrollPosition / 400, 1);

    videoIframe.style.width = (450 + 350 * scaleFactor) + 'px';
    videoIframe.style.height = (250 + 200 * scaleFactor) + 'px';
    videoIframe.style.transform = 'scale(' + (1 + 0.2 * scaleFactor) + ')';
  });
});
/*
const sr1 = ScrollReveal({
  duration: 2000,
  delay: 300,
  origin: "bottom",
  distance: "480px",
  reset: true
});*/

/*
sr1.reveal(".mySwiper", {
  origin: "bottom",
  interval: 200,
  reset: true
});
*/


var showMegaCheckbox = document.querySelector('.mobile-item');
var megaBox = document.querySelector('.mega-box');

showMegaCheckbox.addEventListener('change', function () {
  if (this.checked) {
    megaBox.style.display = 'block';
  } else {
    megaBox.style.transition = 'all 0.0001s ease;';
    megaBox.style.opacity = '0';
    setTimeout(function () {
      megaBox.style.display = 'none';
    }, 300);
  }
});


/* card carrucel */
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
const scroller = document.querySelector(".scrollerHome");
const scrollerInner = scroller.querySelector(".scrollerHome__inner");

scrollerInner.addEventListener("mouseenter", () => {
  scrollerInner.style.animationPlayState = "paused";
});

scrollerInner.addEventListener("mouseleave", () => {
  scrollerInner.style.animationPlayState = "running";
});

const isMobile = window.innerWidth <= 768;

if (isMobile) {
  let touchStartX = null;

  scrollerInner.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
    scrollerInner.style.animationPlayState = "paused";
  });

  scrollerInner.addEventListener("touchend", () => {
    scrollerInner.style.animationPlayState = "running";
    touchStartX = null;
  });

  scrollerInner.addEventListener("touchmove", (event) => {
    if (touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      scrollerInner.scrollLeft -= deltaX;
      touchStartX = touchEndX;
    }
  });

  document.addEventListener("touchstart", (event) => {
    if (!scrollerInner.contains(event.target)) {
      scrollerInner.style.animationPlayState = "running";
    }
  });
} else {
  scrollerInner.addEventListener("mouseenter", () => {
    scrollerInner.style.animationPlayState = "paused";
  });

  scrollerInner.addEventListener("mouseleave", () => {
    scrollerInner.style.animationPlayState = "running";
  });
}