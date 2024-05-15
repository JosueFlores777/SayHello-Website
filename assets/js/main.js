
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

});

/*Video Home */

function handleScroll() {
  var videoHome = document.getElementById("videoHome");
  var video = document.getElementById("video");
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth; // Obtener el ancho de la ventana


  if (windowWidth > 600) {
    var videoBottom = video.getBoundingClientRect().bottom + window.scrollY;
    var defaultPadding = 90;
    var paddingValue = scrollPosition > 0 ? 0 : defaultPadding;

    if (videoBottom <= scrollPosition + windowHeight) {
      paddingValue = defaultPadding;
    }

    videoHome.style.padding = "0 " + paddingValue + "px";
  }

  if (windowWidth <= 599) {
    videoHome.style.padding = "0 " + 0 + "px";
    video.pause();
  } else {
    video.play();
  }
}
window.addEventListener("scroll", handleScroll);
handleScroll();


/* */



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


var boxes = [
  {
    typeWork: 'Marketing Campaign ',
    image: './assets/img/Portfolio2024/Card Images/bebe-mundo-cover-image.jpg',
    titleModal: 'Bebemundo',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: ' Bebemundo is the biggest baby items store in El Salvador. We partnered with them for their summer campaign, aiming to capture the essence of the season with eye-catching images that resonate with their audience.',

    video: '',
    imgcard1: './assets/img/Portfolio2024/bebeMundo/bebe-mundo-project-showcase-01.jpg',
    imgcard2: './assets/img/Portfolio2024/bebeMundo/bebe-mundo-project-showcase-02.jpg',
    imgcard3: './assets/img/Portfolio2024/bebeMundo/bebe-mundo-project-showcase-03.jpg',
    imgcard4: './assets/img/Portfolio2024/bebeMundo/bebe-mundo-project-showcase-04.jpg',

    testiModal: 'Our greatest differentiator is our commitment to the brands that trust us. We aim to understand their needs and collaborate closely with our clients. Throughout the process, we strive to educate our clients and translate their ideas into a final product',
    imgTestim: './assets/img/team/fotos web-fede.jpg',
    nameTest: 'Federico Trujillo-Growth Director',
  },  {
    typeWork: 'Website Development',
    image: './assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 01.jpg',
    titleModal: 'Hotel Equinoccio',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: 'Equinoccio is a hotel situated in Lake Coatepeque, a popular tourist spot in El Salvador. Our client wanted to revamp their website to mirror the aesthetics and cleanliness portrayed in their social media. Together, we worked on UX/UI design and website development to achieve their desired look and feel.',

    video: './assets/img/Portfolio2024/videos/Hotel Equinoccio Showcase_1080p.mp4',
    imgcard1: './assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 02.jpg',
    imgcard2: './assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 03.jpg',
    imgcard3: './assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 04.jpg',
    imgcard4: './assets/img/Portfolio2024/Equinoccio/equinoccio-project-showcase 05.jpg',

    testiModal: 'Our greatest differentiator is our commitment to the brands that trust us. We aim to understand their needs and collaborate closely with our clients. Throughout the process, we strive to educate our clients and translate their ideas into a final product',
    imgTestim: './assets/img/team/fotos web-fede.jpg',
    nameTest: 'Federico Trujillo-Growth Director',
  }, {
    typeWork: 'Marketing Campaign',
    image: './assets/img/Portfolio2024/TeatroPoma/tlp-project-showcase-05.jpg',
    titleModal: 'Teatro Luis Poma',
    Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
    cardText: 'We collaborated with Teatro Luis Poma for their 20th anniversary celebration of continuous theater seasons. For this special occasion, we created the "Teatromorphosis" campaign together.',
    video: './assets/img/Portfolio2024/videos/Teatro Luis Poma20th Anniversary.mp4',
    imgcard1: './assets/img/Portfolio2024/TeatroPoma/fundacion-poma-showcase-01.jpg',
    imgcard2: './assets/img/Portfolio2024/TeatroPoma/fundacion-poma-showcase-02.jpg',
    imgcard3: './assets/img/Portfolio2024/TeatroPoma/fundacion-poma-showcase-03.jpg',
    imgcard4: './assets/img/Portfolio2024/TeatroPoma/fundacion-poma-showcase-04.jpg',

    testiModal: 'Our greatest differentiator is our commitment to the brands that trust us. We aim to understand their needs and collaborate closely with our clients. Throughout the process, we strive to educate our clients and translate their ideas into a final product',
    imgTestim: './assets/img/team/fotos web-fede.jpg',
    nameTest: 'Federico Trujillo-Growth Director',

  }

];

var modalCloseVide = false;
function selectBox(index) {
  if(index=== 17){
    event.preventDefault();
    document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7";
    document.getElementById("fullscreen-background").style.zIndex = 10;
    var selectedBox = boxes[index - 1];
    document.getElementById("scrollerWork2").style.display = "block";
    var video = document.getElementById('video');
    video.pause();
    modalCloseVide = true;
  }

  if (index === 16) {
    event.preventDefault();
    document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7";
    document.getElementById("fullscreen-background").style.zIndex = 10;
    var selectedBox = boxes[index - 1];
    document.getElementById("scrollerWork2").style.display = "block";
    var video = document.getElementById('video');
    video.pause();
    modalCloseVide = false;
  } else {
    
    document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7";
    document.getElementById("fullscreen-background").style.zIndex = 10;
    var selectedBox = boxes[index - 1];
    document.getElementById("scrollerWork").style.display = "block";
    document.getElementById("workcardModal").textContent = selectedBox.typeWork;
    document.getElementById("titleModal").textContent = selectedBox.titleModal;
    /* document.getElementById("titleWork").textContent = selectedBox.Subtitle;*/
    document.getElementById("cardText").textContent = selectedBox.cardText;
  
    document.getElementById("imgcardPri").src = selectedBox.image;
    document.getElementById("imgcard1").src = selectedBox.imgcard1;
    document.getElementById("imgcard2").src = selectedBox.imgcard2;
    document.getElementById("imgcard3").src = selectedBox.imgcard3;
    document.getElementById("imgcard4").src = selectedBox.imgcard4;

    document.getElementById("testomioModa").textContent = selectedBox.testiModal;
    document.getElementById("avatarTesti").src = selectedBox.imgTestim;
    document.getElementById("nameTesti").textContent = selectedBox.nameTest;
    document.getElementById("avatarTesti").style.display =  "none";
    
    if (selectedBox.video) {
      document.getElementById("video").src = selectedBox.video;
      document.getElementById("video").style.display = "block";
      var video = document.getElementById('video');
      video.muted = false;
    } else {
      document.getElementById("video").style.display = "none";
    }

  }
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

function clearSelection1() {
  if( modalCloseVide === true){
    var video = document.getElementById('video');
    video.play();
    document.getElementById("scrollerWork2").scrollTop = 0;
    document.getElementById("scrollerWork2").style.display = "none";
    document.getElementById("fullscreen-background").style.zIndex = -6;
    document.getElementById("fullscreen-background").style.backgroundColor = "black";
  }else{
    var video = document.getElementById('video');
    video.pause();
    document.getElementById("scrollerWork2").scrollTop = 0;
    document.getElementById("scrollerWork2").style.display = "none";
    document.getElementById("fullscreen-background").style.zIndex = -6;
    document.getElementById("fullscreen-background").style.backgroundColor = "black";
  }

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

document.getElementById("scrollerWork2").addEventListener("scroll", function () {
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

