
var boxes = [
  {
    typeWork: 'Marketing Campaign ',
    image: 'https://images.unsplash.com/photo-1712675670807-f925abe035b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titleModal: 'Bebemundo',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: ' Bebemundo is the biggest baby items store in El Salvador. We partnered with them for their summer campaign, aiming to capture the essence of the season with eye-catching images that resonate with their audience.',

    imgcard1: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    imgcard2: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    imgcard3: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    imgcard4: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',

    testiModal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque nihil voluptatibus perferendis sed, nulla, odit vel minima dolores iure exercitationem debitis ut alias vitae in dolore eos praesentium quis.',
    imgTestim: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    nameTest: 'Name 1',
  },
  {
    typeWork: 'Website Development',
    image: '../assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 01.png',
    titleModal: 'Hotel Equinoccio',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: 'Equinoccio is a hotel situated in Lake Coatepeque, a popular tourist spot in El Salvador. Our client wanted to revamp their website to mirror the aesthetics and cleanliness portrayed in their social media. Together, we worked on UX/UI design and website development to achieve their desired look and feel.',

    video: '../assets/img/Portfolio2024/videos/Hotel Equinoccio Showcase_1080p.mp4',
    imgcard1: '../assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 02.png',
    imgcard2: '../assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 03.png',
    imgcard3: '../assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 04.png',
    imgcard4: '../assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 05.png',


    testiModal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque nihil voluptatibus perferendis sed, nulla, odit vel minima dolores iure exercitationem debitis ut alias vitae in dolore eos praesentium quis.',
    imgTestim: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    nameTest: 'Name 1',
  }, {
    typeWork: 'Marketing Campaign',
    image: 'https://images.unsplash.com/photo-1712675670807-f925abe035b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titleModal: 'Teatro Luis Poma',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: 'We collaborated with Teatro Luis Poma for their 20th anniversary celebration of continuous theater seasons. For this special occasion, we created the "Teatromorphosis" campaign together.',
    video: '../assets/img/Portfolio2024/videos/Teatro Luis Poma20th Anniversary.mp4',
    imgcard1: '../assets/img/Portfolio2024/TeatroPoma/PORTADA-facebook-Naara.png',
    imgcard2: '../assets/img/Portfolio2024/TeatroPoma/Mini campana-tlp logo12.jpg',
    imgcard3: '../assets/img/Portfolio2024/TeatroPoma/portada web_acto 1_2022.png',
    imgcard4: '../assets/img/Portfolio2024/TeatroPoma/Mini campana-tlp logo12.jpg',

    testiModal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque nihil voluptatibus perferendis sed, nulla, odit vel minima dolores iure exercitationem debitis ut alias vitae in dolore eos praesentium quis.',
    imgTestim: 'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    nameTest: 'Name 1',
  }
];
function selectBox(index) {
  document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7";
  document.getElementById("fullscreen-background").style.zIndex = 10;
  var selectedBox = boxes[index - 1];
  document.getElementById("scrollerWork").style.display = "block";
  document.getElementById("workcardModal").textContent = selectedBox.typeWork;
  document.getElementById("titleModal").textContent = selectedBox.titleModal;
 /* document.getElementById("titleWork").textContent = selectedBox.Subtitle;*/
  document.getElementById("cardText").textContent = selectedBox.cardText;

  document.getElementById("video").src = selectedBox.video;
  document.getElementById("imgcardPri").src = selectedBox.image;
  document.getElementById("imgcard1").src = selectedBox.imgcard1;
  document.getElementById("imgcard2").src = selectedBox.imgcard2;
  document.getElementById("imgcard3").src = selectedBox.imgcard3;
  document.getElementById("imgcard4").src = selectedBox.imgcard4;

  document.getElementById("testomioModa").textContent = selectedBox.testiModal;
  document.getElementById("avatarTesti").src = selectedBox.imgTestim;
  document.getElementById("nameTesti").textContent = selectedBox.nameTest;
  var video = document.getElementById('video');
  video.muted = false;
}

function clearSelection() {
  var video = document.getElementById('video');
  if (video) {
      video.muted = true;
  }
  document.getElementById("scrollerWork").scrollTop = 0;
  document.getElementById("scrollerWork").style.display = "none";
  document.getElementById("fullscreen-background").style.zIndex = -6;
  document.getElementById("fullscreen-background").style.backgroundColor = "black";

}

document.getElementById("scrollerWork").addEventListener("scroll", function () {
  var scrollPosition = this.scrollTop;
  if (window.innerWidth < 478) {
    paddingValue = scrollPosition > 0 ? 0 : 30;
    var paddi = "padding-left 0.9s ease, padding-right 0.9s ease";;
  } else {
    paddingValue = scrollPosition > 0 ? 0 : 60;
    var paddi = "padding-left 0.4s ease, padding-right 0.4s ease";;
  }
  this.style.transition = paddi;
  this.style.padding = paddingValue + "px";
});























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



/*Card TestymoHome 
const cardStack = document.querySelector('.cardPageTestiHome-stack');
let cards = Array.from(cardStack.children);
let intervalId;

function startFlipping() {
  intervalId = setInterval(() => {
    moveLastCardToFront();
  }, 15700);
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

  setTimeout(startFlipping, 15700);
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
/*
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
*/


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

  const sr123 = ScrollReveal({
    duration: 2000,
    delay: 300,
    origin: "bottom",
    distance: "180px",
    reset: true
  });

  sr123.reveal(".animationScroll2", {
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
 /* window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scaleFactor = Math.min(scrollPosition / 400, 1);


      videoIframe.style.width = (400 + 350 * scaleFactor) + 'px';
      videoIframe.style.height = (250 + 200 * scaleFactor) + 'px';
      videoIframe.style.transform = 'scale(' + (1 + 0.2 * scaleFactor) + ')';

  });*/
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

