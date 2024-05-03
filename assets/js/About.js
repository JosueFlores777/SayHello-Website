const scrollers = document.querySelectorAll(".scrollerAbout");
const scrollers1 = document.querySelectorAll(".scrollerHome");


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



/*Equipo de trabajo*/


$(window).scroll(function () {
  var sectionAbout3Top = $('.sectionAbout3').offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var scrollNew = scrollTop;

  if (sectionAbout3Top <= (scrollTop + windowHeight)) {
    var parallax = (scrollNew / 6);
    if ($(window).width() <= 1024) {

      if ($(window).width() <= 845) {
        $("figure:nth-child(2)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(4)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(6)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(8)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(10)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(12)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(14)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(16)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(18)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(20)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(22)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(24)").css("transform", "translateY(" + (parallax - 250) + "px)");

      } else if ($(window).width() <= 550) {
        $("figure:nth-child(2)").css("transform", "none");
        $("figure:nth-child(4)").css("transform", "none");
        $("figure:nth-child(6)").css("transform", "none");
        $("figure:nth-child(8)").css("transform", "none");
        $("figure:nth-child(10)").css("transform", "none");
        $("figure:nth-child(12)").css("transform", "none");
        $("figure:nth-child(14)").css("transform", "none");
        $("figure:nth-child(16)").css("transform", "none");
        $("figure:nth-child(18)").css("transform", "none");
        $("figure:nth-child(20)").css("transform", "none");
        $("figure:nth-child(22)").css("transform", "none");
        $("figure:nth-child(24)").css("transform", "none");

      } else {
        $("figure:nth-child(2)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(5)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(8)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(8)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(11)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(14)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(17)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(20)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(23)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(26)").css("transform", "translateY(" + (parallax - 250) + "px)");
        $("figure:nth-child(29)").css("transform", "translateY(" + (parallax - 250) + "px)");

      }
    } else {
      $("figure:nth-child(2)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(4)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(6)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(8)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(10)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(12)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(13)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(15)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(17)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(19)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(21)").css("transform", "translateY(" + (parallax - 250) + "px)");
      $("figure:nth-child(23)").css("transform", "translateY(" + (parallax - 250) + "px)");
    }

  }
});


/* */

function ejecutarAnimacion() {
  var distanceToFooterTop = document.querySelector('footer').getBoundingClientRect().top;

  if (distanceToFooterTop < window.innerHeight) {
    document.querySelector('.draw-on-scroll-my').style.width = '91%';
    document.querySelector('.draw-on-scroll6').style.width = '50%';
    /*document.querySelector('.draw-on-scroll3').style.width = '80%';*/
    document.querySelector('.draw-on-scroll4').style.width = '80%';
    document.querySelector('.draw-on-scroll').style.width = '50%';
    document.querySelector('.draw-on-scroll2').style.right = '50%';
  } else {
    document.querySelector('.draw-on-scroll-my').style.width = '0';
    document.querySelector('.draw-on-scroll6').style.width = '0';
  }
}

window.addEventListener('load', function () {
  ejecutarAnimacion();
});

window.addEventListener('scroll', function () {
  ejecutarAnimacion();
});



/* testi*/

/*Card TestymoHome */
const cardStack = document.querySelector('.cardPageTestiHome-stack');
let cards = Array.from(cardStack.children);
let intervalId;

function startFlipping() {
  intervalId = setInterval(() => {
    moveLastCardToFront();
  }, 4700);
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

  setTimeout(startFlipping, 4700);
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

/*Carrucel about */





function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerAbout__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });

  scrollers1.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerHome__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
  const scroller = document.querySelector(".scrollerHome", ".scrollerAbout");
  const scrollerHomeInner = scroller.querySelector(".scrollerHome__inner", ".scrollerAbout__inner");

  scrollerHomeInner.addEventListener("mouseenter", () => {
    scrollerHomeInner.style.animationPlayState = "paused";
  });

  scrollerHomeInner.addEventListener("mouseleave", () => {
    scrollerHomeInner.style.animationPlayState = "running";
  });


  const scroller2 = document.querySelector(".scrollerAbout");
  const scrollerHomeInner2 = scroller2.querySelector(".scrollerAbout__inner");

  scrollerHomeInner2.addEventListener("mouseenter", () => {
    scrollerHomeInner2.style.animationPlayState = "paused";
  });

  scrollerHomeInner2.addEventListener("mouseleave", () => {
    scrollerHomeInner2.style.animationPlayState = "running";
  });


  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    let touchStartX = null;

    scrollerHomeInner.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
      scrollerHomeInner.style.animationPlayState = "paused";
    });

    scrollerHomeInner.addEventListener("touchend", () => {
      scrollerHomeInner.style.animationPlayState = "running";
      touchStartX = null;
    });

    scrollerHomeInner2.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
      scrollerHomeInner2.style.animationPlayState = "paused";
    });

    scrollerHomeInner2.addEventListener("touchend", () => {
      scrollerHomeInner2.style.animationPlayState = "running";
      touchStartX = null;
    });

    scrollerHomeInner.addEventListener("touchmove", (event) => {
      if (touchStartX !== null) {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        scrollerHomeInner.scrollLeft -= deltaX;
        touchStartX = touchEndX;
      }
    });

    document.addEventListener("touchstart", (event) => {
      if (!scrollerHomeInner.contains(event.target)) {
        scrollerHomeInner.style.animationPlayState = "running";
      }
    });
    /* */

    scrollerHomeInner2.addEventListener("touchmove", (event) => {
      if (touchStartX !== null) {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        scrollerHomeInner2.scrollLeft -= deltaX;
        touchStartX = touchEndX;
      }
    });

    document.addEventListener("touchstart", (event) => {
      if (!scrollerHomeInner2.contains(event.target)) {
        scrollerHomeInner2.style.animationPlayState = "running";
      }
    });

    /* */


  } else {
    scrollerHomeInner.addEventListener("mouseenter", () => {
      scrollerHomeInner.style.animationPlayState = "paused";
    });

    scrollerHomeInner.addEventListener("mouseleave", () => {
      scrollerHomeInner.style.animationPlayState = "running";
    });

    scrollerHomeInner2.addEventListener("mouseenter", () => {
      scrollerHomeInner2.style.animationPlayState = "paused";
    });

    scrollerHomeInner2.addEventListener("mouseleave", () => {
      scrollerHomeInner2.style.animationPlayState = "running";
    });
  }

}

